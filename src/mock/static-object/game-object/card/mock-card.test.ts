import { MockCard, MockCardParams } from "./mock-card";
import { MockCardDetails } from "../../../card-details/mock-card-details";
import { MockCardHolder } from "../card-holder/mock-card-holder";
import { MockGlobalScriptingEvents } from "../../../global-scripting-events/mock-global-scripting-events";
import { MockVector } from "../../../vector/mock-vector";
import { Card, CardDetails } from "@tabletop-playground/api";
import { MockPlayer } from "../../../player/mock-player";
import { MockGameWorld } from "../../../game-world/mock-game-world";

it("constructor", () => {
    const params: MockCardParams = {
        cardDetails: [new MockCardDetails({})],
        cardHolder: new MockCardHolder(),
        isFaceUp: true,
    };
    const card = new MockCard(params);
    expect(card.getAllCardDetails()).toEqual(params.cardDetails);
    expect(card.getHolder()).toEqual(params.cardHolder);
    expect(card.isInHolder()).toEqual(true);
    expect(card.isInHand()).toEqual(false);
    expect(card.getStackSize()).toEqual(params.cardDetails?.length);
    expect(card.isFaceUp()).toEqual(params.isFaceUp);
});

it("defaults to singleton card", () => {
    const card = new MockCard();
    expect(card.getStackSize()).toEqual(1);
});

it("addCards (size mismatch)", () => {
    const src = new MockCard({
        _modelSize: new MockVector(1, 3, 1),
        cardDetails: [new MockCardDetails({ name: "src1" })],
    });
    const dst = new MockCard({
        _modelSize: new MockVector(3, 1, 1),
        cardDetails: [new MockCardDetails({ name: "dst1" })],
    });
    expect(dst.canAddCards(src)).toEqual(false);
    const success = dst.addCards(src);
    expect(success).toEqual(false);
});

it("addCards (standard)", () => {
    const src = new MockCard({
        cardDetails: [
            new MockCardDetails({ name: "src1" }),
            new MockCardDetails({ name: "src2" }),
            new MockCardDetails({ name: "src3" }),
        ],
    });
    const dst = new MockCard({
        cardDetails: [
            new MockCardDetails({ name: "dst1" }),
            new MockCardDetails({ name: "dst2" }),
            new MockCardDetails({ name: "dst3" }),
        ],
    });

    const success = dst.addCards(src);
    expect(success).toEqual(true);
    const names = dst.getAllCardDetails().map((details) => details.name);
    expect(names).toEqual(["dst1", "dst2", "dst3", "src1", "src2", "src3"]);
});

it("addCards (singletones)", () => {
    const src = new MockCard({
        cardDetails: [new MockCardDetails({ name: "src1" })],
    });
    const dst = new MockCard({
        cardDetails: [new MockCardDetails({ name: "dst1" })],
    });

    const success = dst.addCards(src);
    expect(success).toEqual(true);
    const names = dst.getAllCardDetails().map((details) => details.name);
    expect(names).toEqual(["dst1", "src1"]);
    expect(dst.getStackSize()).toEqual(2);
});

it("addCards (toFront)", () => {
    const src = new MockCard({
        cardDetails: [
            new MockCardDetails({ name: "src1" }),
            new MockCardDetails({ name: "src2" }),
            new MockCardDetails({ name: "src3" }),
        ],
    });
    const dst = new MockCard({
        cardDetails: [
            new MockCardDetails({ name: "dst1" }),
            new MockCardDetails({ name: "dst2" }),
            new MockCardDetails({ name: "dst3" }),
        ],
    });

    const toFront = true;
    const success = dst.addCards(src, toFront);
    expect(success).toEqual(true);
    const names = dst.getAllCardDetails().map((details) => details.name);
    expect(names).toEqual(["src1", "src2", "src3", "dst1", "dst2", "dst3"]);
});

it("addCards (offset)", () => {
    const src = new MockCard({
        cardDetails: [
            new MockCardDetails({ name: "src1" }),
            new MockCardDetails({ name: "src2" }),
            new MockCardDetails({ name: "src3" }),
        ],
    });
    const dst = new MockCard({
        cardDetails: [
            new MockCardDetails({ name: "dst1" }),
            new MockCardDetails({ name: "dst2" }),
            new MockCardDetails({ name: "dst3" }),
        ],
    });

    const toFront = false;
    const offset = 1;
    const success = dst.addCards(src, toFront, offset);
    expect(success).toEqual(true);
    const names = dst.getAllCardDetails().map((details) => details.name);
    expect(names).toEqual(["dst1", "dst2", "src1", "src2", "src3", "dst3"]);
});

