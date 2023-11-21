import { Color, Label, Rotator, Vector } from "@tabletop-playground/api";

export class MockLabel implements Label {
  setText(text: string): void {
    throw new Error("Method not implemented.");
  }
  setScale(scale: number): void {
    throw new Error("Method not implemented.");
  }
  setRotation(
    rotation: Rotator | [pitch: number, yaw: number, roll: number]
  ): void {
    throw new Error("Method not implemented.");
  }
  setPosition(position: Vector | [x: number, y: number, z: number]): void {
    throw new Error("Method not implemented.");
  }
  setPlayerSlot(slot: number): void {
    throw new Error("Method not implemented.");
  }
  setId(iD: string): boolean {
    throw new Error("Method not implemented.");
  }
  setFont(fontFilename: string, packageId?: string | undefined): void {
    throw new Error("Method not implemented.");
  }
  setColor(color: Color | [r: number, g: number, b: number, a: number]): void {
    throw new Error("Method not implemented.");
  }
  isValid(): boolean {
    throw new Error("Method not implemented.");
  }
  getText(): string {
    throw new Error("Method not implemented.");
  }
  getScale(): number {
    throw new Error("Method not implemented.");
  }
  getRotation(): Rotator {
    throw new Error("Method not implemented.");
  }
  getPosition(): Vector {
    throw new Error("Method not implemented.");
  }
  getPlayerSlot(): number {
    throw new Error("Method not implemented.");
  }
  getId(): string {
    throw new Error("Method not implemented.");
  }
  getFontPackage(): string {
    throw new Error("Method not implemented.");
  }
  getFontFileName(): string {
    throw new Error("Method not implemented.");
  }
  getColor(): Color {
    throw new Error("Method not implemented.");
  }
  destroy(): void {
    throw new Error("Method not implemented.");
  }
}
