import { Text } from "@tabletop-playground/api";
import { MockTextWidgetBase } from "../mock-text-widget-base";

export class MockText extends MockTextWidgetBase implements Text {
  setText(text: string): Text {
    throw new Error("Method not implemented.");
  }
  setJustification(justification: number): Text {
    throw new Error("Method not implemented.");
  }
  setAutoWrap(autoWrap: boolean): Text {
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
