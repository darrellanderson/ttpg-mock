import { Euler, Matrix4, Vector3 } from "three";
import { MockRotator } from "../rotator/mock-rotator";
import { MockVector } from "./mock-vector";

it("_from", () => {
    const arg: [x: number, y: number, z: number] = [1, 2, 3];
    const vector = MockVector._from(arg);
    expect(vector.x).toEqual(1);
    expect(vector.y).toEqual(2);
    expect(vector.z).toEqual(3);
});

it("constructor", () => {
    const vector = new MockVector(1, 2, 3);
    expect(vector.x).toEqual(1);
    expect(vector.y).toEqual(2);
    expect(vector.z).toEqual(3);
    expect(vector[0]).toEqual(1);
    expect(vector[1]).toEqual(2);
    expect(vector[2]).toEqual(3);
});

it("get/set []", () => {
    const vector = new MockVector(1, 2, 3);
    vector[0] += 4;
    vector[1] += 4;
    vector[2] += 4;
    expect(vector[0]).toEqual(5);
    expect(vector[1]).toEqual(6);
    expect(vector[2]).toEqual(7);
});

it("[Symbol.iterator", () => {
    const vector = new MockVector(1, 2, 3);
    const out: number[] = [];
    for (const item of vector) {
        out.push(item);
    }
    expect(out).toEqual([1, 2, 3]);
});

it("add", () => {
    const a = new MockVector(1, 2, 3);
    const b = new MockVector(5, 6, 7);
    const c = a.add(b);
    expect(a.x).toEqual(1); // a + b stable
    expect(a.y).toEqual(2);
    expect(a.z).toEqual(3);
    expect(b.x).toEqual(5);
    expect(b.y).toEqual(6);
    expect(b.z).toEqual(7);
    expect(c.x).toEqual(6);
    expect(c.y).toEqual(8);
    expect(c.z).toEqual(10);
});

it("clampVectorMagnitude", () => {
    const good = new MockVector(100, 0, 0).clampVectorMagnitude(10, 1000);
    expect(good.x).toEqual(100);
    expect(good.y).toEqual(0);
    expect(good.z).toEqual(0);
    const bad1 = new MockVector(1, 0, 0).clampVectorMagnitude(10, 1000);
    expect(bad1.x).toEqual(10);
    expect(bad1.y).toEqual(0);
    expect(bad1.z).toEqual(0);
    const bad10K = new MockVector(10000, 0, 0).clampVectorMagnitude(10, 1000);
    expect(bad10K.x).toEqual(1000);
    expect(bad10K.y).toEqual(0);
    expect(bad10K.z).toEqual(0);
    const zero = new MockVector(0, 0, 0).clampVectorMagnitude(1, 1);
    expect(zero.x).toEqual(0);
    expect(zero.y).toEqual(0);
    expect(zero.z).toEqual(0);
});

it("clone", () => {
    const vector = new MockVector(1, 2, 3);
    const clone = vector.clone();
    expect(clone.x).toEqual(1);
    expect(clone.y).toEqual(2);
    expect(clone.z).toEqual(3);
});

it("distance", () => {
    const a = new MockVector(1, 0, 0);
    const b = new MockVector(2, 0, 0);
    const distance = a.distance(b);
    expect(distance).toEqual(1);
});

it("divide", () => {
    const a = new MockVector(2, 4, 6);
    const b = a.divide(2);
    const c = a.divide(0); // returns (0,0,0)
    expect(a.x).toEqual(2);
    expect(a.y).toEqual(4);
    expect(a.z).toEqual(6);
    expect(b.x).toEqual(1);
    expect(b.y).toEqual(2);
    expect(b.z).toEqual(3);
    expect(c.x).toEqual(0);
    expect(c.y).toEqual(0);
    expect(c.z).toEqual(0);
});

it("dot", () => {
    const a = new MockVector(1, 2, 3);
    const b = new MockVector(5, 6, 7);
    const dot = a.dot(b);
    expect(dot).toEqual(38);
});

it("equals", () => {
    const a = new MockVector(1, 2, 3);
    const b = new MockVector(1.1, 2.1, 3.1);
    expect(a.equals(b, 0)).toEqual(false);
    expect(a.equals(b, 0.2)).toEqual(true);
});

