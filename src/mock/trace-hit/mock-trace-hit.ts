import { GameObject, TraceHit, Vector } from "@tabletop-playground/api";
import { MockGameObject } from "../static-object/game-object/mock-game-object";
import { MockVector } from "../vector/mock-vector";

export type MockTraceHitParams = {
  object: GameObject;
  distance: number;
  position: Vector;
  impactPosition: Vector;
  normal: Vector;
};

export class MockTraceHit implements TraceHit {
  object: GameObject = new MockGameObject();
  distance: number = 0;
  position: Vector = new MockVector(0, 0, 0);
  impactPosition: Vector = new MockVector(0, 0, 0);
  normal: Vector = new MockVector(0, 0, 0);

  constructor(params?: MockTraceHitParams) {
    if (params?.object) {
      this.object = params.object;
    }
    if (params?.distance !== undefined) {
      this.distance = params.distance;
    }
    if (params?.position) {
      this.position = params.position;
    }
    if (params?.impactPosition) {
      this.impactPosition = params.impactPosition;
    }
    if (params?.normal) {
      this.normal = params.normal;
    }
  }

  clone(): TraceHit {
    const clone = new TraceHit();
    clone.object = this.object;
    clone.distance = this.distance;
    clone.position = this.position;
    clone.impactPosition = this.impactPosition;
    clone.normal = this.normal;
    return clone;
  }
}
