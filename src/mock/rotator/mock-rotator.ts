import { Rotator, Vector } from "@tabletop-playground/api";
import { MockVector } from "../vector/mock-vector";
import { Euler, EulerOrder, Matrix4 } from "three";

export class MockRotator implements Rotator {
    static _from(
        b: Rotator | [pitch: number, yaw: number, roll: number]
    ): Rotator {
        if (b instanceof MockRotator) {
            return b.clone();
        }
        return new MockRotator(b[0], b[1], b[2]);
    }

    // Use "three.js" for transform math.
    static _THREE_ORDER: EulerOrder = "ZYX";
    static _toThreeEuler(rot: Rotator): Euler {
        const s = Math.PI / 180;
        //const x = rot.roll * s;
        const x = -rot.roll * s;
        const y = -rot.pitch * s;
        const z = rot.yaw * s;
        return new Euler(x, y, z, MockRotator._THREE_ORDER);
    }
    static _fromThreeEuler(euler: Euler): Rotator {
        const s = 180 / Math.PI;
        const pitch = -euler.y * s;
        const yaw = euler.z * s;
        const roll = -euler.x * s;
        return new MockRotator(pitch, yaw, roll);
    }
    static _toThreeMatrix(rot: Rotator): Matrix4 {
        const euler = MockRotator._toThreeEuler(rot);
        return new Matrix4().makeRotationFromEuler(euler);
    }
    static _fromThreeMatrix(matrix: Matrix4): Rotator {
        const euler = new Euler().setFromRotationMatrix(
            matrix,
            MockRotator._THREE_ORDER
        );
        return MockRotator._fromThreeEuler(euler);
    }

    pitch: number;
    yaw: number;
    roll: number;

    get [0](): number {
        return this.pitch;
    }
    get [1](): number {
        return this.yaw;
    }
    get [2](): number {
        return this.roll;
    }
    set [0](value: number) {
        this.pitch = value;
    }
    set [1](value: number) {
        this.yaw = value;
    }
    set [2](value: number) {
        this.roll = value;
    }

    [Symbol.iterator](): Iterator<number, any, undefined> {
        let index = 0;
        return {
            next: (): IteratorResult<number | any> => {
                const done = index >= 3;
                const value = [this.pitch, this.yaw, this.roll][index];
                index += 1;
                return { done, value };
            },
        };
    }

    constructor(pitch: number, yaw: number, roll: number) {
        this.pitch = pitch;
        this.yaw = yaw;
        this.roll = roll;
    }

    clone(): Rotator {
        return new MockRotator(this.pitch, this.yaw, this.roll);
    }

    compose(b: Rotator | [pitch: number, yaw: number, roll: number]): Rotator {
        b = MockRotator._from(b);

        // Use THREE's Vector3.
        const aMatrix = MockRotator._toThreeMatrix(this);
        const bMatrix = MockRotator._toThreeMatrix(b);
        const cMatrix = aMatrix.premultiply(bMatrix);

        return MockRotator._fromThreeMatrix(cMatrix);
    }

    equals(
        b: Rotator | [pitch: number, yaw: number, roll: number],
        errorTolerance: number
    ): boolean {
        b = MockRotator._from(b);
        const dpitch = Math.abs(this.pitch - b.pitch);
        const dyaw = Math.abs(this.yaw - b.yaw);
        const droll = Math.abs(this.roll - b.roll);
        return (
            dpitch <= errorTolerance &&
            dyaw <= errorTolerance &&
            droll <= errorTolerance
        );
    }

    getForwardVector(): Vector {
        return this.rotateVector([1, 0, 0]);
    }

    getInverse(): Rotator {
        const matrix = MockRotator._toThreeMatrix(this);
        matrix.invert();
        return MockRotator._fromThreeMatrix(matrix);
    }

    getRightVector(): Vector {
        return this.rotateVector([0, 1, 0]);
    }

    getUpVector(): Vector {
        return this.rotateVector([0, 0, 1]);
    }

    multiply(b: number): Rotator {
        return new MockRotator(this.pitch * b, this.yaw * b, this.roll * b);
    }

    negate(): Rotator {
        return new MockRotator(-this.pitch, -this.yaw, -this.roll);
    }

    rotateVector(v: Vector | [x: number, y: number, z: number]): Vector {
        v = MockVector._from(v);

        // Use THREE's Vector3.
        const e3 = MockRotator._toThreeEuler(this);
        const v3 = MockVector._toThreeVector(v);
        v3.applyEuler(e3);

        return MockVector._fromThreeVector(v3);
    }

    unrotateVector(v: Vector | [x: number, y: number, z: number]): Vector {
        return this.getInverse().rotateVector(v);
    }

    toString(): string {
        const p = Math.round(this.pitch * 1000) / 1000;
        const y = Math.round(this.yaw * 1000) / 1000;
        const r = Math.round(this.roll * 1000) / 1000;
        return `(P=${p},Y=${y},R=${r})`;
    }

    toVector(): Vector {
        return new MockVector(this.pitch, this.yaw, this.roll);
    }

    // --------------------------------

    static fromAxisAngle(
        axis: Vector | [x: number, y: number, z: number],
        angle: number
    ): Rotator {
        axis = MockVector._from(axis);

        const axis3 = MockVector._toThreeVector(axis).normalize();
        angle *= Math.PI / 180;
        const matrix = new Matrix4().makeRotationAxis(axis3, angle);
        return MockRotator._fromThreeMatrix(matrix);
    }

    static interpolateTo(
        current: Rotator | [pitch: number, yaw: number, roll: number],
        target: Rotator | [pitch: number, yaw: number, roll: number],
        deltaTime: number,
        interpSpeed: number
    ): Rotator {
        current = MockRotator._from(current);
        target = MockRotator._from(target);
        // Interpolate in vector space, then back.
        const a = current.toVector();
        const b = target.toVector();
        const r = MockVector.interpolateTo(a, b, deltaTime, interpSpeed);
        return r.toRotator();
    }

    static interpolateToConstant(
        current: Rotator | [pitch: number, yaw: number, roll: number],
        target: Rotator | [pitch: number, yaw: number, roll: number],
        deltaTime: number,
        interpSpeed: number
    ): Rotator {
        // How is this different?
        return MockRotator.interpolateTo(
            current,
            target,
            deltaTime,
            interpSpeed
        );
    }

    static lerp(
        a: Rotator | [pitch: number, yaw: number, roll: number],
        b: Rotator | [pitch: number, yaw: number, roll: number],
        alpha: number,
        bShortestPath: boolean
    ): Rotator {
        a = MockRotator._from(a);
        b = MockRotator._from(b);
        const d = {
            pitch: b.pitch - a.pitch,
            yaw: b.yaw - a.yaw,
            roll: b.roll - a.roll,
        };
        return new MockRotator(
            a.pitch + d.pitch * alpha,
            a.yaw + d.yaw * alpha,
            a.roll + d.roll * alpha
        );
    }
}
