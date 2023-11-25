import { MockDice, MockDiceParams } from "./mock-dice";

it("constructor", () => {
  const params: MockDiceParams = {
    currentFace: 1,
    faces: [
      { name: "name1", metadata: "metadata1" },
      { name: "name2", metadata: "metadata2" },
    ],
  };
  const dice = new MockDice(params);
  expect(dice.getAllFaceNames()).toEqual(["name1", "name2"]);
  expect(dice.getAllFaceMetadata()).toEqual(["metadata1", "metadata2"]);
  expect(dice.getCurrentFaceIndex()).toEqual(params.currentFace);
  expect(dice.getCurrentFaceName()).toEqual("name2");
  expect(dice.getCurrentFaceMetadata()).toEqual("metadata2");
});
