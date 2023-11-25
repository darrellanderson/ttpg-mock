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
