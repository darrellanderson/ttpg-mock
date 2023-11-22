import { Color, Label, Rotator, Vector } from "@tabletop-playground/api";
import { MockColor } from "../color/mock-color";
import { MockRotator } from "../rotator/mock-rotator";
import { MockVector } from "../vector/mock-vector";

export class MockLabel implements Label {
  private static __labelIndex = 0;

  private _color: Color = new MockColor(0, 0, 0, 1);
  private _fontFileName: string = "";
  private _fontPackageId: string = "";
  private _id: string = `__label_${MockLabel.__labelIndex++}__`;
  private _playerSlot: number = -1;
  private _position: Vector = new MockVector(0, 0, 0);
  private _rotation: Rotator = new MockRotator(0, 0, 0);
  private _scale: number = 1;
  private _text: string = "";
  private _valid: boolean = true;

  destroy(): void {
    this._valid = false;
  }

  getColor(): Color {
    return this._color;
  }

  getFontFileName(): string {
    return this._fontFileName;
  }

  getFontPackage(): string {
    return this._fontPackageId;
  }

  getId(): string {
    return this._id;
  }

  getPlayerSlot(): number {
    return this._playerSlot;
  }

  getPosition(): Vector {
    return this._position;
  }

  getRotation(): Rotator {
    return this._rotation;
  }

  getScale(): number {
    return this._scale;
  }

  getText(): string {
    return this._text;
  }

  isValid(): boolean {
    return this._valid;
  }

  setColor(color: Color | [r: number, g: number, b: number, a: number]): void {
    this._color = MockColor._from(color);
  }

  setFont(fontFilename: string, packageId?: string | undefined): void {
    this._fontFileName = fontFilename;
    this._fontPackageId = packageId ? packageId : "";
  }

  setId(iD: string): boolean {
    this._id = iD;
    return true;
  }

  setPlayerSlot(slot: number): void {
    this._playerSlot = slot;
  }

  setPosition(position: Vector | [x: number, y: number, z: number]): void {
    this._position = MockVector._from(position);
  }

  setRotation(
    rotation: Rotator | [pitch: number, yaw: number, roll: number]
  ): void {
    this._rotation = MockRotator._from(rotation);
  }

  setScale(scale: number): void {
    this._scale = scale;
  }

  setText(text: string): void {
    this._text = text;
  }
}