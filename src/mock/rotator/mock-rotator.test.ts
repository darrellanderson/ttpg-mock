import { MockVector } from "../vector/mock-vector";
import { MockRotator } from "./mock-rotator";

it("_from", () => {
    const arg: [pitch: number, yaw: number, roll: number] = [1, 2, 3];
    const a = MockRotator._from(arg);
    expect(a.pitch).toEqual(1);
    expect(a.yaw).toEqual(2);
    expect(a.roll).toEqual(3);
});

it("constructor", () => {
    const a = new MockRotator(1, 2, 3);
    expect(a.pitch).toEqual(1);
    expect(a.yaw).toEqual(2);
    expect(a.roll).toEqual(3);
    expect(a[0]).toEqual(1);
    expect(a[1]).toEqual(2);
    expect(a[2]).toEqual(3);
});

it("get/set []", () => {
    const a = new MockRotator(1, 2, 3);
    a[0] += 4;
    a[1] += 4;
    a[2] += 4;
    expect(a[0]).toEqual(5);
    expect(a[1]).toEqual(6);
    expect(a[2]).toEqual(7);
});

it("[Symbol.iterator", () => {
    const a = new MockRotator(1, 2, 3);
    const out: number[] = [];
    for (const item of a) {
        out.push(item);
    }
    expect(out).toEqual([1, 2, 3]);
});

it("clone", () => {
    const a = new MockRotator(1, 2, 3);
    const clone = a.clone();
    expect(clone.pitch).toEqual(1);
    expect(clone.yaw).toEqual(2);
    expect(clone.roll).toEqual(3);
});

it("compose", () => {
    const r1 = new MockRotator(1, 2, 3);
    const r2 = new MockRotator(4, 5, 6);
    const r3 = r1.compose(r2);
    const want = new MockRotator(4.783, 7.101, 9.143); // from TTPG
    expect(r3.toString()).toEqual(want.toString());
});

it("equals", () => {
    const a = new MockRotator(1, 2, 3);
    const b = new MockRotator(1.1, 2.1, 3.1);
    expect(a.equals(b, 0)).toEqual(false);
    expect(a.equals(b, 0.2)).toEqual(true);
});

it("getForwardVector", () => {
    let rot = new MockRotator(0, 0, 0);
    let vec = rot.getForwardVector();
    let want = new MockVector(1, 0, 0);
    expect(vec.toString()).toEqual(want.toString());

    rot = new MockRotator(30, 0, 0);
    vec = rot.getForwardVector();
    want = new MockVector(0.866, 0, 0.5);
    expect(vec.toString()).toEqual(want.toString());

    rot = new MockRotator(90, 0, 0);
    vec = rot.getForwardVector();
    want = new MockVector(0, 0, 1);
    expect(vec.toString()).toEqual(want.toString());

    rot = new MockRotator(0, 30, 0);
    vec = rot.getForwardVector();
    want = new MockVector(0.866, 0.5, 0);
    expect(vec.toString()).toEqual(want.toString());

    rot = new MockRotator(0, 90, 0);
    vec = rot.getForwardVector();
    want = new MockVector(0, 1, 0);
    expect(vec.toString()).toEqual(want.toString());

    rot = new MockRotator(0, 0, 30);
    vec = rot.getForwardVector();
    want = new MockVector(1, 0, 0);
    expect(vec.toString()).toEqual(want.toString());

    rot = new MockRotator(0, 0, 90);
    vec = rot.getForwardVector();
    want = new MockVector(1, 0, 0);
    expect(vec.toString()).toEqual(want.toString());

    rot = new MockRotator(40, 50, 60);
    vec = rot.getForwardVector();
    want = new MockVector(0.492, 0.587, 0.643); // from TTPG
    expect(vec.toString()).toEqual(want.toString());
});

