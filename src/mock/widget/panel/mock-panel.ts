import { Panel, Widget } from "@tabletop-playground/api";
import { MockWidget } from "../mock-widget";

export class MockPanel extends MockWidget implements Panel {
  setVerticalAlignment(alignment: number): Panel {
    throw new Error("Method not implemented.");
  }
  setHorizontalAlignment(alignment: number): Panel {
    throw new Error("Method not implemented.");
  }
  setEqualChildSize(equal: boolean): Panel {
    throw new Error("Method not implemented.");
  }
  setChildDistance(distance: number): Panel {
    throw new Error("Method not implemented.");
  }
  removeChildAt(index: number): void {
    throw new Error("Method not implemented.");
  }
  removeChild(child: Widget): void {
    throw new Error("Method not implemented.");
  }
  removeAllChildren(): void {
    throw new Error("Method not implemented.");
  }
  insertChild(
    child: Widget,
    index: number,
    weight?: number | undefined
  ): Panel {
    throw new Error("Method not implemented.");
  }
  getVerticalAlignment(): number {
    throw new Error("Method not implemented.");
  }
  getNumChildren(): number {
    throw new Error("Method not implemented.");
  }
  getHorizontalAlignment(): number {
    throw new Error("Method not implemented.");
  }
  getChildAt(index: number): Widget | undefined {
    throw new Error("Method not implemented.");
  }
  getAllChildren(): Widget[] {
    throw new Error("Method not implemented.");
  }
  addChild(child: Widget, weight?: number | undefined): Panel {
    throw new Error("Method not implemented.");
  }
}
