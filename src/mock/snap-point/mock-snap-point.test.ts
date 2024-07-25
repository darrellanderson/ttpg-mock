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
    expect(snapPoint.getGlobalPosition()).toEqual(params.localPosition);
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

it("_setParentObject", () => {
    const snapPoint = new MockSnapPoint();
    const parent = new MockGameObject();

    expect(snapPoint.getParentObject()).toBeUndefined();
    snapPoint._setParentObject(parent);
    expect(snapPoint.getParentObject()).toEqual(parent);
});

it("_setSnappedObject", () => {
    const snapPoint = new MockSnapPoint();
    const snapped = new MockGameObject();

    expect(snapPoint.getSnappedObject()).toBeUndefined();
    snapPoint._setSnappedObject(snapped);
    expect(snapPoint.getSnappedObject()).toEqual(snapped);
});

it("getGlobalPosition w/ parent", () => {
    const snapPoint = new MockSnapPoint({
        localPosition: new MockVector(1, 2, 3),
        parentObject: new MockStaticObject({
            position: new MockVector(4, 5, 6),
        }),
    });
    expect(snapPoint.getGlobalPosition()).toEqual(new MockVector(5, 7, 9));
});
