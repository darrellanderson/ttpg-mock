// "Module '"@tabletop-playground/api"' has no exported member 'Process'.ts(2305)"
// import { Process } from "@tabletop-playground/api";

export type ProcessRunnableType = (milliseconds: number) => void;

export class MockProcess /*implements Process*/ {
  public static readonly __sharedInstance = new MockProcess();
  private _runQueue: ProcessRunnableType[] = [];

  nextTick(fn: ProcessRunnableType): void {
    this._runQueue.push(fn);
  }

  clearTicks(): void {
    this._runQueue = [];
  }

  flushTicks(): void {
    const entries: ProcessRunnableType[] = this._runQueue;
    this._runQueue = []; // clear BEFORE running
    for (const entry of entries) {
      entry.apply(null, [1]);
    }
  }
}
