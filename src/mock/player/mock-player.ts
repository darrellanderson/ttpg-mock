import {
  Card,
  CardHolder,
  Color,
  GameObject,
  Player,
  Rotator,
  Vector,
} from "@tabletop-playground/api";
import { MockColor } from "../color/mock-color";
import { MockGameWorld } from "../game-world/mock-game-world";
import { MockVector } from "../vector/mock-vector";
import { MockRotator } from "../rotator/mock-rotator";

export type MockPlayerParams = {
  cursorPosition?: Vector | [x: number, y: number, z: number];
  cursorVelocity?: Vector | [x: number, y: number, z: number];
  handCards?: Card[];
  handHolder?: CardHolder;
  heldObjects?: GameObject[];
  highlightedObject?: GameObject;
  isBlindfolded?: boolean;
  isGameMaster?: boolean;
  isHost?: boolean;
  isSpectator?: boolean;
  isUsingVR?: boolean;
  isValid?: boolean;
  name?: string;
  playerColor?: Color | [r: number, g: number, b: number, a: number];
  position?: Vector | [x: number, y: number, z: number];
  primaryColor?: Color | [r: number, g: number, b: number, a: number];
  rotation?: Rotator | [pitch: number, yaw: number, roll: number];
  secondaryColor?: Color | [r: number, g: number, b: number, a: number];
  selectedObjects?: GameObject[];
  slot?: number;
  team?: number;
  scriptKeysDown?: number[];
};

export class MockPlayer implements Player {
  private _cursorPosition: Vector = new MockVector(0, 0, 0);
  private _cursorVelocity: Vector = new MockVector(0, 0, 0);
  private _handCards: Card[] = [];
  private _handHolder: CardHolder | undefined = undefined;
  private _heldObjects: GameObject[] = [];
  private _highlightedObject: GameObject | undefined = undefined;
  private _isBlindfolded: boolean = false;
  private _isGameMaster: boolean = false;
  private _isHost: boolean = false;
  private _isSpectator: boolean = false;
  private _isUsingVR: boolean = false;
  private _isValid: boolean = true;
  private _name: string = "";
  private _playerColor: Color = new MockColor(1, 1, 1, 1);
  private _position: Vector = new MockVector(0, 0, 0);
  private _primaryColor: Color = new MockColor(1, 1, 1, 1);
  private _rotation: Rotator = new MockRotator(0, 0, 0);
  private _secondaryColor: Color = new MockColor(1, 1, 1, 1);
  private _selectedObjects: GameObject[] = [];
  private _slot: number = 0;
  private _team: number = 0;
  private _scriptKeysDown: number[] = [];

  constructor(params?: MockPlayerParams) {
    if (params?.cursorPosition) {
      this._cursorPosition = MockVector._from(params.cursorPosition);
    }
    if (params?.cursorVelocity) {
      this._cursorVelocity = MockVector._from(params.cursorVelocity);
    }
    if (params?.handCards) {
      this._handCards = params.handCards;
    }
    if (params?.handHolder) {
      this._handHolder = params.handHolder;
    }
    if (params?.heldObjects) {
      this._heldObjects = params.heldObjects;
    }
    if (params?.highlightedObject) {
      this._highlightedObject = params.highlightedObject;
    }
    if (params?.isBlindfolded !== undefined) {
      this._isBlindfolded = params.isBlindfolded;
    }
    if (params?.isGameMaster !== undefined) {
      this._isGameMaster = params.isGameMaster;
    }
    if (params?.isHost !== undefined) {
      this._isHost = params.isHost;
    }
    if (params?.isSpectator !== undefined) {
      this._isSpectator = params.isSpectator;
    }
    if (params?.isUsingVR !== undefined) {
      this._isUsingVR = params.isUsingVR;
    }
    if (params?.isValid !== undefined) {
      this._isValid = params.isValid;
    }
    if (params?.name) {
      this._name = params.name;
    }
    if (params?.playerColor) {
      this._playerColor = MockColor._from(params.playerColor);
    }
    if (params?.position) {
      this._position = MockVector._from(params.position);
    }
    if (params?.primaryColor) {
      this._primaryColor = MockColor._from(params.primaryColor);
    }
    if (params?.rotation) {
      this._rotation = MockRotator._from(params.rotation);
    }
    if (params?.secondaryColor) {
      this._secondaryColor = MockColor._from(params.secondaryColor);
    }
    if (params?.selectedObjects) {
      this._selectedObjects = params.selectedObjects;
    }
    if (params?.slot !== undefined) {
      this._slot = params.slot;
    }
    if (params?.team !== undefined) {
      this._team = params.team;
    }
    if (params?.scriptKeysDown) {
      this._scriptKeysDown = params.scriptKeysDown;
    }
  }

