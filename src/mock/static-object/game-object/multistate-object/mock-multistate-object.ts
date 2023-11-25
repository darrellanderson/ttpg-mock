import { MulticastDelegate, MultistateObject } from "@tabletop-playground/api";
import { MockGameObject, MockGameObjectParams } from "../mock-game-object";
import { MockMulticastDelegate } from "../../../multicast-delegate/mock-multicast-delegate";

export type MockMultistateObjectParams = MockGameObjectParams & {
  numStates?: number;
  state?: number;
};

export class MockMultistateObject
  extends MockGameObject
  implements MultistateObject
{
  private _numStates: number = 0;
  private _state: number = 0;

  onStateChanged: MulticastDelegate<
    (multistateObject: this, newState: number, oldState: number) => void
  > = new MockMulticastDelegate<
    (multistateObject: this, newState: number, oldState: number) => void
  >();

  constructor(params?: MockMultistateObjectParams) {
    super(params);
    if (params?.numStates !== undefined) {
      this._numStates = params.numStates;
    }
    if (params?.state !== undefined) {
      this._state = params.state;
    }
  }

  setState(state: number): void {
    this._state = state;
  }
  setRandomState(): void {
    this._state = 0;
  }
  getState(): number {
    return this._state;
  }
  getNumStates(): number {
    return this._numStates;
  }
}
