import { Border, Color, Widget } from "@tabletop-playground/api";
import { MockWidget } from "../mock-widget";

export class MockBorder extends MockWidget implements Border {
  setColor(
    color: Color | [r: number, g: number, b: number, a: number]
  ): Border {
    throw new Error("Method not implemented.");
  }
  setChild(child?: Widget | undefined): Border {
    throw new Error("Method not implemented.");
  }
  getColor(): Color {
    throw new Error("Method not implemented.");
  }
  getChild(): Widget | undefined {
    throw new Error("Method not implemented.");
  }
}
