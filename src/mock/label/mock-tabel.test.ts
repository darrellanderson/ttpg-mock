import { MockColor } from "../color/mock-color";
import { MockRotator } from "../rotator/mock-rotator";
import { MockVector } from "../vector/mock-vector";
import { MockLabel, MockLabelParams } from "./mock-label";

it("constructor", () => {
  const params: MockLabelParams = {
    color: new MockColor(1, 1, 1, 1),
    fontFileName: "my-font-filename",
    fontPackageId: "my-font-package-id",
    id: "my-id",
    playerSlot: 7,
    position: new MockVector(1, 2, 3),
    rotation: new MockRotator(5, 6, 7),
    scale: 0.5,
    text: "my-text",
    valid: false,
  };
  const label = new MockLabel(params);
  expect(label.getColor()).toEqual(params.color);
  expect(label.getFontFileName()).toBe(params.fontFileName);
  expect(label.getFontPackage()).toBe(params.fontPackageId);
  expect(label.getId()).toBe(params.id);
  expect(label.getPlayerSlot()).toBe(params.playerSlot);
  expect(label.getPosition()).toEqual(params.position);
  expect(label.getRotation()).toEqual(params.rotation);
  expect(label.getScale()).toBe(params.scale);
  expect(label.getText()).toEqual(params.text);
  expect(label.isValid()).toBe(params.valid);
});
