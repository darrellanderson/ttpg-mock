import { MockVector } from "../../../vector/mock-vector";
import { MockDice, MockDiceParams } from "./mock-dice";

it("constructor", () => {
  const params: MockDiceParams = {
    currentFace: 1,
    faces: [
      { name: "name1", metadata: "metadata1", direction: [1, 0, 0] },
      { name: "name2", metadata: "metadata2", direction: [0, 1, 0] },
      {}
    ],
  };
  const dice = new MockDice(params);
  expect(dice.getAllFaceNames()).toEqual(["name1", "name2", ""]);
  expect(dice.getAllFaceMetadata()).toEqual(["metadata1", "metadata2", ""]);
  expect(dice.getCurrentFaceIndex()).toEqual(params.currentFace);
  expect(dice.getCurrentFaceName()).toEqual("name2");
  expect(dice.getCurrentFaceMetadata()).toEqual("metadata2");
  expect(dice.getFaceDirections()[0]).toEqual(new MockVector(1, 0, 0))
  expect(dice.getNumFaces()).toEqual(3)
});

it('constructor (defaults)', () => {
  const dice = new MockDice()
  expect(dice.getCurrentFaceIndex()).toEqual(0);

})

it('setCurrentFace', () => {
  const params: MockDiceParams = {
    currentFace: 1,
    faces: [
      { name: "name1", metadata: "metadata1" },
      { name: "name2", metadata: "metadata2" },
    ],
  };
  const dice = new MockDice(params);
  expect(dice.getCurrentFaceName()).toEqual("name2");
  dice.setCurrentFace(0)
  expect(dice.getCurrentFaceName()).toEqual("name1");
})