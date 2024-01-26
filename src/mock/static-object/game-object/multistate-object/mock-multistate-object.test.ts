import {
  MockMultistateObject,
  MockMultistateObjectParams,
} from "./mock-multistate-object";

it("constructor", () => {
  const params: MockMultistateObjectParams = {
    numStates: 6,
    state: 3,
  };
  const multistateObject = new MockMultistateObject(params);
  expect(multistateObject.getNumStates()).toBe(params.numStates);
  expect(multistateObject.getState()).toBe(params.state);
});

it('setState', () => {
  const multistateObject = new MockMultistateObject()
  expect(multistateObject.getState()).toEqual(0)
  multistateObject.setState(1)
  expect(multistateObject.getState()).toEqual(1)
})

it('setRandomState', () => {
  const multistateObject = new MockMultistateObject()
  multistateObject.setRandomState()
  expect(multistateObject.getState()).toEqual(0)
})