it("getRightVector", () => {
    let rot = new MockRotator(0, 0, 0);
    let vec = rot.getRightVector();
    let want = new MockVector(0, 1, 0);
    expect(vec.toString()).toEqual(want.toString());

    rot = new MockRotator(30, 0, 0);
    vec = rot.getRightVector();
    want = new MockVector(0, 1, 0);
    expect(vec.toString()).toEqual(want.toString());

    rot = new MockRotator(90, 0, 0);
    vec = rot.getRightVector();
    want = new MockVector(0, 1, 0);
    expect(vec.toString()).toEqual(want.toString());

    rot = new MockRotator(0, 30, 0);
    vec = rot.getRightVector();
    want = new MockVector(-0.5, 0.866, 0);
    expect(vec.toString()).toEqual(want.toString());

    rot = new MockRotator(0, 90, 0);
    vec = rot.getRightVector();
    want = new MockVector(-1, 0, 0);
    expect(vec.toString()).toEqual(want.toString());

    rot = new MockRotator(0, 0, 30);
    vec = rot.getRightVector();
    want = new MockVector(0, 0.866, -0.5);
    expect(vec.toString()).toEqual(want.toString());

    rot = new MockRotator(0, 0, 90);
    vec = rot.getRightVector();
    want = new MockVector(0, 0, -1);
    expect(vec.toString()).toEqual(want.toString());

    rot = new MockRotator(40, 50, 60);
    vec = rot.getRightVector();
    want = new MockVector(-0.025, 0.748, -0.663); // from TTPG
    expect(vec.toString()).toEqual(want.toString());
});

it("getUpVector", () => {
    let rot = new MockRotator(0, 0, 0);
    let vec = rot.getUpVector();
    let want = new MockVector(0, 0, 1);
    expect(vec.toString()).toEqual(want.toString());

    rot = new MockRotator(30, 0, 0);
    vec = rot.getUpVector();
    want = new MockVector(-0.5, 0, 0.866);
    expect(vec.toString()).toEqual(want.toString());

    rot = new MockRotator(90, 0, 0);
    vec = rot.getUpVector();
    want = new MockVector(-1, 0, 0);
    expect(vec.toString()).toEqual(want.toString());

    rot = new MockRotator(0, 30, 0);
    vec = rot.getUpVector();
    want = new MockVector(0, 0, 1);
    expect(vec.toString()).toEqual(want.toString());

    rot = new MockRotator(0, 90, 0);
    vec = rot.getUpVector();
    want = new MockVector(0, 0, 1);
    expect(vec.toString()).toEqual(want.toString());

    rot = new MockRotator(0, 0, 30);
    vec = rot.getUpVector();
    want = new MockVector(0, 0.5, 0.866);
    expect(vec.toString()).toEqual(want.toString());

    rot = new MockRotator(0, 0, 90);
    vec = rot.getUpVector();
    want = new MockVector(0, 1, 0);
    expect(vec.toString()).toEqual(want.toString());

    rot = new MockRotator(40, 50, 60);
    vec = rot.getUpVector();
    want = new MockVector(-0.87, 0.31, 0.383); // from TTPG
    expect(vec.toString()).toEqual(want.toString());
});

it("getInverse", () => {
    let r1 = new MockRotator(1, 2, 3);
    let r2 = r1.getInverse();
    let want = new MockRotator(-1.103, -1.945, -2.964); // from TTPG
    expect(r2.toString()).toEqual(want.toString());

    r1 = new MockRotator(0, 0, 0);
    r2 = r1.getInverse();
    want = new MockRotator(0, 0, 0);
    expect(r2.toString()).toEqual(want.toString());
});

it("multiply", () => {
    const a = new MockRotator(1, 2, 3);
    const b = a.multiply(3);
    expect(a.pitch).toEqual(1);
    expect(a.yaw).toEqual(2);
    expect(a.roll).toEqual(3);
    expect(b.pitch).toEqual(3);
    expect(b.yaw).toEqual(6);
    expect(b.roll).toEqual(9);
});

it("negate", () => {
    const a = new MockRotator(1, 2, 3);
    const b = a.negate();
    expect(a.pitch).toEqual(1);
    expect(a.yaw).toEqual(2);
    expect(a.roll).toEqual(3);
    expect(b.pitch).toEqual(-1);
    expect(b.yaw).toEqual(-2);
    expect(b.roll).toEqual(-3);
});

