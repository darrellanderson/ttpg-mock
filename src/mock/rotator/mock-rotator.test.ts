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
  const out = [];
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

it("equals", () => {
  const a = new MockRotator(1, 2, 3);
  const b = new MockRotator(1.1, 2.1, 3.1);
  expect(a.equals(b, 0)).toEqual(false);
  expect(a.equals(b, 0.2)).toEqual(true);
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
