import { Dice, Player, Vector } from "@tabletop-playground/api";
import { MockGameObject, MockGameObjectParams } from "../mock-game-object";
import { MockVector } from "../../../vector/mock-vector";

export type MockDiceFace = {
  name?: string;
  metadata?: string;
  direction?: Vector | [x: number, y: number, z: number];
};
export type MockDiceParams = MockGameObjectParams & {
  currentFace?: number;
  faces?: MockDiceFace[];
};

export class MockDice extends MockGameObject implements Dice {
  private _currentFace: number = 0;
  private _faceNames: string[] = [];
  private _faceMetadata: string[] = [];
  private _faceDirections: Vector[] = [];

  constructor(params?: MockDiceParams) {
    super(params);
    this._currentFace = params?.currentFace ?? 0;
    if (params?.faces) {
      for (const entry of params.faces) {
        this._faceNames.push(entry.name ?? "");
        this._faceMetadata.push(entry.metadata ?? "");
        this._faceDirections.push(
          entry.direction
            ? MockVector._from(entry.direction)
            : new MockVector(0, 0, 0)
        );
      }
    }
  }

  setCurrentFace(index: number): void {
    this._currentFace = index;
  }

  roll(player?: Player | undefined): void { }

  getNumFaces(): number {
    return this._faceNames.length;
  }

  getFaceDirections(): Vector[] {
    return this._faceDirections.map((x) => x.clone());
  }

  getCurrentFaceName(): string {
    return this._faceNames[this._currentFace];
  }

  getCurrentFaceMetadata(): string {
    return this._faceMetadata[this._currentFace];
  }

  getCurrentFaceIndex(): number {
    return this._currentFace;
  }

  getAllFaceNames(): string[] {
    return [...this._faceNames];
  }

  getAllFaceMetadata(): string[] {
    return [...this._faceMetadata];
  }
}
