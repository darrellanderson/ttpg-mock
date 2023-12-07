import {
  Container,
  GameObject,
  MulticastDelegate,
  Player,
  Vector,
} from "@tabletop-playground/api";
import { MockMulticastDelegate } from "../../../multicast-delegate/mock-multicast-delegate";
import { MockGameObject, MockGameObjectParams } from "../mock-game-object";

export type MockContainerParams = MockGameObjectParams & {
  containerTags?: string[];
  items?: GameObject[];
  maxItems?: number;
  type?: number;
};

export class MockContainer extends MockGameObject implements Container {
  private _containerTags: string[] = [];
  private _items: GameObject[] = [];
  private _maxItems: number = 100;
  private _type: number = 0;

  onInserted: MulticastDelegate<
    (container: this, insertedObjects: GameObject[], player: Player) => void
  > = new MockMulticastDelegate<
    (container: this, insertedObjects: GameObject[], player: Player) => void
  >();
  onRemoved: MulticastDelegate<
    (container: this, removedObject: GameObject, player: Player) => void
  > = new MockMulticastDelegate<
    (container: this, removedObject: GameObject, player: Player) => void
  >();

  constructor(params?: MockContainerParams) {
    super(params);
    if (params?.containerTags) {
      this._containerTags = params.containerTags;
    }
    if (params?.items) {
      this._items = params.items;
      for (const item of this._items) {
        (item as MockGameObject)._setContainer(this);
      }
    }
    if (params?.maxItems !== undefined) {
      this._maxItems = params.maxItems;
    }
    if (params?.type !== undefined) {
      this._type = params.type;
    }
  }

  addObjects(
    objects: GameObject[],
    index?: number | undefined,
    showAnimation?: boolean | undefined
  ): void {
    index = index ? index : 0;
    this._items = [
      ...this._items.slice(0, index),
      ...objects,
      ...this._items.slice(index),
    ];
    for (const item of this._items) {
      (item as MockGameObject)._setContainer(this);
    }
  }

  clear(): void {
    for (const item of this._items) {
      (item as MockGameObject)._setContainer(undefined);
    }
    this._items = [];
  }

  contains(checkObject: GameObject): boolean {
    return this._items.includes(checkObject);
  }

  getContainerTags(): string[] {
    return this._containerTags;
  }

  getItems(): GameObject[] {
    return this._items;
  }

  getMaxItems(): number {
    return this._maxItems;
  }

  getNextTakeIndex(): number {
    if (!this.isValid() || this.getNumItems() === 0) {
      return -1;
    }
    return 0; // random *could* choose another index
  }

  getNumItems(): number {
    return this._items.length;
  }

  getType(): number {
    return this._type;
  }

  insert(
    objects: GameObject[],
    index?: number | undefined,
    showAnimation?: boolean | undefined
  ): void {
    this.addObjects(objects, index, showAnimation);
  }

  remove(objectToRemove: GameObject): boolean {
    const index = this._items.indexOf(objectToRemove);
    return this.removeAt(index);
  }

  removeAt(index: number): boolean {
    if (index < 0 || index >= this._items.length) {
      return false;
    }
    const [obj] = this._items.splice(index, 1);
    (obj as MockGameObject)._setContainer(undefined);
    return true;
  }

  setContainerTags(tags: string[]): void {
    this._containerTags = tags;
  }

  setMaxItems(maxItems: number): void {
    this._maxItems = maxItems;
  }

  setType(newType: number): void {
    this._type = newType;
  }

  take(
    objectToRemove: GameObject,
    position: Vector | [x: number, y: number, z: number],
    showAnimation?: boolean | undefined,
    keep?: boolean | undefined
  ): boolean {
    const index = this._items.indexOf(objectToRemove);
    const obj = this.takeAt(index, position, showAnimation, keep);
    return obj ? true : false;
  }

  takeAt(
    index: number,
    position: Vector | [x: number, y: number, z: number],
    showAnimation?: boolean | undefined,
    keep?: boolean | undefined
  ): GameObject | undefined {
    const obj = this._items[index];
    if (!obj || (!keep && !this.removeAt(index))) {
      return undefined;
    }
    obj.setPosition(position);
    return obj;
  }
}
