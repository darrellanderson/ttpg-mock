import { Color, GlobalGrid } from "@tabletop-playground/api";
import { MockColor } from "../color/mock-color";
import { GridSnapType, GridType, GridVisibility } from "../../enums";

export type MockGlobalGridParams = {
  color?: Color | [r: number, g: number, b: number, a: number];
  height?: number;
  horizontalOffset?: number;
  rotation?: number;
  snapType?: number;
  type?: number;
  verticalOffset?: number;
  visibility?: number;
  width?: number;
  hasThickLines?: boolean;
};

export class MockGlobalGrid implements GlobalGrid {
  private _color: Color = new MockColor(1, 1, 1, 1);
  private _height: number = 0;
  private _horizontalOffset: number = 0;
  private _rotation: number = 0;
  private _snapType: number = GridSnapType.None;
  private _type: number = GridType.Rectangular;
  private _verticalOffset: number = 0;
  private _visibility: number = GridVisibility.None;
  private _width: number = 0;
  private _hasThickLines: boolean = false;

  constructor(params?: MockGlobalGridParams) {
    if (params?.color) {
      this._color = MockColor._from(params.color);
    }
    if (params?.height) {
      this._height = params.height;
    }
    if (params?.horizontalOffset) {
      this._horizontalOffset = params.horizontalOffset;
    }
    if (params?.rotation) {
      this._rotation = params.rotation;
    }
    if (params?.snapType) {
      this._snapType = params.snapType;
    }
    if (params?.type) {
      this._type = params.type;
    }
    if (params?.verticalOffset) {
      this._verticalOffset = params.verticalOffset;
    }
    if (params?.visibility) {
      this._visibility = params.visibility;
    }
    if (params?.width) {
      this._width = params.width;
    }
    if (params?.hasThickLines) {
      this._hasThickLines = params.hasThickLines;
    }
  }

  getColor(): Color {
    return this._color;
  }

  getHeight(): number {
    return this._height;
  }

  getHorizontalOffset(): number {
    return this._horizontalOffset;
  }

  getRotation(): number {
    return this._rotation;
  }

  getSnapType(): number {
    return this._snapType;
  }

  getType(): number {
    return this._type;
  }

  getVerticalOffset(): number {
    return this._verticalOffset;
  }

  getVisibility(): number {
    return this._visibility;
  }

  getWidth(): number {
    return this._width;
  }

  hasThickLines(): boolean {
    return this._hasThickLines;
  }

  setColor(color: Color | [r: number, g: number, b: number, a: number]): void {
    this._color = MockColor._from(color);
  }

  setHeight(height: number): void {
    this._height = height;
  }

  setHorizontalOffset(offset: number): void {
    this._horizontalOffset = offset;
  }

  setRotation(rotation: number): void {
    this._rotation = rotation;
  }

  setSnapType(type: number): void {
    this._snapType = type;
  }

  setThickLines(thick: boolean): void {
    this._hasThickLines = thick;
  }

  setType(type: number): void {
    this._type = type;
  }

  setVerticalOffset(offset: number): void {
    this._verticalOffset = offset;
  }

  setVisibility(visibility: number): void {
    this._visibility = visibility;
  }

  setWidth(width: number): void {
    this._width = width;
  }
}
