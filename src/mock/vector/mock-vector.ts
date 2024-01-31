import { Color, Rotator, Vector } from "@tabletop-playground/api";
import { MockRotator } from "../rotator/mock-rotator";
import { MockColor } from "../color/mock-color";

import { Vector3, Line3, Matrix4 } from "three";

export class MockVector implements Vector {
    static _from(b: Vector | [x: number, y: number, z: number]): Vector {
        if (b instanceof MockVector) {
            return b.clone();
        }
        return new MockVector(b[0], b[1], b[2]);
    }

    // Use "three.js" for transform math.
    // THREE "camera looks down local, negative Z axis"
    // THREE default up is "0,1,0"
    static _toThreeVector(vec: Vector): Vector3 {
        return new Vector3(vec.x, vec.y, vec.z);
    }
    static _fromThreeVector(vec3: Vector3): Vector {
        return new MockVector(vec3.x, vec3.y, vec3.z);
    }

    x: number;
    y: number;
    z: number;

    get [0](): number {
        return this.x;
    }
    get [1](): number {
        return this.y;
    }
    get [2](): number {
        return this.z;
    }
    set [0](value: number) {
        this.x = value;
    }
    set [1](value: number) {
        this.y = value;
    }
    set [2](value: number) {
        this.z = value;
    }

    [Symbol.iterator](): Iterator<number, any, undefined> {
        let index = 0;
        return {
            next: (): IteratorResult<number | any> => {
                const done = index >= 3;
                const value = [this.x, this.y, this.z][index];
                index += 1;
                return { done, value };
            },
        };
    }