it("addCards (toFront, offset)", () => {
    const src = new MockCard({
        cardDetails: [
            new MockCardDetails({ name: "src1" }),
            new MockCardDetails({ name: "src2" }),
            new MockCardDetails({ name: "src3" }),
        ],
    });
    const dst = new MockCard({
        cardDetails: [
            new MockCardDetails({ name: "dst1" }),
            new MockCardDetails({ name: "dst2" }),
            new MockCardDetails({ name: "dst3" }),
        ],
    });

    const toFront = true;
    const offset = 1;
    const success = dst.addCards(src, toFront, offset);
    expect(success).toEqual(true);
    const names = dst.getAllCardDetails().map((details) => details.name);
    expect(names).toEqual(["dst1", "src1", "src2", "src3", "dst2", "dst3"]);
});

it("addCardsAsPlayer", () => {
    const src = new MockCard({
        cardDetails: [new MockCardDetails({ name: "src1" })],
    });
    const dst = new MockCard({
        cardDetails: [new MockCardDetails({ name: "dst1" })],
    });
    const player = new MockPlayer();

    let onInsertedCount = 0;
    dst.onInserted.add(() => {
        onInsertedCount++;
    });

    const success = dst._addCardsAsPlayer(
        src,
        undefined,
        undefined,
        undefined,
        undefined,
        player
    );
    expect(success).toEqual(true);
    const names = dst.getAllCardDetails().map((details) => details.name);
    expect(names).toEqual(["dst1", "src1"]);
    expect(dst.getStackSize()).toEqual(2);
    expect(onInsertedCount).toEqual(1);
});

it("cardDetails", () => {
    const card = new MockCard({
        cardDetails: [
            new MockCardDetails({ name: "a" }),
            new MockCardDetails({ name: "b" }),
            new MockCardDetails({ name: "c" }),
        ],
    });
    expect(card.getAllCardDetails().length).toEqual(3);
    expect(card.getCardDetails().name).toEqual("a");
    expect(card.getCardDetails(1)?.name).toEqual("b");
    expect(card.getCardDetails(3)).toBeUndefined();
});

it("deal", () => {
    const origCardDetails: CardDetails[] = [
        new MockCardDetails({ name: "src1" }),
        new MockCardDetails({ name: "src2" }),
        new MockCardDetails({ name: "src3" }),
    ];

    let src = new MockCard({
        cardDetails: [...origCardDetails],
    });
    expect(src.getStackSize()).toEqual(3);

    let count: number | undefined = undefined; // 1
    let slots: number[] | undefined = undefined; // 1
    src.deal(count, slots);
    expect(src.getStackSize()).toEqual(2);

    src = new MockCard({
        cardDetails: [...origCardDetails],
    });
    expect(src.getStackSize()).toEqual(3);

    count = 1;
    slots = [1];
    src.deal(count, slots);
    expect(src.getStackSize()).toEqual(2);

    src = new MockCard({
        cardDetails: [...origCardDetails],
    });
    expect(src.getStackSize()).toEqual(3);

    count = 1;
    slots = [1, 2];
    src.deal(count, slots);
    expect(src.getStackSize()).toEqual(1);

    src = new MockCard({
        cardDetails: [...origCardDetails],
    });
    expect(src.getStackSize()).toEqual(3);

    count = 2;
    slots = [1];
    src.deal(count, slots);
    expect(src.getStackSize()).toEqual(1);
});

it("divide", () => {
    const src = new MockCard({
        cardDetails: [
            new MockCardDetails({ name: "src1" }),
            new MockCardDetails({ name: "src2" }),
            new MockCardDetails({ name: "src3" }),
        ],
    });
    const stacks = src.divide(2);
    expect(stacks.length).toEqual(2);
    const [a, b] = stacks;
    expect(a.getStackSize()).toEqual(2);
    expect(b.getStackSize()).toEqual(1);
});

it("flipOrUpright", () => {
    const card = new MockCard();
    expect(card.isFaceUp()).toBeFalsy();
    card.flipOrUpright();
    expect(card.isFaceUp()).toBeTruthy();
    card.flipOrUpright();
    expect(card.isFaceUp()).toBeFalsy();
});

it("isInHand", () => {
    const playerSlot = 17;
    const player = new MockPlayer({ slot: playerSlot });
    MockGameWorld.__sharedInstance._reset({ players: [player] });
    const cardHolder = new MockCardHolder({ owningPlayerSlot: playerSlot });
    player.setHandHolder(cardHolder);
    const card = new MockCard({ cardHolder: cardHolder });
    const value = card.isInHand();
    expect(value).toBeTruthy();

    const looseCard = new MockCard();
    expect(looseCard.isInHand()).toBeFalsy();
});