it("findClosestPointOnLine", () => {
    const a = new MockVector(0, 0, 0);
    const b = new MockVector(1, 0, 0);

    let c = new MockVector(-1, 1, 0);
    let want = new MockVector(-1, 0, 0);
    let closest = c.findClosestPointOnLine(a, b);
    expect(want.distance(closest)).toBeCloseTo(0);

    c = new MockVector(0.33, 1, 0);
    want = new MockVector(0.33, 0, 0);
    closest = c.findClosestPointOnLine(a, b);
    expect(want.distance(closest)).toBeCloseTo(0);

    c = new MockVector(2, 1, 0);
    want = new MockVector(2, 0, 0);
    closest = c.findClosestPointOnLine(a, b);
    expect(want.distance(closest)).toBeCloseTo(0);
});

it("findClosestPointOnSegment", () => {
    const a = new MockVector(0, 0, 0);
    const b = new MockVector(1, 0, 0);

    let c = new MockVector(-1, 1, 0);
    let want = a;
    let closest = c.findClosestPointOnSegment(a, b);
    expect(closest.toString()).toEqual(want.toString());

    c = new MockVector(0.33, 1, 0);
    want = new MockVector(0.33, 0, 0);
    closest = c.findClosestPointOnSegment(a, b);
    expect(closest.toString()).toEqual(want.toString());

    c = new MockVector(2, 1, 0);
    want = b;
    closest = c.findClosestPointOnSegment(a, b);
    expect(closest.toString()).toEqual(want.toString());

    // world.lineTrace had a problem with this, check components.
    const start = new MockVector(0, 0, 10);
    const end = new MockVector(0, 0, -10);
    const pos = new MockVector(0, 0, 0);
    const closestPoint = pos.findClosestPointOnSegment(start, end);
    expect(closestPoint.toString()).toEqual(pos.toString());
});

it("findLookRotation", () => {
    let src = new MockVector(0, 0, 0);
    let dst = new MockVector(1, 0, 0);
    let rot = src.findLookAtRotation(dst);
    let want = new MockRotator(0, 0, 0); // from TTPG
    expect(rot.toString()).toEqual(want.toString());

    src = new MockVector(0, 0, 0);
    dst = new MockVector(1, 1, 0);
    rot = src.findLookAtRotation(dst);
    want = new MockRotator(0, 45, 0); // from TTPG
    expect(rot.toString()).toEqual(want.toString());

    src = new MockVector(0, 0, 0);
    dst = new MockVector(0, 1, 0);
    rot = src.findLookAtRotation(dst);
    want = new MockRotator(0, 90, 0);
    expect(rot.toString()).toEqual(want.toString());

    src = new MockVector(0, 0, 0);
    dst = new MockVector(0, 0, 1);
    rot = src.findLookAtRotation(dst);
    want = new MockRotator(0, 0, 180);
    expect(rot.toString()).toEqual(want.toString());

    src = new MockVector(0, 0, 0);
    dst = new MockVector(1, 2, 3);
    rot = src.findLookAtRotation(dst);
    want = new MockRotator(53.301, 63.435, 0);
    expect(rot.toString()).toEqual(want.toString());
});

it("getDistanceToLine", () => {
    const p0 = new MockVector(0, 0, 0);
    const p1 = new MockVector(1, 0, 0);
    const v = new MockVector(2, 1, 0);
    const d = v.getDistanceToLine(p0, p1);
    expect(d).toBeCloseTo(1);
});

it("getDistanceToSegment", () => {
    const p0 = new MockVector(0, 0, 0);
    const p1 = new MockVector(1, 0, 0);
    const v = new MockVector(2, 1, 0);
    const d = v.getDistanceToSegment(p0, p1);
    expect(d).toBeCloseTo(1.414);
});

it("getMaxElement", () => {
    const a = new MockVector(1, 2, 3);
    const value = a.getMaxElement();
    expect(value).toEqual(3);
});

it("getMinElement", () => {
    const a = new MockVector(1, 2, 3);
    const value = a.getMinElement();
    expect(value).toEqual(1);
});

