import {
  GameObject,
  MulticastDelegate,
  Switcher,
} from "@tabletop-playground/api";
import { MockMulticastDelegate } from "../multicast-delegate/mock-multicast-delegate";

export class MockSwitcher implements Switcher {
  onObjectSwitched: MulticastDelegate<
    (switcher: this, newIndex: number, oldIndex: number) => void
  > = new MockMulticastDelegate<
    (switcher: this, newIndex: number, oldIndex: number) => void
  >();

  setObjectIndex(index: number): void {
    throw new Error("Method not implemented.");
  }
  removeAt(index: number): boolean {
    throw new Error("Method not implemented.");
  }
  remove(objectToRemove: GameObject): boolean {
    throw new Error("Method not implemented.");
  }
  isValid(): boolean {
    throw new Error("Method not implemented.");
  }
  getObjectAt(index: number): GameObject {
    throw new Error("Method not implemented.");
  }
  getNumObjects(): number {
    throw new Error("Method not implemented.");
  }
  getCurrentObjectIndex(): number {
    throw new Error("Method not implemented.");
  }
  getCurrentObject(): GameObject {
    throw new Error("Method not implemented.");
  }
  destroy(): void {
    throw new Error("Method not implemented.");
  }
  contains(checkObject: GameObject): boolean {
    throw new Error("Method not implemented.");
  }
  addObjects(
    objects: GameObject[],
    index?: number | undefined,
    showAnimation?: boolean | undefined
  ): void {
    throw new Error("Method not implemented.");
  }
}
