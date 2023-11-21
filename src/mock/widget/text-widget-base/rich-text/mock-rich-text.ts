import { RichText } from "@tabletop-playground/api";
import { MockTextWidgetBase } from "../mock-text-widget-base";

export class MockRichText extends MockTextWidgetBase implements RichText {
  setText(text: string): RichText {
    throw new Error("Method not implemented.");
  }
  setJustification(justification: number): RichText {
    throw new Error("Method not implemented.");
  }
  setAutoWrap(autoWrap: boolean): RichText {
    throw new Error("Method not implemented.");
  }
  getText(): string {
    throw new Error("Method not implemented.");
  }
  getJustification(): number {
    throw new Error("Method not implemented.");
  }
  getAutoWrap(): boolean {
    throw new Error("Method not implemented.");
  }
}
