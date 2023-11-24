import {
  SnapPointFlipValidity,
  SnapPointShape,
} from "@tabletop-playground/api";
import { MockGameObject } from "../static-object/game-object/mock-game-object";
import { MockSnapPoint, MockSnapPointParams } from "./mock-snap-point";
import { MockStaticObject } from "../static-object/mock-static-object";
import { MockVector } from "../vector/mock-vector";

it("constructor", () => {
  const params: MockSnapPointParams = {
    flipValidity: SnapPointFlipValidity.Upright,
    globalPosition: new MockVector(1, 2, 3),
    index: 7,
    localPosition: new MockVector(5, 6, 7),
    parentObject: new MockStaticObject(),
    range: 13,
    shape: SnapPointShape.Cylinder,
    snapRotation: 17,
    snapRotationType: 18,
    snappedObject: new MockGameObject(),
    tags: ["my-tag"],
    isValid: false,
    snapsRotation: false,
  };
  const snapPoint = new MockSnapPoint(params);
  expect(snapPoint.getFlipValidity()).toBe(params.flipValidity);
  expect(snapPoint.getGlobalPosition()).toEqual(params.globalPosition);
  expect(snapPoint.getIndex()).toBe(params.index);
  expect(snapPoint.getLocalPosition()).toEqual(params.localPosition);
  expect(snapPoint.getParentObject()).toEqual(params.parentObject);
  expect(snapPoint.getRange()).toBe(params.range);
  expect(snapPoint.getShape()).toBe(params.shape);
  expect(snapPoint.getSnapRotation()).toBe(params.snapRotation);
  expect(snapPoint.getSnapRotationType()).toBe(params.snapRotationType);
  expect(snapPoint.getSnappedObject()).toEqual(params.snappedObject);
  expect(snapPoint.getTags()).toBe(params.tags);
  expect(snapPoint.isValid()).toBe(params.isValid);
  expect(snapPoint.snapsRotation()).toBe(params.snapsRotation);
});