it("rotateVector", () => {
    let vec = new MockVector(1, 2, 3);
    let rot = new MockRotator(0, 90, 0);
    let out = rot.rotateVector(vec);
    let want = new MockVector(-2, 1, 3); // from TTPG
    expect(out.toString()).toEqual(want.toString());

    vec = new MockVector(1, 2, 3);
    rot = new MockRotator(4, 5, 6);
    out = rot.rotateVector(vec);
    want = new MockVector(0.6, 2.364, 2.838); // from TTPG
    expect(out.toString()).toEqual(want.toString());

    vec = new MockVector(0, 0, 0);
    rot = new MockRotator(0, 0, 0);
    out = rot.rotateVector(vec);
    want = new MockVector(0, 0, 0);
    expect(out.toString()).toEqual(want.toString());
});

it("unrotateVector", () => {
    const vec = new MockVector(1, 2, 3);
    const rot = new MockRotator(4, 5, 6);
    const out = rot.unrotateVector(vec);
    const want = new MockVector(1.377, 1.591, 3.094);
    expect(out.toString()).toEqual(want.toString());
});

it("toString", () => {
    const a = new MockRotator(1, 2, 3);
    const s = a.toString();
    expect(s).toEqual("(P=1,Y=2,R=3)");
});

it("toVector", () => {
    const a = new MockRotator(1, 2, 3);
    const vector = a.toVector();
    expect(vector.x).toEqual(1);
    expect(vector.y).toEqual(2);
    expect(vector.z).toEqual(3);
});

it("static.fromAxisAngle", () => {
    const axis = new MockVector(1, 2, 3);
    const angle = 4;
    const rot = MockRotator.fromAxisAngle(axis, angle);

    const want = new MockRotator(-2.107, 3.228, -1.129);
    const wantFwd = new MockVector(0.998, 0.056, -0.037);

    expect(rot.toString()).toEqual(want.toString());
    expect(rot.getForwardVector().toString()).toEqual(wantFwd.toString());
});

it("static.interpolateTo", () => {
    const a = new MockRotator(0, 0, 0);
    const b = new MockRotator(1, 0, 0);
    const deltaTime = 0.1;
    const animSpeed = 1;
    const c = MockRotator.interpolateTo(a, b, deltaTime, animSpeed);
    expect(c.pitch).toBeCloseTo(0.1);
    expect(c.yaw).toEqual(0);
    expect(c.roll).toEqual(0);
});

it("static.interpolateToConstant", () => {
    const a = new MockRotator(0, 0, 0);
    const b = new MockRotator(1, 0, 0);
    const deltaTime = 0.1;
    const animSpeed = 1;
    const c = MockRotator.interpolateToConstant(a, b, deltaTime, animSpeed);
    expect(c.pitch).toBeCloseTo(0.1);
    expect(c.yaw).toEqual(0);
    expect(c.roll).toEqual(0);
});

it("static.lerp", () => {
    const a = new MockRotator(0, 0, 0);
    const b = new MockRotator(1, 0, 0);
    const bShortestPath = false;
    const c = MockRotator.lerp(a, b, 0.1, bShortestPath);
    expect(c.pitch).toBeCloseTo(0.1);
    expect(c.yaw).toEqual(0);
    expect(c.roll).toEqual(0);
});

// --------------------------------

// Some THREE.js tests.
it("three to/from euler", () => {
    const r1 = new MockRotator(1, 2, 3);
    const r2 = MockRotator._fromThreeEuler(MockRotator._toThreeEuler(r1));
    expect(r1.toString()).toEqual(r2.toString());
});

it("three to/from matrix", () => {
    const r1 = new MockRotator(1, 2, 3);
    const r2 = MockRotator._fromThreeMatrix(MockRotator._toThreeMatrix(r1));
    expect(r1.toString()).toEqual(r2.toString());
});
