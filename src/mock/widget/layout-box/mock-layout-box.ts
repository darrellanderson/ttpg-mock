import { LayoutBox, Widget } from "@tabletop-playground/api";
import { MockWidget, MockWidgetParams } from "../mock-widget";
import { HorizontalAlignment, VerticalAlignment } from "../../../enums";

export type MockLayoutBoxParams = MockWidgetParams & {
  child?: Widget;
  horizontalAlignment?: number;
  maximumHeight?: number;
  maximumWidth?: number;
  minimumHeight?: number;
  minimumWidth?: number;
  overrideHeight?: number;
  overrideWidth?: number;
  paddingLeft?: number;
  paddingTop?: number;
  paddingRight?: number;
  paddingBottom?: number;
  verticalAlignment?: number;
};

export class MockLayoutBox extends MockWidget implements LayoutBox {
  private _child: Widget | undefined = undefined;
  private _horizontalAlignment: number = HorizontalAlignment.Fill;
  private _maximumHeight: number = -1;
  private _maximumWidth: number = -1;
  private _minimumHeight: number = 0;
  private _minimumWidth: number = 0;
  private _overrideHeight: number = -1;
  private _overrideWidth: number = -1;
  private _paddingLeft: number = 0;
  private _paddingTop: number = 0;
  private _paddingRight: number = 0;
  private _paddingBottom: number = 0;
  private _verticalAlignment: number = VerticalAlignment.Fill;

  constructor(params?: MockLayoutBoxParams) {
    super(params);
    if (params?.child !== undefined) {
      this._child = params.child;
    }
    if (params?.horizontalAlignment !== undefined) {
      this._horizontalAlignment = params.horizontalAlignment;
    }
    if (params?.maximumHeight !== undefined) {
      this._maximumHeight = params.maximumHeight;
    }
    if (params?.maximumWidth !== undefined) {
      this._maximumWidth = params.maximumWidth;
    }
    if (params?.minimumHeight !== undefined) {
      this._minimumHeight = params.minimumHeight;
    }
    if (params?.minimumWidth !== undefined) {
      this._minimumWidth = params.minimumWidth;
    }
    if (params?.overrideHeight !== undefined) {
      this._overrideHeight = params.overrideHeight;
    }
    if (params?.overrideWidth !== undefined) {
      this._overrideWidth = params.overrideWidth;
    }
    if (params?.paddingLeft !== undefined) {
      this._paddingLeft = params.paddingLeft;
    }
    if (params?.paddingTop !== undefined) {
      this._paddingTop = params.paddingTop;
    }
    if (params?.paddingRight !== undefined) {
      this._paddingRight = params.paddingRight;
    }
    if (params?.paddingBottom !== undefined) {
      this._paddingBottom = params.paddingBottom;
    }
    if (params?.verticalAlignment !== undefined) {
      this._verticalAlignment = params.verticalAlignment;
    }
  }

  getBottomPadding(): number {
    return this._paddingBottom;
  }

  getChild(): Widget | undefined {
    return this._child;
  }

  getHorizontalAlignment(): number {
    return this._horizontalAlignment;
  }

  getLeftPadding(): number {
    return this._paddingLeft;
  }

  getMaximumHeight(): number {
    return this._maximumHeight;
  }

  getMaximumWidth(): number {
    return this._maximumWidth;
  }

  getMinimumHeight(): number {
    return this._minimumHeight;
  }

  getMinimumWidth(): number {
    return this._minimumWidth;
  }

  getOverrideHeight(): number {
    return this._overrideHeight;
  }

  getOverrideWidth(): number {
    return this._overrideWidth;
  }

  getRightPadding(): number {
    return this._paddingRight;
  }

  getTopPadding(): number {
    return this._paddingTop;
  }

  getVerticalAlignment(): number {
    return this._verticalAlignment;
  }

  setChild(child?: Widget | undefined): LayoutBox {
    this._child = child;
    return this;
  }

  setHorizontalAlignment(alignment: number): LayoutBox {
    this._horizontalAlignment = alignment;
    return this;
  }

  setMaximumHeight(maximum: number): LayoutBox {
    this._maximumHeight = maximum;
    return this;
  }

  setMaximumWidth(maximum: number): LayoutBox {
    this._maximumWidth = maximum;
    return this;
  }

  setMinimumHeight(minimum: number): LayoutBox {
    this._minimumHeight = minimum;
    return this;
  }

  setMinimumWidth(minimum: number): LayoutBox {
    this._minimumWidth = minimum;
    return this;
  }

  setOverrideHeight(override: number): LayoutBox {
    this._overrideHeight = override;
    return this;
  }

  setOverrideWidth(override: number): LayoutBox {
    this._overrideWidth = override;
    return this;
  }

  setPadding(
    left?: number | undefined,
    right?: number | undefined,
    top?: number | undefined,
    bottom?: number | undefined
  ): LayoutBox {
    this._paddingLeft = left ? left : 0;
    this._paddingRight = right ? right : 0;
    this._paddingTop = top ? top : 0;
    this._paddingBottom = bottom ? bottom : 0;
    return this;
  }

  setVerticalAlignment(alignment: number): LayoutBox {
    this._verticalAlignment = alignment;
    return this;
  }
}
