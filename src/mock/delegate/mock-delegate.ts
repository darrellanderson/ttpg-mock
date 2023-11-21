import { Delegate } from "@tabletop-playground/api";

export class MockDelegate<T> implements Delegate<T> {
  private _listener: T | undefined;

  add(fn: T): void {
    this._listener = fn;
  }

  remove(fn: T): void {
    if (this._listener === fn) {
      this._listener = undefined;
    }
  }

  clear(): void {
    this._listener = undefined;
  }

  _trigger(...args: any): void {
    if (typeof this._listener === "function") {
      this._listener(...args);
    }
  }
}
