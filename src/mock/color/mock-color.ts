import { Color, Vector } from "@tabletop-playground/api";
import { MockVector } from "../vector/mock-vector";

export class MockColor implements Color {
    static _from(color: Color | [r: number, g: number, b: number, a: number]) {
        if (color instanceof MockColor) {
            return color.clone();
        }
        return new MockColor(color[0], color[1], color[2], color[3]);
    }

    r: number;
    g: number;
    b: number;
    a: number;

    get [0](): number {
        return this.r;
    }
    get [1](): number {
        return this.g;
    }
    get [2](): number {
        return this.b;
    }
    get [3](): number {
        return this.a;
    }
    set [0](value: number) {
        this.r = value;
    }
    set [1](value: number) {
        this.g = value;
    }
    set [2](value: number) {
        this.b = value;
    }
    set [3](value: number) {
        this.a = value;
    }

    constructor(r: number, g: number, b: number, a?: number) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = typeof a === "number" ? a : 1;
    }

    [Symbol.iterator](): Iterator<number> {
        let index = 0;
        return {
            next: (): IteratorResult<number> => {
                const done = index >= 4;
                const value = [this.r, this.g, this.b, this.a][index];
                index += 1;
                return { done, value };
            },
        };
    }

    clone(): Color {
        return new MockColor(this.r, this.g, this.b, this.a);
    }

    multiply(f: number): Color {
        return new MockColor(this.r * f, this.g * f, this.b * f, this.a * f);
    }

    toHex(): string {
        const f2h = (f: number) => {
            return Math.round(f * 255)
                .toString(16)
                .toUpperCase()
                .padStart(2, "0");
        };
        const r = f2h(this.r);
        const g = f2h(this.g);
        const b = f2h(this.b);
        const a = f2h(this.a);
        return `${r}${g}${b}${a}`;
    }

    toString(): string {
        return `(R=${this.r},G=${this.g},B=${this.b},A=${this.a})`;
    }

    toVector(): Vector {
        return new MockVector(this.r, this.g, this.b);
    }

    static interpolateTo(
        current: Color | [r: number, g: number, b: number, a: number],
        target: Color | [r: number, g: number, b: number, a: number],
        deltaTime: number,
        interpSpeed: number
    ): Color {
        const a = MockColor._from(current);
        const b = MockColor._from(target);
        const d = {
            r: b.r - a.r,
            g: b.g - a.g,
            b: b.b - a.b,
            a: b.a - a.a,
        };
        const cap = deltaTime * interpSpeed;
        const result = b.clone();
        if (Math.abs(d.r) > cap) {
            result.r = a.r + (d.r > 0 ? 1 : -1) * cap;
        }
        if (Math.abs(d.g) > cap) {
            result.g = a.g + (d.g > 0 ? 1 : -1) * cap;
        }
        if (Math.abs(d.b) > cap) {
            result.b = a.b + (d.b > 0 ? 1 : -1) * cap;
        }
        if (Math.abs(d.a) > cap) {
            result.a = a.a + (d.a > 0 ? 1 : -1) * cap;
        }
        return result;
    }

    static lerp(
        a: Color | [r: number, g: number, b: number, a: number],
        b: Color | [r: number, g: number, b: number, a: number],
        alpha: number
    ): Color {
        a = MockColor._from(a);
        b = MockColor._from(b);
        const d = {
            r: b.r - a.r,
            g: b.g - a.g,
            b: b.b - a.b,
            a: b.a - a.a,
        };
        return new MockColor(
            a.r + d.r * alpha,
            a.g + d.g * alpha,
            a.b + d.b * alpha,
            a.a + d.a * alpha
        );
    }
}
