import {
  Card,
  CardDetails,
  CardHolder,
  MulticastDelegate,
  Player,
} from "@tabletop-playground/api";
import { MockGameObject, MockGameObjectParams } from "../mock-game-object";
import { MockMulticastDelegate } from "../../../multicast-delegate/mock-multicast-delegate";
import { MockCardDetails } from "../../../card-details/mock-card-details";

export type MockCardParams = MockGameObjectParams & {
  cardDetails?: CardDetails[];
  cardHolder?: CardHolder;
  isFaceUp?: boolean;
};

export class MockCard extends MockGameObject implements Card {
  private _cardDetails: CardDetails[] = [];
  private _cardHolder: CardHolder | undefined = undefined;
  private _isFaceUp: boolean = false;

  public readonly onInserted: MulticastDelegate<
    (
      card: this,
      insertedCard: Card,
      position: number,
      player: Player | undefined
    ) => void
  > = new MockMulticastDelegate<
    (
      card: this,
      insertedCard: Card,
      position: number,
      player: Player | undefined
    ) => void
  >();
  public readonly onRemoved: MulticastDelegate<
    (card: this, removedCard: Card, position: number, player: Player) => void
  > = new MockMulticastDelegate<
    (card: this, removedCard: Card, position: number, player: Player) => void
  >();

  constructor(params?: MockCardParams) {
    super(params, false);
    if (params?.cardDetails) {
      this._cardDetails.push(...params.cardDetails);
    } else {
      this._cardDetails.push(new MockCardDetails()); // singleton
    }
    if (params?.cardHolder) {
      this._cardHolder = params.cardHolder;
    }
    if (params?.isFaceUp !== undefined) {
      this._isFaceUp = params.isFaceUp;
    }
    this._triggerOnCreated();
  }

  _setCardHolder(cardHolder: CardHolder | undefined) {
    this._cardHolder = cardHolder;
  }

  addCards(
    cards: Card,
    toFront?: boolean | undefined,
    offset?: number | undefined,
    animate?: boolean | undefined,
    flipped?: boolean | undefined
  ): boolean {
    // Do not specify player to add without onInserted event.
    const player = undefined
    return this.addCardsAsPlayer(cards, toFront, offset, animate, flipped, player)
  }

  /**
   * Mock-only version that also sends the Card.onInserted event.
   * Must specify player to send the event!
   * 
   * @param cards 
   * @param toFront 
   * @param offset 
   * @param animate 
   * @param flipped 
   * @param player 
   */
  addCardsAsPlayer(cards: Card,
    toFront?: boolean | undefined,
    offset?: number | undefined,
    animate?: boolean | undefined,
    flipped?: boolean | undefined,
    player?: Player
  ): boolean {
    if (!this.canAddCards(cards)) {
      return false;
    }

    const incoming = cards.getAllCardDetails().map(
      (details) =>
        new MockCardDetails({
          index: details.index,
          stackIndex: details.stackIndex,
          templateId: details.templateId,
          name: details.name,
          metadata: details.metadata,
          textureOverrideURL: details.textureOverrideURL,
          flipped, // apply flipped!
          tags: details.tags,
        })
    );

    let index = this._cardDetails.length;
    if (toFront) {
      index = 0;
    }
    if (offset) {
      if (toFront) {
        index += offset;
      } else {
        index -= offset;
      }
    }
    this._cardDetails = [
      ...this._cardDetails.slice(0, index),
      ...incoming,
      ...this._cardDetails.slice(index),
    ];

    if (player) {
      const onInserted = this.onInserted as MockMulticastDelegate<(card: this, insertedCard: Card, position: number, player: Player | undefined) => void>
      onInserted._trigger(this, cards, index, player)
    }
    cards.destroy()

    return true;
  }

  canAddCards(cards: Card): boolean {
    const mySize = this.getSize();
    const inSize = cards.getSize();
    const dx = Math.abs(mySize.x - inSize.x);
    const dy = Math.abs(mySize.y - inSize.y);
    return dx + dy < 0.1;
  }

  deal(
    count?: number | undefined,
    slots?: number[] | undefined,
    faceDown?: boolean | undefined,
    dealToAllHolders?: boolean | undefined
  ): void {
    const numPlayers: number = slots ? slots.length : 1; // TODO: should be "everyone" if undefined
    if (count === undefined) {
      count = 1;
    }
    count = count * numPlayers;
    count = Math.min(count, this.getStackSize());
    this.takeCards(count); // TODO: taken cards should move to players' hands
  }

  divide(numCards: number): Card[] {
    const numStacks = Math.ceil(this.getStackSize() / numCards);
    const result: Card[] = [];
    for (let i = 0; i < numStacks; i++) {
      let newCard = this.takeCards(numCards);
      if (!newCard) {
        newCard = this; // one card remaining
      }
      result.push(newCard);
    }
    return result;
  }

