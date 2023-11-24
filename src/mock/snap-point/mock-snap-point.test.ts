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
  expect(snapPoint.getFlipValidity()).toEqual(params.flipValidity);
  expect(snapPoint.getGlobalPosition()).toEqual(params.globalPosition);
  expect(snapPoint.getIndex()).toEqual(params.index);
  expect(snapPoint.getLocalPosition()).toEqual(params.localPosition);
  expect(snapPoint.getParentObject()).toEqual(params.parentObject);
  expect(snapPoint.getRange()).toEqual(params.range);
  expect(snapPoint.getShape()).toEqual(params.shape);
  expect(snapPoint.getSnapRotation()).toEqual(params.snapRotation);
  expect(snapPoint.getSnapRotationType()).toEqual(params.snapRotationType);
  expect(snapPoint.getSnappedObject()).toEqual(params.snappedObject);
  expect(snapPoint.getTags()).toEqual(params.tags);
  expect(snapPoint.isValid()).toEqual(params.isValid);
  expect(snapPoint.snapsRotation()).toEqual(params.snapsRotation);
});
