import { MockProcess, ProcessRunnableType } from "./mock-process";

it("process flushTicks", () => {
  let count = 0;
  const runnable: ProcessRunnableType = (msecs: number) => {
    count += 1;
  };

  const process = new MockProcess();
  process.nextTick(runnable);
  process.nextTick(runnable);
  expect(count).toEqual(0);
  process.flushTicks();
  expect(count).toEqual(2);
});

it("process clearTicks then flushTicks", () => {
  let count = 0;
  const runnable: ProcessRunnableType = (msecs: number) => {
    count += 1;
  };

  const process = new MockProcess();
  process.nextTick(runnable);
  process.nextTick(runnable);
  expect(count).toEqual(0);
  process.clearTicks();
  process.flushTicks();
  expect(count).toEqual(0);
});

it("global", () => {
  globalThis.process = MockProcess.__sharedInstance;
  process.clearTicks(); // make sure this passes type checking
});
