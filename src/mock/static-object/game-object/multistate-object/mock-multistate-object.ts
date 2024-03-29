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

    public readonly onStateChanged: MulticastDelegate<
        (multistateObject: this, newState: number, oldState: number) => void
    > = new MockMulticastDelegate<
        (multistateObject: this, newState: number, oldState: number) => void
    >();

    constructor(params?: MockMultistateObjectParams) {
        super(params, false);
        if (params?.numStates !== undefined) {
            this._numStates = params.numStates;
        }
        if (params?.state !== undefined) {
            this._state = params.state;
        }
        this._triggerOnCreated();
    }

    setState(state: number): void {
        this._state = state;
    }

    setRandomState(): void {
        this._state = Math.floor(Math.random() * this._numStates);
    }

    getState(): number {
        return this._state;
    }

    getNumStates(): number {
        return this._numStates;
    }
}
