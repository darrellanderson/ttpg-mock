import { MockColor } from "./mock-color";

it("_from", () => {
    const a = MockColor._from([1, 2, 3, 4]);
    expect(a.r).toEqual(1);
    expect(a.g).toEqual(2);
    expect(a.b).toEqual(3);
    expect(a.a).toEqual(4);
    const b = MockColor._from(a);
    expect(b.r).toEqual(1);
    expect(b.g).toEqual(2);
    expect(b.b).toEqual(3);
    expect(b.a).toEqual(4);
});

it("constructor", () => {
    let a = new MockColor(1, 2, 3, 4);
    expect(a.r).toEqual(1);
    expect(a.g).toEqual(2);
    expect(a.b).toEqual(3);
    expect(a.a).toEqual(4);
    expect(a[0]).toEqual(1);
    expect(a[1]).toEqual(2);
    expect(a[2]).toEqual(3);
    expect(a[3]).toEqual(4);

    a = new MockColor(1, 2, 3);
    expect(a.r).toEqual(1);
    expect(a.g).toEqual(2);
    expect(a.b).toEqual(3);
    expect(a.a).toEqual(1);
    expect(a[0]).toEqual(1);
    expect(a[1]).toEqual(2);
    expect(a[2]).toEqual(3);
    expect(a[3]).toEqual(1);
});

it("get/set []", () => {
    const a = new MockColor(1, 2, 3, 4);
    a[0] += 1;
    a[1] += 2;
    a[2] += 3;
    a[3] += 4;
    expect(a[0]).toEqual(2);
    expect(a[1]).toEqual(4);
    expect(a[2]).toEqual(6);
    expect(a[3]).toEqual(8);
});

it("[Symbol.iterator", () => {
    const a = new MockColor(1, 2, 3, 4);
    const out: number[] = [];
    for (const item of a) {
        out.push(item);
    }
    expect(out).toEqual([1, 2, 3, 4]);
});

it("clone", () => {
    const a = new MockColor(1, 2, 3, 4);
    const clone = a.clone();
    expect(clone.r).toEqual(1);
    expect(clone.g).toEqual(2);
    expect(clone.b).toEqual(3);
    expect(clone.a).toEqual(4);
});

it("multiply", () => {
    const a = new MockColor(1, 2, 3, 4);
    const b = a.multiply(3);
    expect(b.r).toEqual(3);
    expect(b.g).toEqual(6);
    expect(b.b).toEqual(9);
    expect(b.a).toEqual(12);
});

it("toHex", () => {
    const a = new MockColor(0, 0.5, 0.75, 1);
    const hex = a.toHex();
    expect(hex).toEqual("0080BFFF");
});

it("toString", () => {
    const a = new MockColor(1, 2, 3, 4);
    const s = a.toString();
    expect(s).toEqual("(R=1,G=2,B=3,A=4)");
});

it("toVector", () => {
    const a = new MockColor(1, 2, 3, 4);
    const vector = a.toVector();
    expect(vector.x).toEqual(1);
    expect(vector.y).toEqual(2);
    expect(vector.z).toEqual(3);
});

it("static interpolateTo", () => {
    const a = new MockColor(0, 0, 0, 0);
    const b = new MockColor(1, 2, 3, 4);
    let c = MockColor.interpolateTo(a, b, 1, 0.5);
    expect(c.r).toEqual(0.5);
    expect(c.g).toEqual(0.5);
    expect(c.b).toEqual(0.5);
    expect(c.a).toEqual(0.5);

    c = MockColor.interpolateTo(b, a, 1, 0.5);
    expect(c.r).toEqual(0.5);
    expect(c.g).toEqual(1.5);
    expect(c.b).toEqual(2.5);
    expect(c.a).toEqual(3.5);

    c = MockColor.interpolateTo(a, b, 1, 1.5);
    expect(c.r).toEqual(1);
    expect(c.g).toEqual(1.5);
    expect(c.b).toEqual(1.5);
    expect(c.a).toEqual(1.5);
});

it("static lerp", () => {
    const a = new MockColor(0, 0, 0, 0);
    const b = new MockColor(1, 2, 3, 4);
    const c = MockColor.lerp(a, b, 0.5);
    expect(c.r).toEqual(0.5);
    expect(c.g).toEqual(1);
    expect(c.b).toEqual(1.5);
    expect(c.a).toEqual(2);
});
