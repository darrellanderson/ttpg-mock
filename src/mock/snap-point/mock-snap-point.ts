import {
  GameObject,
  SnapPoint,
  StaticObject,
  Vector,
} from "@tabletop-playground/api";
import { MockVector } from "../vector/mock-vector";
import { SnapPointFlipValidity, SnapPointShape } from "../../enums";

export type MockSnapPointParams = {
  flipValidity?: number;
  globalPosition?: Vector | [x: number, y: number, z: number];
  index?: number;
  localPosition?: Vector | [x: number, y: number, z: number];
  parentObject?: StaticObject;
  range?: number;
  shape?: number;
  snapRotation?: number;
  snapRotationType?: number;
  snappedObject?: GameObject;
  tags?: string[];
  isValid?: boolean;
  snapsRotation?: boolean;
};

export class MockSnapPoint implements SnapPoint {
  private _flipValidity: number = SnapPointFlipValidity.Always;
  private _globalPosition: Vector = new MockVector(0, 0, 0);
  private _index: number = 0;
  private _localPosition: Vector = new MockVector(0, 0, 0);
  private _parentObject: StaticObject | undefined = undefined;
  private _range: number = 0;
  private _shape: number = SnapPointShape.Sphere;
  private _snapRotation: number = 0;
  private _snapRotationType: number = 0; //SnapPointRotationType
  private _snappedObject: GameObject | undefined = undefined;
  private _tags: string[] = [];
  private _isValid: boolean = true;
  private _snapsRotation: boolean = true;

  constructor(params?: MockSnapPointParams) {
    if (params?.flipValidity !== undefined) {
      this._flipValidity = params.flipValidity;
    }
    if (params?.globalPosition) {
      this._globalPosition = MockVector._from(params.globalPosition);
    }
    if (params?.index !== undefined) {
      this._index = params.index;
    }
    if (params?.localPosition) {
      this._localPosition = MockVector._from(params.localPosition);
    }
    if (params?.parentObject) {
      this._parentObject = params.parentObject;
    }
    if (params?.range !== undefined) {
      this._range = params.range;
    }
    if (params?.shape !== undefined) {
      this._shape = params.shape;
    }
    if (params?.snapRotation !== undefined) {
      this._snapRotation = params.snapRotation;
    }
    if (params?.snapRotationType !== undefined) {
      this._snapRotationType = params.snapRotationType;
    }
    if (params?.snappedObject) {
      this._snappedObject = params.snappedObject;
    }
    if (params?.tags) {
      this._tags = params.tags;
    }
    if (params?.isValid !== undefined) {
      this._isValid = params.isValid;
    }
    if (params?.snapsRotation !== undefined) {
      this._snapsRotation = params.snapsRotation;
    }
  }

  getFlipValidity(): number {
    return this._flipValidity;
  }
  getGlobalPosition(): Vector {
    return this._globalPosition;
  }
  getIndex(): number {
    return this._index;
  }
  getLocalPosition(): Vector {
    return this._localPosition;
  }
  getParentObject(): StaticObject | undefined {
    return this._parentObject;
  }
  getRange(): number {
    return this._range;
  }
  getShape(): number {
    return this._shape;
  }
  getSnapRotation(): number {
    return this._snapRotation;
  }
  getSnapRotationType(): number {
    return this._snapRotationType;
  }
  getSnappedObject(
    sphereRadius?: number | undefined,
    restrictTags?: boolean | undefined
  ): GameObject | undefined {
    return this._snappedObject;
  }
  getTags(): string[] {
    return this._tags;
  }
  isValid(): boolean {
    return this._isValid;
  }
  snapsRotation(): boolean {
    return this._snapsRotation;
  }
}