  getCursorPosition(): Vector {
    return this._cursorPosition.clone();
  }

  getCursorVelocity(): Vector {
    return this._cursorVelocity.clone();
  }

  getHandCards(): Card[] {
    return [...this._handCards];
  }

  getHandHolder(): CardHolder | undefined {
    return this._handHolder;
  }

  getHeldObjects(): GameObject[] {
    return [...this._heldObjects];
  }

  getHighlightedObject(): GameObject | undefined {
    return this._highlightedObject;
  }

  getName(): string {
    return this._name;
  }

  getOwnedObjects(): GameObject[] {
    const slot = this.getSlot();
    return MockGameWorld.__sharedInstance
      .getAllObjects()
      .filter((obj) => obj.getOwningPlayerSlot() === slot);
  }

  getPlayerColor(): Color {
    return this._playerColor.clone();
  }

  getPosition(): Vector {
    return this._position.clone();
  }

  getPrimaryColor(): Color {
    return this._primaryColor.clone();
  }

  getRotation(): Rotator {
    return this._rotation.clone();
  }

  getSecondaryColor(): Color {
    return this._secondaryColor.clone();
  }

  getSelectedObjects(): GameObject[] {
    return [...this._selectedObjects];
  }

  getSlot(): number {
    return this._slot;
  }

  getTeam(): number {
    return this._team;
  }

  isBlindfolded(): boolean {
    return this._isBlindfolded;
  }

  isGameMaster(): boolean {
    return this._isGameMaster;
  }

  isHolding(): boolean {
    return this._heldObjects.length > 0;
  }

  isHoldingObject(object: GameObject): boolean {
    return this._heldObjects.includes(object);
  }

  isHost(): boolean {
    return this._isHost;
  }

  isScriptKeyDown(index: number): boolean {
    return this._scriptKeysDown.includes(index);
  }

  isSpectator(): boolean {
    return this._isSpectator;
  }

  isUsingVR(): boolean {
    return this._isUsingVR;
  }

  isValid(): boolean {
    return this._isValid;
  }

  sendChatMessage(
    message: string,
    color: Color | [r: number, g: number, b: number, a: number]
  ): void {}

  setBlindfolded(on: boolean): void {
    this._isBlindfolded = on;
  }

  setDrawingColor(
    color: Color | [r: number, g: number, b: number, a: number]
  ): void {}

  setDrawingGlow(glow: boolean): void {}

  setDrawingThickness(thickness: number): void {}

  setHandHolder(hand: CardHolder): void {
    this._handHolder = hand;
  }

  setPositionAndRotation(
    position: Vector | [x: number, y: number, z: number],
    rotation: Rotator | [pitch: number, yaw: number, roll: number]
  ): void {
    this._position = MockVector._from(position);
    this._rotation = MockRotator._from(rotation);
  }

  setPrimaryColor(
    newColor: Color | [r: number, g: number, b: number, a: number]
  ): void {
    this._primaryColor = MockColor._from(newColor);
  }

  setSecondaryColor(
    newColor: Color | [r: number, g: number, b: number, a: number]
  ): void {
    this._secondaryColor = MockColor._from(newColor);
  }

  setSelectedObjects(objects: GameObject[]): void {
    this._selectedObjects = objects;
  }

  showMessage(message: string): void {}

  switchSlot(newSlot: number): boolean {
    this._slot = newSlot;
    return true;
  }
}
