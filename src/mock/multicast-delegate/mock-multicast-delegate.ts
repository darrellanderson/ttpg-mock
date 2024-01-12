import { MulticastDelegate } from "@tabletop-playground/api";

export class MockMulticastDelegate<T extends (...args: any) => any>
  implements MulticastDelegate<T>
{
  private readonly _listeners: T[] = [];

  add(fn: T): void {
    this._listeners.push(fn);
  }
  remove(fn: T): void {
    for (let i = this._listeners.length - 1; i >= 0; i--) {
      if (this._listeners[i] === fn) {
        this._listeners.splice(i, 1);
      }
    }
  }
  clear(): void {
    this._listeners.splice(0);
  }

  _trigger(...args: Parameters<T>): void {
    for (const fn of this._listeners) {
      if (typeof fn === "function") {
        fn.apply(null, args);
      }
    }
  }
}
