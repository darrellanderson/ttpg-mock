import { MockGameObject } from "../static-object/game-object/mock-game-object";
import { MockSwitcher, MockSwitcherParams } from "./mock-switcher";

it("constructor", () => {
  const obj1 = new MockGameObject();
  const obj2 = new MockGameObject();
  const params: MockSwitcherParams = {
    gameObjects: [obj1, obj2],
    index: 1,
    isValid: false,
  };
  const switcher = new MockSwitcher(params);
  expect(switcher.contains(obj1)).toBe(true);
  expect(switcher.getCurrentObject()).toEqual(obj2);
  expect(switcher.getCurrentObjectIndex()).toBe(1);
  expect(switcher.getNumObjects()).toBe(2);
  expect(switcher.getObjectAt(0)).toEqual(obj1);
  expect(switcher.isValid()).toBe(params.isValid);
});

it("addObjects", () => {
  const obj1 = new MockGameObject();
  const obj2 = new MockGameObject();

  const switcher = new MockSwitcher();
  expect(switcher.getNumObjects()).toBe(0);

  switcher.addObjects([obj1]);
  expect(switcher.getNumObjects()).toBe(1);
  expect(switcher.getObjectAt(0)).toEqual(obj1);

  switcher.addObjects([obj2], 0);
  expect(switcher.getNumObjects()).toBe(2);
  expect(switcher.getObjectAt(0)).toEqual(obj2);
  expect(switcher.getObjectAt(1)).toEqual(obj1);
});

it("destroy", () => {
  const switcher = new MockSwitcher();
  expect(switcher.isValid()).toBe(true);
  switcher.destroy();
  expect(switcher.isValid()).toBe(false);
});

it("remove", () => {
  const obj1 = new MockGameObject();
  const obj2 = new MockGameObject();
  const switcher = new MockSwitcher();
  switcher.addObjects([obj1, obj2]);
  expect(switcher.getNumObjects()).toBe(2);
  expect(switcher.getObjectAt(0)).toEqual(obj1);
  expect(switcher.getObjectAt(1)).toEqual(obj2);

  let success = switcher.remove(obj1);
  expect(success).toBe(true);
  expect(switcher.getNumObjects()).toBe(1);
  expect(switcher.getObjectAt(0)).toEqual(obj2);

  success = switcher.remove(obj1);
  expect(success).toBe(false);
});

it("setObjectIndex", () => {
  const obj1 = new MockGameObject();
  const obj2 = new MockGameObject();
  const switcher = new MockSwitcher();
  switcher.addObjects([obj1, obj2]);
  expect(switcher.getCurrentObjectIndex()).toBe(0);
  switcher.setObjectIndex(1);
  expect(switcher.getCurrentObjectIndex()).toBe(1);
});