  flipOrUpright(): void {
    this._isFaceUp = !this._isFaceUp;
  }

  getAllCardDetails(): CardDetails[] {
    return this._cardDetails;
  }

  getCardDetails(index: number): CardDetails | undefined;
  getCardDetails(): CardDetails;
  getCardDetails(index?: unknown): CardDetails | undefined {
    if (typeof index === "number") {
      return this._cardDetails[index];
    }
    return this._cardDetails[0];
  }

  getHolder(): CardHolder | undefined {
    return this._cardHolder;
  }

  getStackSize(): number {
    return this._cardDetails.length;
  }

  isFaceUp(): boolean {
    return this._isFaceUp;
  }

  isInHand(): boolean {
    const playerPrimaryHolder = this._cardHolder
      ?.getOwningPlayer()
      ?.getHandHolder();
    return playerPrimaryHolder && playerPrimaryHolder === this._cardHolder
      ? true
      : false;
  }

  isInHolder(): boolean {
    return this._cardHolder ? true : false;
  }

  moveCardInStack(from: number, to: number): void {
    const tmp = this._cardDetails[to];
    this._cardDetails[to] = this._cardDetails[from];
    this._cardDetails[from] = tmp;
  }

  removeFromHolder(): void {
    this._cardHolder = undefined;
  }

  setCardIndexAt(cardIndex: number, index?: number | undefined): void {
    index = index ? index : 0;
    const details = this._cardDetails[index];
    if (!details) {
      return; // nothing to overwrite
    }
    this._cardDetails[index] = new MockCardDetails({
      index: cardIndex,
      stackIndex: details.stackIndex,
      templateId: details.templateId,
      name: details.name,
      metadata: details.metadata,
      textureOverrideURL: details.textureOverrideURL,
      flipped: details.flipped,
      tags: details.tags,
    });
  }

  setInheritScript(inherit: boolean): void { }

  setTextureOverrideURL(url: string): void {
    this._cardDetails = this._cardDetails.map(
      (details) =>
        new MockCardDetails({
          index: details.index,
          stackIndex: details.stackIndex,
          templateId: details.templateId,
          name: details.name,
          metadata: details.metadata,
          textureOverrideURL: url,
          flipped: details.flipped,
          tags: details.tags,
        })
    );
  }

  setTextureOverrideURLAt(url: string, index?: number | undefined): void {
    index = index ? index : 0;
    const details = this._cardDetails[index];
    if (!details) {
      return; // nothing to overwrite
    }
    this._cardDetails[index] = new MockCardDetails({
      index: details.index,
      stackIndex: details.stackIndex,
      templateId: details.templateId,
      name: details.name,
      metadata: details.metadata,
      textureOverrideURL: url,
      flipped: details.flipped,
      tags: details.tags,
    });
  }

  shuffle(): void {
    const a: CardDetails[] = this._cardDetails;
    // Fisher-Yates
    for (let i = a.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
  }

  split(numStacks: number): Card[] {
    const stackSize = Math.ceil(this.getStackSize() / numStacks);
    const result: Card[] = [];
    for (let i = 0; i < numStacks; i++) {
      let newCard = this.takeCards(stackSize);
      if (!newCard) {
        newCard = this; // one card remaining
      }
      result.push(newCard);
    }
    return result;
  }

  takeCards(
    numCards?: number | undefined,
    fromFront?: boolean | undefined,
    offset?: number | undefined,
    keep?: boolean | undefined
  ): Card | undefined {
    return this.takeCardsAsPlayer(numCards, fromFront, offset, keep)
  }

  takeCardsAsPlayer(numCards?: number | undefined,
    fromFront?: boolean | undefined,
    offset?: number | undefined,
    keep?: boolean | undefined, player?: Player): Card | undefined {
    if (this._cardDetails.length <= 1) {
      return undefined; // "Returns undefined if this object is only a single card"
    }

    numCards = numCards !== undefined ? numCards : 1;
    offset = offset !== undefined ? offset : 0;

    // At least one card will always remain.
    numCards = Math.min(numCards, this._cardDetails.length - 1);

    let index = fromFront ? 0 : this._cardDetails.length - numCards;
    if (offset) {
      if (fromFront) {
        index += offset;
      } else {
        index -= offset;
      }
    }
    let cardDetails: CardDetails[];

    if (keep) {
      cardDetails = this._cardDetails.slice(index, index + numCards);
    } else {
      cardDetails = this._cardDetails.splice(index, numCards);
    }
    const removedCard = new MockCard({ cardDetails });

    if (player) {
      const onRemoved = this.onRemoved as MockMulticastDelegate<(card: this, removedCard: Card, position: number, player: Player) => void>
      onRemoved._trigger(this, removedCard, index, player)
    }

    return removedCard
  }
}
