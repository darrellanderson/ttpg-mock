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

it("destroy", () => {
  const label = new MockLabel();
  expect(label.isValid()).toBe(true);
  label.destroy();
  expect(label.isValid()).toBe(false);
});

it("color", () => {
  const input = new MockColor(0.1, 0.2, 0.3, 1);
  const label = new MockLabel();
  label.setColor(input);
  const output = label.getColor();
  expect(output).toEqual(input);
});

it("font", () => {
  const input1 = "my-font-filename";
  const input2 = "my-package-id";
  const label = new MockLabel();
  label.setFont(input1, input2);
  expect(label.getFontFileName()).toBe(input1);
  expect(label.getFontPackage()).toBe(input2);

  label.setFont("");
  expect(label.getFontFileName()).toBe("");
  expect(label.getFontPackage()).toBe("");
});

it("id", () => {
  const input = "my-id";
  const label = new MockLabel();
  label.setId(input);
  const output = label.getId();
  expect(output).toEqual(input);
});

it("playerSlot", () => {
  const input = 13;
  const label = new MockLabel();
  label.setPlayerSlot(input);
  const output = label.getPlayerSlot();
  expect(output).toEqual(input);
});

it("position", () => {
  const input = new MockVector(1, 2, 3);
  const label = new MockLabel();
  label.setPosition(input);
  const output = label.getPosition();
  expect(output).toEqual(input);
});

it("rotation", () => {
  const input = new MockRotator(1, 2, 3);
  const label = new MockLabel();
  label.setRotation(input);
  const output = label.getRotation();
  expect(output).toEqual(input);
});

it("scale", () => {
  const input = 7;
  const label = new MockLabel();
  label.setScale(input);
  const output = label.getScale();
  expect(output).toEqual(input);
});

it("text", () => {
  const input = "my-text-";
  const label = new MockLabel();
  label.setText(input);
  const output = label.getText();
  expect(output).toEqual(input);
});
