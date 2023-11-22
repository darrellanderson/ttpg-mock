/*
 * The jest-config will redirect "@tabletop-playground/api" to ttpg-mock.
 */
import {
  FetchOptions,
  FetchResponse,
  GameObject,
  GridSnapType,
  Rotator,
  Vector,
  fetch,
  world,
} from "@tabletop-playground/api";

/*
 * With the "ttpg-mock" node module installed, this would be:
 *
 * import { ... } from "ttpg-mock"
 */
import { MockGameObject, MockGameObjectParams, mockWorld } from "../index";

it("enum", () => {
  const x = GridSnapType.Center;
  expect(x).toBe(1);
});

it("variable", () => {
  // Call method on "world" with typed response.
  const objs: GameObject[] = world.getAllObjects();
  expect(Array.isArray(objs)).toBe(true);
});

it("function", () => {
  // Call "fetch" function with typed response.
  const url: string = "http://www.example.com";
  const options: FetchOptions = {};
  const response: Promise<FetchResponse> = fetch(url, options);
  expect(response !== undefined).toBe(true);
});

it("mock classes", () => {
  // Create a mock object, use with base type.
  const params: MockGameObjectParams = {
    position: [1, 0, 0],
    templateMetadata: "my-metadata",
  };
  const obj: GameObject = new MockGameObject(params);
  expect(obj.getPosition().magnitude()).toBe(1);
  expect(obj.getTemplateMetadata()).toBe("my-metadata");

  // Use as type.
  const f = (o: GameObject) => {};
  f(obj);

  // Call method on mocked object (make sure those work!).
  const obj2: GameObject = new MockGameObject();
  const v: Vector = obj2.getPosition();
  const m: number = v.magnitude();
  expect(m).toBe(0);
});

it("new + typed", () => {
  const v: Vector = new Vector(0, 0, 0);
  const m: number = v.magnitude(); // call method
  expect(m).toBe(0);
});

it("instanceof", () => {
  const v: Vector = new Vector(0, 0, 0);
  const is = v instanceof Vector;
  expect(is).toBe(true);
  const isNot = v instanceof Rotator;
  expect(isNot).toBe(false);
});

it("world._reset", () => {
  const obj: GameObject = new MockGameObject();
  mockWorld._reset({ gameObjects: [obj] });
  expect(world.getAllObjects()).toEqual([obj]);
});