it("moveCardInStack", () => {
    const card = new MockCard({
        cardDetails: [
            new MockCardDetails({ name: "src1" }),
            new MockCardDetails({ name: "src2" }),
            new MockCardDetails({ name: "src3" }),
        ],
    });
    card.moveCardInStack(0, 1);
    const names = card.getAllCardDetails().map((details) => details.name);
    expect(names).toEqual(["src2", "src1", "src3"]);
});

it("removeFromHolder", () => {
    const card = new MockCard({
        cardHolder: new MockCardHolder(),
    });
    expect(card.isInHolder()).toBe(true);
    card.removeFromHolder();
    expect(card.isInHolder()).toBe(false);
});

it("setCardIndexAt", () => {
    const card = new MockCard({
        cardDetails: [new MockCardDetails()],
    });
    expect(card.getCardDetails(0)?.index).toEqual(0);
    card.setCardIndexAt(7, 0);
    expect(card.getCardDetails(0)?.index).toEqual(7);
    card.setCardIndexAt(7, 1000); // out of range
});

it("setTextureOverrideURL", () => {
    const card = new MockCard({
        cardDetails: [new MockCardDetails()],
    });
    expect(card.getCardDetails(0)?.textureOverrideURL).toEqual("");
    card.setTextureOverrideURL("foo");
    expect(card.getCardDetails(0)?.textureOverrideURL).toEqual("foo");
});

it("setTextureOverrideURLAt", () => {
    const card = new MockCard({
        cardDetails: [new MockCardDetails(), new MockCardDetails()],
    });
    expect(card.getCardDetails(0)?.textureOverrideURL).toEqual("");
    expect(card.getCardDetails(1)?.textureOverrideURL).toEqual("");
    card.setTextureOverrideURLAt("foo", 0);
    expect(card.getCardDetails(0)?.textureOverrideURL).toEqual("foo");
    expect(card.getCardDetails(1)?.textureOverrideURL).toEqual("");
    card.setTextureOverrideURLAt("foo", 1000); // out of range
});

it("shuffle", () => {
    const card = new MockCard({
        cardDetails: [
            new MockCardDetails({ name: "src1" }),
            new MockCardDetails({ name: "src2" }),
        ],
    });
    card.shuffle();
    expect(card.getStackSize()).toEqual(2);
});

it("split", () => {
    const src = new MockCard({
        cardDetails: [
            new MockCardDetails({ name: "src1" }),
            new MockCardDetails({ name: "src2" }),
            new MockCardDetails({ name: "src3" }),
        ],
    });
    const stacks = src.split(2);
    expect(stacks.length).toEqual(2);
    const [a, b] = stacks;
    expect(a.getStackSize()).toEqual(2);
    expect(b.getStackSize()).toEqual(1);
});

it("takeCard (standard)", () => {
    const src = new MockCard({
        cardDetails: [
            new MockCardDetails({ name: "src1" }),
            new MockCardDetails({ name: "src2" }),
            new MockCardDetails({ name: "src3" }),
        ],
    });
    const dst = src.takeCards();
    expect(dst).toBeInstanceOf(MockCard);
    const srcNames = src.getAllCardDetails().map((details) => details.name);
    const dstNames = dst?.getAllCardDetails().map((details) => details.name);
    expect(srcNames).toEqual(["src1", "src2"]);
    expect(dstNames).toEqual(["src3"]);
});

it("takeCard (numCards)", () => {
    const src = new MockCard({
        cardDetails: [
            new MockCardDetails({ name: "src1" }),
            new MockCardDetails({ name: "src2" }),
            new MockCardDetails({ name: "src3" }),
        ],
    });
    const numCards = 2;
    const dst = src.takeCards(numCards);
    expect(dst).toBeInstanceOf(MockCard);
    const srcNames = src.getAllCardDetails().map((details) => details.name);
    const dstNames = dst?.getAllCardDetails().map((details) => details.name);
    expect(srcNames).toEqual(["src1"]);
    expect(dstNames).toEqual(["src2", "src3"]);
});

it("takeCard (excess numCards)", () => {
    const src = new MockCard({
        cardDetails: [
            new MockCardDetails({ name: "src1" }),
            new MockCardDetails({ name: "src2" }),
            new MockCardDetails({ name: "src3" }),
        ],
    });
    const numCards = 3; // leaves one card behind
    const dst = src.takeCards(numCards);
    expect(dst).toBeInstanceOf(MockCard);
    const srcNames = src.getAllCardDetails().map((details) => details.name);
    const dstNames = dst?.getAllCardDetails().map((details) => details.name);
    expect(srcNames).toEqual(["src1"]);
    expect(dstNames).toEqual(["src2", "src3"]);
});

