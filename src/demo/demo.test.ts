// Enums, variables, functions from "ttpg-mock" (uses TTPG version in TTPG).
import {
  FetchOptions, // interface
  FetchResponse, // class
  GameObject, // type
  GridSnapType, // enum
  MockGameObject, // class
  MockGameObjectParams,
  world, // variable
  fetch, // function
  isTTPG, // boolean, new entry in ttpg-mock
} from "../index";

it("enum", () => {
  const x = GridSnapType.Center;
  expect(x).toBe(1);
});

it("variable", () => {
  const obj: GameObject[] = world.getAllObjects();
});

it("function", () => {
  const options: FetchOptions = {};
  const response: Promise<FetchResponse> = fetch(options);
  if (response === undefined) {
    throw new Error("undefined response");
  }
});

it("type use", () => {
  const params: MockGameObjectParams = { position: [1, 2, 3] };
  const obj: GameObject = new MockGameObject(params);
  const f = (x: GameObject) => {};
  f(obj);
});

it("isTTPG", () => {
  expect(isTTPG).toBe(false);
});
