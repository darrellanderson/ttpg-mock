import { LayoutBox, Widget } from "@tabletop-playground/api";
import { MockWidget } from "../mock-widget";

export class MockLayoutBox extends MockWidget implements LayoutBox {
  setVerticalAlignment(alignment: number): LayoutBox {
    throw new Error("Method not implemented.");
  }
  setPadding(
    left?: number | undefined,
    right?: number | undefined,
    top?: number | undefined,
    bottom?: number | undefined
  ): LayoutBox {
    throw new Error("Method not implemented.");
  }
  setOverrideWidth(override: number): LayoutBox {
    throw new Error("Method not implemented.");
  }
  setOverrideHeight(override: number): LayoutBox {
    throw new Error("Method not implemented.");
  }
  setMinimumWidth(minimum: number): LayoutBox {
    throw new Error("Method not implemented.");
  }
  setMinimumHeight(minimum: number): LayoutBox {
    throw new Error("Method not implemented.");
  }
  setMaximumWidth(maximum: number): LayoutBox {
    throw new Error("Method not implemented.");
  }
  setMaximumHeight(maximum: number): LayoutBox {
    throw new Error("Method not implemented.");
  }
  setHorizontalAlignment(alignment: number): LayoutBox {
    throw new Error("Method not implemented.");
  }
  setChild(child?: Widget | undefined): LayoutBox {
    throw new Error("Method not implemented.");
  }
  getVerticalAlignment(): number {
    throw new Error("Method not implemented.");
  }
  getTopPadding(): number {
    throw new Error("Method not implemented.");
  }
  getRightPadding(): number {
    throw new Error("Method not implemented.");
  }
  getOverrideWidth(): number {
    throw new Error("Method not implemented.");
  }
  getOverrideHeight(): number {
    throw new Error("Method not implemented.");
  }
  getMinimumWidth(): number {
    throw new Error("Method not implemented.");
  }
  getMinimumHeight(): number {
    throw new Error("Method not implemented.");
  }
  getMaximumWidth(): number {
    throw new Error("Method not implemented.");
  }
  getMaximumHeight(): number {
    throw new Error("Method not implemented.");
  }
  getLeftPadding(): number {
    throw new Error("Method not implemented.");
  }
  getHorizontalAlignment(): number {
    throw new Error("Method not implemented.");
  }
  getChild(): Widget | undefined {
    throw new Error("Method not implemented.");
  }
  getBottomPadding(): number {
    throw new Error("Method not implemented.");
  }
}