it("getRefelctionVector", () => {
    const a = new MockVector(1, 2, 3);
    const surfaceNormal = new MockVector(5, 6, 7);
    const b = a.getReflectionVector(surfaceNormal);
    const want = new MockVector(-2.455, -2.145, -1.836); // from TTPG
    expect(b.distance(want)).toBeCloseTo(0);
});

it("isInBox", () => {
    const a = new MockVector(1, 2, 3);
    const b = new MockVector(10, 20, 30);
    const boxOrigin: [x: number, y: number, z: number] = [0, 0, 0];
    const boxExtent: [x: number, y: number, z: number] = [5, 5, 5];
    const valueA = a.isInBox(boxOrigin, boxExtent);
    const valueB = b.isInBox(boxOrigin, boxExtent);
    expect(valueA).toEqual(true);
    expect(valueB).toEqual(false);
});

it("magnitude", () => {
    const a = new MockVector(1, 2, 3);
    const value = a.magnitude();
    expect(value).toBeCloseTo(3.741);
});

it("magnitudeSquared", () => {
    const a = new MockVector(1, 2, 3);
    const value = a.magnitudeSquared();
    expect(value).toEqual(14);
});

it("multiply", () => {
    const a = new MockVector(1, 2, 3);
    const b = a.multiply(2);
    expect(a.x).toEqual(1);
    expect(a.y).toEqual(2);
    expect(a.z).toEqual(3);
    expect(b.x).toEqual(2);
    expect(b.y).toEqual(4);
    expect(b.z).toEqual(6);
});

it("negate", () => {
    const a = new MockVector(1, 2, 3);
    const b = a.negate();
    expect(a.x).toEqual(1);
    expect(a.y).toEqual(2);
    expect(a.z).toEqual(3);
    expect(b.x).toEqual(-1);
    expect(b.y).toEqual(-2);
    expect(b.z).toEqual(-3);
});

it("rotateAngleAxis", () => {
    let a = new MockVector(1, 0, 2);
    let angleDeg = 90;
    let axis = new MockVector(0, 0, 1);
    let b = a.rotateAngleAxis(angleDeg, axis);
    let want = new MockVector(0, 1, 2);
    expect(b.toString()).toEqual(want.toString());

    // Vary degrees.
    a = new MockVector(1, 0, 2);
    angleDeg = 10;
    axis = new MockVector(0, 0, 1);
    b = a.rotateAngleAxis(angleDeg, axis);
    want = new MockVector(0.985, 0.174, 2); // from TTPG's console
    expect(b.toString()).toEqual(want.toString());

    a = new MockVector(1, 0, 2);
    angleDeg = 130;
    axis = new MockVector(0, 0, 1);
    b = a.rotateAngleAxis(angleDeg, axis);
    want = new MockVector(-0.643, 0.766, 2); // from TTPG's console
    expect(b.toString()).toEqual(want.toString());

    // Other axis (aligned).
    a = new MockVector(1, 0, 2);
    angleDeg = 90;
    axis = new MockVector(0, 1, 0);
    b = a.rotateAngleAxis(angleDeg, axis);
    want = new MockVector(2, 0, -1); // from TTPG's console
    expect(b.toString()).toEqual(want.toString());

    a = new MockVector(1, 0, 2);
    angleDeg = 90;
    axis = new MockVector(1, 0, 0);
    b = a.rotateAngleAxis(angleDeg, axis);
    want = new MockVector(1, -2, 0); // from TTPG's console
    expect(b.toString()).toEqual(want.toString());

    // Noisy.
    a = new MockVector(1, 2, 3);
    angleDeg = 40;
    axis = new MockVector(5, 6, 7);
    b = a.rotateAngleAxis(angleDeg, axis);
    want = new MockVector(1.415, 1.527, 3.109); // from TTPG's console
    expect(b.toString()).toEqual(want.toString());
});

it("subract", () => {
    const a = new MockVector(1, 2, 3);
    const b = new MockVector(5, 7, 9);
    const c = a.subtract(b);
    expect(a.x).toEqual(1); // a + b stable
    expect(a.y).toEqual(2);
    expect(a.z).toEqual(3);
    expect(b.x).toEqual(5);
    expect(b.y).toEqual(7);
    expect(b.z).toEqual(9);
    expect(c.x).toEqual(-4);
    expect(c.y).toEqual(-5);
    expect(c.z).toEqual(-6);
});

