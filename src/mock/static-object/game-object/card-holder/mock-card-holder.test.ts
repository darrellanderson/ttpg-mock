import { HiddenCardsType } from "@tabletop-playground/api";
import { MockCard } from "../card/mock-card";
import { MockCardHolder, MockCardHolderParams } from "./mock-card-holder";

it("constructor", () => {
  const params: MockCardHolderParams = {
    cards: [new MockCard()],
    onlyOwnerTakesCards: true,
    hiddenCardsType: HiddenCardsType.Back,
  };
  const holder = new MockCardHolder(params);
  expect(holder.getCards()).toEqual(params.cards);
  expect(holder.getNumCards()).toEqual(1);
  expect(holder.getOnlyOwnerTakesCards()).toEqual(params.onlyOwnerTakesCards);
  expect(holder.getHiddenCardsType()).toEqual(params.hiddenCardsType);
});

it("hiddenType", () => {
  const input = HiddenCardsType.Back;
  const holder = new MockCardHolder();
  holder.setHiddenCardsType(input);
  const output = holder.getHiddenCardsType();
  expect(output).toEqual(input);
});

it("onlyOwnerTakesCards", () => {
  const input = true;
  const holder = new MockCardHolder();
  holder.setOnlyOwnerTakesCards(input);
  const output = holder.getOnlyOwnerTakesCards();
  expect(output).toEqual(input);
});

it("holds", () => {
  const card1 = new MockCard();
  const card2 = new MockCard();
  const holder = new MockCardHolder({ cards: [card1] });
  expect(holder.holds(card1)).toEqual(true);
  expect(holder.holds(card2)).toEqual(false);
});

it("insert", () => {
  const card1 = new MockCard();
  const card2 = new MockCard();
  const holder = new MockCardHolder({ cards: [card1] });
  expect(holder.getCards()).toEqual([card1]);
  holder.insert(card2, 0);
  expect(holder.getCards()).toEqual([card2, card1]);
});

it("moveCard", () => {
  const card1 = new MockCard();
  const card2 = new MockCard();
  const holder = new MockCardHolder({ cards: [card1, card2] });
  expect(holder.getCards()).toEqual([card1, card2]);
  holder.moveCard(card2, 0);
  expect(holder.getCards()).toEqual([card2, card1]);
});

it("removeAt", () => {
  const card1 = new MockCard();
  const card2 = new MockCard();
  const holder = new MockCardHolder({ cards: [card1, card2] });
  expect(holder.getCards()).toEqual([card1, card2]);
  holder.removeAt(0);
  expect(holder.getCards()).toEqual([card2]);
});

it("card assign", () => {
  const card = new MockCard();
  const holder = new MockCardHolder({ cards: [card] });
  expect(holder.getCards()).toEqual([card]);
  expect(card.getHolder()).toEqual(holder);
});
