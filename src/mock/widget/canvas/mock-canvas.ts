import { Canvas, Widget } from "@tabletop-playground/api";
import { MockWidget } from "../mock-widget";

export class MockCanvas extends MockWidget implements Canvas {
  updateChild(
    child: Widget,
    x: number,
    y: number,
    width: number,
    height: number
  ): void {
    throw new Error("Method not implemented.");
  }
  removeChild(child: Widget): void {
    throw new Error("Method not implemented.");
  }
  getChildren(): Widget[] {
    throw new Error("Method not implemented.");
  }
  addChild(
    child: Widget,
    x: number,
    y: number,
    width: number,
    height: number
  ): Canvas {
    throw new Error("Method not implemented.");
  }
}