it("toColor", () => {
    const vector = new MockVector(1, 2, 3);
    const color = vector.toColor();
    expect(color.toString()).toEqual("(R=1,G=2,B=3,A=1)");
});

it("toRotator", () => {
    const vector = new MockVector(1, 2, 3);
    const rotator = vector.toRotator();
    expect(rotator.toString()).toEqual("(P=1,Y=2,R=3)");
});

it("toString", () => {
    const vector = new MockVector(1, 2, 3);
    const s = vector.toString();
    expect(s).toEqual("(X=1,Y=2,Z=3)");
});

it("unit", () => {
    const vector = new MockVector(10, 0, 0);
    const unit = vector.unit();
    expect(unit.x).toEqual(1);
    expect(unit.y).toEqual(0);
    expect(unit.z).toEqual(0);
});

it("static.getVectorArrayAverage", () => {
    const a = new MockVector(0, 0, 0);
    const b = new MockVector(1, 0, 0);
    const c = MockVector.getVectorArrayAverage([a, b]);
    expect(c.x).toBeCloseTo(0.5);
    expect(c.y).toEqual(0);
    expect(c.z).toEqual(0);
});

it("static.interpolateTo", () => {
    const a = new MockVector(0, 0, 0);
    const b = new MockVector(1, 0, 0);
    const deltaTime = 0.1;
    const animSpeed = 1;
    const c = MockVector.interpolateTo(a, b, deltaTime, animSpeed);
    expect(c.x).toBeCloseTo(0.1);
    expect(c.y).toEqual(0);
    expect(c.z).toEqual(0);
});

it("static.interpolateToConstant", () => {
    const a = new MockVector(0, 0, 0);
    const b = new MockVector(1, 0, 0);
    const deltaTime = 0.1;
    const animSpeed = 1;
    const c = MockVector.interpolateToConstant(a, b, deltaTime, animSpeed);
    expect(c.x).toBeCloseTo(0.1);
    expect(c.y).toEqual(0);
    expect(c.z).toEqual(0);
});

it("static.lerp", () => {
    const a = new MockVector(0, 0, 0);
    const b = new MockVector(1, 0, 0);
    const c = MockVector.lerp(a, b, 0.1);
    expect(c.x).toBeCloseTo(0.1);
    expect(c.y).toEqual(0);
    expect(c.z).toEqual(0);
});

it("static.randomPointInBoundingBox", () => {
    const origin = new MockVector(1, 2, 3);
    const boxExtent = new MockVector(0.1, 0.2, 0.3);
    const point = MockVector.randomPointInBoundingBox(origin, boxExtent);
    const d = origin.distance(point);
    expect(d).toBeLessThan(1);
});

it("static.randomUnitVector", () => {
    let point = MockVector.randomUnitVector();
    let d = point.magnitude();
    expect(d).toBeCloseTo(1);

    // Verify if seed is (0,0,0) still gives unit result.
    jest.spyOn(global.Math, "random").mockReturnValue(0.5);
    point = MockVector.randomUnitVector();
    d = point.magnitude();
    expect(d).toBeCloseTo(1);
    jest.spyOn(global.Math, "random").mockRestore();
});

// --------------------------------

// Some THREE.js tests.
it("three to/from", () => {
    const v1 = new MockVector(1, 2, 3);
    const v2 = MockVector._fromThreeVector(MockVector._toThreeVector(v1));
    expect(v1).toEqual(v2);
});

it("three look forward in local setup", () => {
    const eye = new Vector3(0, 0, 0);
    const target = new Vector3(0, 0, -1); // camera looks -Z
    const up = new Vector3(0, 1, 0); // up is +Y
    const matrix = new Matrix4().lookAt(eye, target, up);
    const order = "XYZ";
    const euler = new Euler().setFromRotationMatrix(matrix, order);
    expect(euler.x).toBeCloseTo(0);
    expect(euler.y).toBeCloseTo(0);
    expect(euler.z).toBeCloseTo(0);
});