it("takeCard (fromFront)", () => {
    const src = new MockCard({
        cardDetails: [
            new MockCardDetails({ name: "src1" }),
            new MockCardDetails({ name: "src2" }),
            new MockCardDetails({ name: "src3" }),
        ],
    });
    const numCards = undefined;
    const fromFront = true;
    const dst = src.takeCards(numCards, fromFront);
    expect(dst).toBeInstanceOf(MockCard);
    const srcNames = src.getAllCardDetails().map((details) => details.name);
    const dstNames = dst?.getAllCardDetails().map((details) => details.name);
    expect(srcNames).toEqual(["src2", "src3"]);
    expect(dstNames).toEqual(["src1"]);
});

it("takeCard (offset)", () => {
    const src = new MockCard({
        cardDetails: [
            new MockCardDetails({ name: "src1" }),
            new MockCardDetails({ name: "src2" }),
            new MockCardDetails({ name: "src3" }),
            new MockCardDetails({ name: "src4" }),
        ],
    });
    const numCards = undefined;
    const fromFront = undefined;
    const offset = 1;
    const dst = src.takeCards(numCards, fromFront, offset);
    expect(dst).toBeInstanceOf(MockCard);
    const srcNames = src.getAllCardDetails().map((details) => details.name);
    const dstNames = dst?.getAllCardDetails().map((details) => details.name);
    expect(srcNames).toEqual(["src1", "src2", "src4"]);
    expect(dstNames).toEqual(["src3"]);
});

it("takeCard (fromFront, offset)", () => {
    const src = new MockCard({
        cardDetails: [
            new MockCardDetails({ name: "src1" }),
            new MockCardDetails({ name: "src2" }),
            new MockCardDetails({ name: "src3" }),
            new MockCardDetails({ name: "src4" }),
        ],
    });
    const numCards = undefined;
    const fromFront = true;
    const offset = 1;
    const dst = src.takeCards(numCards, fromFront, offset);
    expect(dst).toBeInstanceOf(MockCard);
    const srcNames = src.getAllCardDetails().map((details) => details.name);
    const dstNames = dst?.getAllCardDetails().map((details) => details.name);
    expect(srcNames).toEqual(["src1", "src3", "src4"]);
    expect(dstNames).toEqual(["src2"]);
});

it("takeCard (keep)", () => {
    const src = new MockCard({
        cardDetails: [
            new MockCardDetails({ name: "src1" }),
            new MockCardDetails({ name: "src2" }),
            new MockCardDetails({ name: "src3" }),
        ],
    });
    const numCards = undefined;
    const fromFront = undefined;
    const offset = undefined;
    const keep = true;
    const dst = src.takeCards(numCards, fromFront, offset, true);
    expect(dst).toBeInstanceOf(MockCard);
    const srcNames = src.getAllCardDetails().map((details) => details.name);
    const dstNames = dst?.getAllCardDetails().map((details) => details.name);
    expect(srcNames).toEqual(["src1", "src2", "src3"]);
    expect(dstNames).toEqual(["src3"]);
});

it("takeCardsAsPlayer", () => {
    const src = new MockCard({
        cardDetails: [
            new MockCardDetails({ name: "src1" }),
            new MockCardDetails({ name: "src2" }),
            new MockCardDetails({ name: "src3" }),
        ],
    });
    const player = new MockPlayer();

    let onRemovedCount = 0;
    src.onRemoved.add(() => {
        onRemovedCount++;
    });

    src._takeCardsAsPlayer(
        undefined,
        undefined,
        undefined,
        true, // keep
        player
    );
    expect(onRemovedCount).toEqual(1);

    src._takeCardsAsPlayer(
        1,
        true,
        1,
        true, // keep
        player
    );
    expect(onRemovedCount).toEqual(2);

    src._takeCardsAsPlayer(
        1,
        false,
        1,
        true, // keep
        player
    );
    expect(onRemovedCount).toEqual(3);
});

it("card events available in onObjectCreated", () => {
    let count = 0;
    MockGlobalScriptingEvents.__sharedInstance.onObjectCreated.add((obj) => {
        if (obj instanceof Card) {
            obj.onInserted.add(() => {}); // make sure onInserted exists on the object!
            count++;
        }
    });
    expect(count).toEqual(0);
    new MockCard();
    expect(count).toEqual(1);
});
