import { Widget, WidgetSwitcher } from "@tabletop-playground/api";
import { MockWidget } from "../mock-widget";

export class MockWidgetSwitcher extends MockWidget implements WidgetSwitcher {
  setActiveWidget(widget: Widget): Widget {
    throw new Error("Method not implemented.");
  }
  setActiveIndex(index: number): Widget {
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
  insertChild(child: Widget, index: number): WidgetSwitcher {
    throw new Error("Method not implemented.");
  }
  getNumChildren(): number {
    throw new Error("Method not implemented.");
  }
  getChildAt(index: number): Widget | undefined {
    throw new Error("Method not implemented.");
  }
  getAllChildren(): Widget[] {
    throw new Error("Method not implemented.");
  }
  getActiveWidget(): Widget | undefined {
    throw new Error("Method not implemented.");
  }
  getActiveIndex(): number {
    throw new Error("Method not implemented.");
  }
  addChild(child: Widget): WidgetSwitcher {
    throw new Error("Method not implemented.");
  }
}
