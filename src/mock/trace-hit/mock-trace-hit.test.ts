import { MockGameObject } from "../static-object/game-object/mock-game-object";
import { MockVector } from "../vector/mock-vector";
import { MockTraceHit, MockTraceHitParams } from "./mock-trace-hit";

it("constructor", () => {
  const params: MockTraceHitParams = {
    object: new MockGameObject(),
    distance: 7,
    position: new MockVector(1, 2, 3),
    impactPosition: new MockVector(5, 6, 7),
    normal: new MockVector(9, 10, 11),
  };
  const hit = new MockTraceHit(params);
  expect(hit.object).toEqual(params.object);
  expect(hit.distance).toEqual(params.distance);
  expect(hit.position).toEqual(params.position);
  expect(hit.impactPosition).toEqual(params.impactPosition);
  expect(hit.normal).toEqual(params.normal);
});

it("clone", () => {
  const hit = new MockTraceHit();
  const clone = hit.clone();
  expect(clone).toEqual(hit);
});
