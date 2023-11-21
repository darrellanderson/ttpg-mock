import { GameObject, TraceHit, Vector } from "@tabletop-playground/api";
import { MockGameObject } from "../static-object/game-object/mock-game-object";
import { MockVector } from "../vector/mock-vector";

export class MockTraceHit implements TraceHit {
  object: GameObject = new MockGameObject();
  distance: number = 0;
  position: Vector = new MockVector(0, 0, 0);
  impactPosition: Vector = new MockVector(0, 0, 0);
  normal: Vector = new MockVector(0, 0, 0);

  clone(): TraceHit {
    throw new Error("Method not implemented.");
  }
}
