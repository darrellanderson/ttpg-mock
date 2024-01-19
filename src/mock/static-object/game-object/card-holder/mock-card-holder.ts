import {
  Card,
  CardHolder,
  MulticastDelegate,
  Player,
} from "@tabletop-playground/api";
import { MockGameObject, MockGameObjectParams } from "../mock-game-object";
import { MockMulticastDelegate } from "../../../multicast-delegate/mock-multicast-delegate";
import { HiddenCardsType } from "../../../../enums";
import { MockCard } from "../card/mock-card";

export type MockCardHolderParams = MockGameObjectParams & {
  cards?: Card[];
  onlyOwnerTakesCards?: boolean;
  hiddenCardsType?: number;
};

export class MockCardHolder extends MockGameObject implements CardHolder {
  private _cards: Card[] = [];
  private _onlyOwnerTakesCards: boolean = false;
  private _hiddenCardsType: number = HiddenCardsType.GreyBlur;

  onInserted: MulticastDelegate<
    (holder: this, insertedCard: Card, player: Player, index: number) => void
  > = new MockMulticastDelegate<
    (holder: this, insertedCard: Card, player: Player, index: number) => void
  >();
  onRemoved: MulticastDelegate<
    (holder: this, card: Card, player: Player) => void
  > = new MockMulticastDelegate<
    (holder: this, card: Card, player: Player) => void
  >();
  onCardFlipped: MulticastDelegate<
    (holder: this, card: Card, player: Player) => void
  > = new MockMulticastDelegate<
    (holder: this, card: Card, player: Player) => void
  >();
  onCardRotated: MulticastDelegate<
    (holder: this, card: Card, player: Player) => void
  > = new MockMulticastDelegate<
    (holder: this, card: Card, player: Player) => void
  >();
  onBecameHand: MulticastDelegate<(holder: this, player: Player) => void> =
    new MockMulticastDelegate<(holder: this, player: Player) => void>();

  constructor(params?: MockCardHolderParams) {
    super(params);
    if (params?.cards) {
      this._cards = params.cards;
      for (const card of this._cards) {
        (card as MockCard)._setCardHolder(this);
      }
    }
    if (params?.onlyOwnerTakesCards !== undefined) {
      this._onlyOwnerTakesCards = params.onlyOwnerTakesCards;
    }
    if (params?.hiddenCardsType !== undefined) {
      this._hiddenCardsType = params.hiddenCardsType;
    }
  }

  getCards(): Card[] {
    return [...this._cards];
  }

  getHiddenCardsType(): number {
    return this._hiddenCardsType;
  }

  getNumCards(): number {
    return this._cards.length;
  }

  getOnlyOwnerTakesCards(): boolean {
    return this._onlyOwnerTakesCards;
  }

  holds(card: Card): boolean {
    return this._cards.includes(card);
  }

  insert(card: Card, index: number): boolean {
    this._cards = [
      ...this._cards.slice(0, index),
      card,
      ...this._cards.slice(index),
    ];
    return true; // editor setting for max limit
  }

  moveCard(card: Card, index: number): void {
    const oldIndex = this._cards.indexOf(card);
    if (oldIndex >= 0) {
      this.removeAt(oldIndex);
      this.insert(card, index);
    }
  }

  removeAt(index: number): Card | undefined {
    const card: Card | undefined = this._cards.splice(index, 1)[0];
    if (card) {
      (card as MockCard)._setCardHolder(undefined);
    }
    return card;
  }

  setHiddenCardsType(newType: number): void {
    this._hiddenCardsType = newType;
  }

  setOnlyOwnerTakesCards(onlyOwner: boolean): void {
    this._onlyOwnerTakesCards = onlyOwner;
  }

  // ----------------------------------

  flipCard(card: Card): void {
    throw new Error("Method not implemented.");
  }

  isCardFaceUp(card: Card): boolean {
    throw new Error("Method not implemented.");
  }
  isCardUpsideDown(card: Card): boolean {
    throw new Error("Method not implemented.");
  }
  rotateCard(card: Card): void {
    throw new Error("Method not implemented.");
  }
}