    constructor(x: number, y: number, z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    add(b: Vector | [x: number, y: number, z: number]): Vector {
        b = MockVector._from(b);
        return new MockVector(this.x + b.x, this.y + b.y, this.z + b.z);
    }

    clampVectorMagnitude(min: number, max: number): Vector {
        const magnitude = this.magnitude();
        if (magnitude === 0) {
            return new MockVector(0, 0, 0); // TTPG returns (0,0,0)
        }

        let scale = 1;
        if (magnitude < min) {
            scale = min / magnitude;
        } else if (magnitude > max) {
            scale = max / magnitude;
        }
        return new MockVector(this.x * scale, this.y * scale, this.z * scale);
    }

    clone(): Vector {
        return new MockVector(this.x, this.y, this.z);
    }

    distance(b: Vector | [x: number, y: number, z: number]): number {
        b = MockVector._from(b);
        return this.subtract(b).magnitude();
    }

    divide(b: number): Vector {
        if (b === 0) {
            return new MockVector(0, 0, 0); // TTPG returns (0,0,0)
        }
        return new MockVector(this.x / b, this.y / b, this.z / b);
    }

    dot(b: Vector | [x: number, y: number, z: number]): number {
        b = MockVector._from(b);
        return this.x * b.x + this.y * b.y + this.z * b.z;
    }

    equals(
        b: Vector | [x: number, y: number, z: number],
        errorTolerance: number
    ): boolean {
        b = MockVector._from(b);
        const dx = Math.abs(this.x - b.x);
        const dy = Math.abs(this.y - b.y);
        const dz = Math.abs(this.z - b.z);
        return (
            dx <= errorTolerance && dy <= errorTolerance && dz <= errorTolerance
        );
    }

    findClosestPointOnLine(
        lineOrigin: Vector | [x: number, y: number, z: number],
        lineDirection: Vector | [x: number, y: number, z: number]
    ): Vector {
        const a = MockVector._from(lineOrigin);
        const b = MockVector._from(lineDirection).add(a);

        // Use THREE's Vector3.
        const this3 = MockVector._toThreeVector(this);
        const a3 = MockVector._toThreeVector(a);
        const b3 = MockVector._toThreeVector(b);
        const line3 = new Line3(a3, b3);
        const clampToLine = false; // clamp to segment
        const p = line3.closestPointToPoint(this3, clampToLine, new Vector3());

        return MockVector._fromThreeVector(p);
    }

    findClosestPointOnSegment(
        segmentStart: Vector | [x: number, y: number, z: number],
        segmentEnd: Vector | [x: number, y: number, z: number]
    ): Vector {
        const a = MockVector._from(segmentStart);
        const b = MockVector._from(segmentEnd);

        // Use THREE's Vector3.
        const this3 = MockVector._toThreeVector(this);
        const a3 = MockVector._toThreeVector(a);
        const b3 = MockVector._toThreeVector(b);
        const line3 = new Line3(a3, b3);
        const clampToLine = true; // clamp to segment
        const p = line3.closestPointToPoint(this3, clampToLine, new Vector3());

        return MockVector._fromThreeVector(p);
    }

    findLookAtRotation(
        target: Vector | [x: number, y: number, z: number]
    ): Rotator {
        target = MockVector._from(target);

        // Use THREE's Vector3.
        const this3 = MockVector._toThreeVector(this);
        const targ3 = MockVector._toThreeVector(target);
        const up3 = MockVector._toThreeVector(new MockVector(0, 0, 1));
        const matrix = new Matrix4().lookAt(this3, targ3, up3);
        return MockRotator._fromThreeMatrix(matrix);
    }

    getDistanceToLine(
        lineOrigin: Vector | [x: number, y: number, z: number],
        lineDirection: Vector | [x: number, y: number, z: number]
    ): number {
        const p = this.findClosestPointOnLine(lineOrigin, lineDirection);
        return this.distance(p);
    }

    getDistanceToSegment(
        segmentStart: Vector | [x: number, y: number, z: number],
        segmentEnd: Vector | [x: number, y: number, z: number]
    ): number {
        const p = this.findClosestPointOnSegment(segmentStart, segmentEnd);
        return this.distance(p);
    }

    getMaxElement(): number {
        return Math.max(this.x, this.y, this.z);
    }

    getMinElement(): number {
        return Math.min(this.x, this.y, this.z);
    }

    getReflectionVector(
        surfaceNormal: Vector | [x: number, y: number, z: number]
    ): Vector {
        surfaceNormal = MockVector._from(surfaceNormal);

        // Use THREE's Vector3.
        const this3 = MockVector._toThreeVector(this);
        const norm3 = MockVector._toThreeVector(surfaceNormal).normalize();
        const refl3 = this3.reflect(norm3);
        return MockVector._fromThreeVector(refl3);
    }

    isInBox(
        boxOrigin: Vector | [x: number, y: number, z: number],
        boxExtent: Vector | [x: number, y: number, z: number]
    ): boolean {
        boxOrigin = MockVector._from(boxOrigin);
        boxExtent = MockVector._from(boxExtent);
        const dx = Math.abs(this.x - boxOrigin.x);
        const dy = Math.abs(this.y - boxOrigin.y);
        const dz = Math.abs(this.z - boxOrigin.z);
        return dx <= boxExtent.x && dy <= boxExtent.y && dz <= boxExtent.z;
    }

    magnitude(): number {
        return Math.sqrt(this.magnitudeSquared());
    }

    magnitudeSquared(): number {
        return this.x * this.x + this.y * this.y + this.z * this.z;
    }

    multiply(f: number): Vector {
        return new MockVector(this.x * f, this.y * f, this.z * f);
    }

    negate(): Vector {
        return new MockVector(-this.x, -this.y, -this.z);
    }

    rotateAngleAxis(
        angleDeg: number,
        axis: Vector | [x: number, y: number, z: number]
    ): Vector {
        axis = MockVector._from(axis);

        // Use THREE's Vector3.
        const this3 = MockVector._toThreeVector(this);
        const axis3 = MockVector._toThreeVector(axis).normalize();
        const angleRad = (angleDeg * Math.PI) / 180;
        this3.applyAxisAngle(axis3, angleRad);
        return MockVector._fromThreeVector(this3);
    }

    subtract(b: Vector | [x: number, y: number, z: number]): Vector {
        b = MockVector._from(b);
        return new MockVector(this.x - b.x, this.y - b.y, this.z - b.z);
    }

    toColor(): Color {
        return new MockColor(this.x, this.y, this.z);
    }

    toRotator(): Rotator {
        return new MockRotator(this.x, this.y, this.z);
    }

    toString(): string {
        const x = Math.round(this.x * 1000) / 1000;
        const y = Math.round(this.y * 1000) / 1000;
        const z = Math.round(this.z * 1000) / 1000;
        return `(X=${x},Y=${y},Z=${z})`;
    }

    unit(): Vector {
        const magnitude = this.magnitude();
        return new MockVector(
            this.x / magnitude,
            this.y / magnitude,
            this.z / magnitude
        );
    }

    // --------------------------------

    static getVectorArrayAverage(vectors: Vector[]): Vector {
        let total = new MockVector(0, 0, 0);
        for (const vector of vectors) {
            total = total.add(vector);
        }
        return total.divide(Math.max(1, vectors.length));
    }

    static interpolateTo(
        current: Vector | [x: number, y: number, z: number],
        target: Vector | [x: number, y: number, z: number],
        deltaTime: number,
        interpSpeed: number
    ): Vector {
        current = MockVector._from(current);
        target = MockVector._from(target);
        const moveDistance = deltaTime * interpSpeed;
        const remainingDistance = current.distance(target);
        const alpha = Math.min(moveDistance / remainingDistance, 1);
        return MockVector.lerp(current, target, alpha);
    }

    static interpolateToConstant(
        current: Vector | [x: number, y: number, z: number],
        target: Vector | [x: number, y: number, z: number],
        deltaTime: number,
        interpSpeed: number
    ): Vector {
        // How is this different?
        return MockVector.interpolateTo(
            current,
            target,
            deltaTime,
            interpSpeed
        );
    }

    static lerp(
        a: Vector | [x: number, y: number, z: number],
        b: Vector | [x: number, y: number, z: number],
        alpha: number
    ): Vector {
        a = MockVector._from(a);
        b = MockVector._from(b);
        const d = b.subtract(a);
        return new MockVector(
            a.x + d.x * alpha,
            a.y + d.y * alpha,
            a.z + d.z * alpha
        );
    }

    static randomPointInBoundingBox(
        origin: Vector | [x: number, y: number, z: number],
        boxExtent: Vector | [x: number, y: number, z: number]
    ): Vector {
        origin = MockVector._from(origin);
        boxExtent = MockVector._from(boxExtent);
        const unit = MockVector.randomUnitVector();
        return new MockVector(
            origin.x + unit.x * boxExtent.x,
            origin.y + unit.y * boxExtent.y,
            origin.z + unit.z * boxExtent.z
        );
    }

    static randomUnitVector(): Vector {
        const result = new MockVector(
            Math.random() - 0.5,
            Math.random() - 0.5,
            Math.random() - 0.5
        ).clampVectorMagnitude(1, 1);
        if (result.magnitudeSquared() === 0) {
            result.x = 1; // clamp fails for very unlikely zero vector
        }
        return result;
    }
}
