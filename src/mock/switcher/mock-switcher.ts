import {
  GameObject,
  MulticastDelegate,
  Switcher,
} from "@tabletop-playground/api";
import { MockMulticastDelegate } from "../multicast-delegate/mock-multicast-delegate";

export type MockSwitcherParams = {
  gameObjects: GameObject[];
  index: number;
  isValid: boolean;
};

export class MockSwitcher implements Switcher {
  private _gameObjects: GameObject[] = [];
  private _index: number = 0;
  private _isValid: boolean = true;

  onObjectSwitched: MulticastDelegate<
    (switcher: this, newIndex: number, oldIndex: number) => void
  > = new MockMulticastDelegate<
    (switcher: this, newIndex: number, oldIndex: number) => void
  >();

  constructor(params?: MockSwitcherParams) {
    if (params?.gameObjects) {
      this._gameObjects = params.gameObjects;
    }
    if (params?.index !== undefined) {
      this._index = params.index;
    }
    if (params?.isValid !== undefined) {
      this._isValid = params.isValid;
    }
  }

  addObjects(
    objects: GameObject[],
    index?: number | undefined,
    showAnimation?: boolean | undefined
  ): void {
    index = index !== undefined ? index : 0;
    this._gameObjects = [
      ...this._gameObjects.slice(0, index),
      ...objects,
      ...this._gameObjects.slice(index),
    ];
  }

  contains(checkObject: GameObject): boolean {
    return this._gameObjects.includes(checkObject);
  }

  destroy(): void {
    this._isValid = false;
  }

  getCurrentObject(): GameObject {
    return this._gameObjects[this._index];
  }

  getCurrentObjectIndex(): number {
    return this._index;
  }

  getNumObjects(): number {
    return this._gameObjects.length;
  }

  getObjectAt(index: number): GameObject {
    return this._gameObjects[index];
  }

  isValid(): boolean {
    return this._isValid;
  }

  remove(objectToRemove: GameObject): boolean {
    const index = this._gameObjects.indexOf(objectToRemove);
    return this.removeAt(index);
  }

  removeAt(index: number): boolean {
    if (index >= 0 && index < this._gameObjects.length) {
      this._gameObjects.splice(index, 1);
      return true;
    }
    return false;
  }

  setObjectIndex(index: number): void {
    this._index = index;
  }
}
