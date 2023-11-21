import { Color, TextWidgetBase } from "@tabletop-playground/api";
import { MockWidget } from "../mock-widget";

export class MockTextWidgetBase extends MockWidget implements TextWidgetBase {
  setTextColor(
    color: Color | [r: number, g: number, b: number, a: number]
  ): this {
    throw new Error("Method not implemented.");
  }
  setItalic(italic: boolean): this {
    throw new Error("Method not implemented.");
  }
  setFontSize(size: number): this {
    throw new Error("Method not implemented.");
  }
  setFont(fontFilename: string, packageId?: string | undefined): this {
    throw new Error("Method not implemented.");
  }
  setBold(bold: boolean): this {
    throw new Error("Method not implemented.");
  }
  isItalic(): boolean {
    throw new Error("Method not implemented.");
  }
  isBold(): boolean {
    throw new Error("Method not implemented.");
  }
  getTextColor(): Color {
    throw new Error("Method not implemented.");
  }
  getFontSize(): number {
    throw new Error("Method not implemented.");
  }
  getFontPackageId(): string {
    throw new Error("Method not implemented.");
  }
  getFontFileName(): string {
    throw new Error("Method not implemented.");
  }
}
