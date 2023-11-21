// Enums, variables, functions from "ttpg-mock" (uses TTPG version in TTPG).
import {
  FetchOptions,
  FetchResponse,
  GameObject,
  GridSnapType,
  Vector,
  world,
  fetch,
  Rotator,
} from "@tabletop-playground/api";

import { MockGameObject, MockGameObjectParams } from "../mock/index";

it("enum", () => {
  const x = GridSnapType.Center;
  expect(x).toBe(1);
});

it("variable", () => {
  // Call method on "world" with typed response.
  const objs: GameObject[] = world.getAllObjects();
});

it("function", () => {
  // Call "fetch" function with typed response.
  const url: string = "http://www.example.com";
  const options: FetchOptions = {};
  const response: Promise<FetchResponse> = fetch(url, options);
});

it("mock classes", () => {
  // Create a mock object, use with base type.
  const params: MockGameObjectParams = { position: [1, 2, 3] };
  const obj: GameObject = new MockGameObject(params);
  const f = (o: GameObject) => {};
  f(obj);

  // Call method on mocked object (make sure those work!).
  const obj2: GameObject = new MockGameObject();
  const v: Vector = obj2.getPosition();
});

it("new + typed", () => {
  const v: Vector = new Vector(0, 0, 0);
  const m: number = v.magnitude(); // call method
});

it("instanceof", () => {
  const v: Vector = new Vector(0, 0, 0);
  const is = v instanceof Vector;
  expect(is).toBe(true);
  const isNot = v instanceof Rotator;
  expect(isNot).toBe(false);
});
