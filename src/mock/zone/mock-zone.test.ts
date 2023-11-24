import { MockColor } from "../color/mock-color";
import { MockRotator } from "../rotator/mock-rotator";
import { MockVector } from "../vector/mock-vector";
import { MockZone, MockZoneParams } from "./mock-zone";
import { ZonePermission, ZoneShape } from "@tabletop-playground/api";

it("constructor", () => {
  const params: MockZoneParams = {
    alwaysVisible: false,
    color: new MockColor(0.1, 1, 1, 1),
    id: "my-id",
    owningSlots: [1],
    position: new MockVector(1, 2, 3),
    rotation: new MockRotator(5, 6, 7),
    savedData: "my-saved-data",
    scale: new MockVector(9, 10, 11),
    shape: ZoneShape.Cylinder,
    valid: false,
    perm_cursorHidden: ZonePermission.OwnersOnly,
    perm_inserting: ZonePermission.OwnersOnly,
    perm_objectInteraction: ZonePermission.OwnersOnly,
    perm_objectVisibility: ZonePermission.OwnersOnly,
    perm_snapping: ZonePermission.OwnersOnly,
    perm_stacking: ZonePermission.OwnersOnly,
  };
  const zone = new MockZone(params);
  expect(zone.getColor()).toEqual(params.color);
  expect(zone.getCursorHidden()).toEqual(params.perm_cursorHidden);
  expect(zone.getId()).toEqual(params.id);
  expect(zone.getInserting()).toEqual(params.perm_inserting);
  expect(zone.getObjectInteraction()).toEqual(params.perm_objectInteraction);
  expect(zone.getObjectVisibility()).toEqual(params.perm_objectVisibility);
  expect(zone.getOwningSlots()).toEqual(params.owningSlots);
  expect(zone.getPosition()).toEqual(params.position);
  expect(zone.getRotation()).toEqual(params.rotation);
  expect(zone.getSavedData()).toEqual(params.savedData);
  expect(zone.getScale()).toEqual(params.scale);
  expect(zone.getShape()).toEqual(params.shape);
  expect(zone.getSnapping()).toEqual(params.perm_snapping);
  expect(zone.getStacking()).toEqual(params.perm_snapping);
});

it("alwaysVisible", () => {
  const input = false;
  const zone = new MockZone();
  zone.setAlwaysVisible(input);
  const output = zone.isAlwaysVisible();
  expect(output).toEqual(input);
});

it("color", () => {
  const input = new MockColor(0.1, 1, 1, 1);
  const zone = new MockZone();
  zone.setColor(input);
  const output = zone.getColor();
  expect(output).toEqual(input);
});

it("cursorHidden", () => {
  const input = ZonePermission.OwnersOnly;
  const zone = new MockZone();
  zone.setCursorHidden(input);
  const output = zone.getCursorHidden();
  expect(output).toEqual(input);
});

it("id", () => {
  const input = "my-id";
  const zone = new MockZone();
  zone.setId(input);
  const output = zone.getId();
  expect(output).toEqual(input);
});

it("inserting", () => {
  const input = ZonePermission.OwnersOnly;
  const zone = new MockZone();
  zone.setInserting(input);
  const output = zone.getInserting();
  expect(output).toEqual(input);
});

it("objectInteraction", () => {
  const input = ZonePermission.OwnersOnly;
  const zone = new MockZone();
  zone.setObjectInteraction(input);
  const output = zone.getObjectInteraction();
  expect(output).toEqual(input);
});

it("objectVisibility", () => {
  const input = ZonePermission.OwnersOnly;
  const zone = new MockZone();
  zone.setObjectVisibility(input);
  const output = zone.getObjectVisibility();
  expect(output).toEqual(input);
});

it("position", () => {
  const input = new MockVector(1, 2, 3);
  const zone = new MockZone();
  zone.setPosition(input);
  const output = zone.getPosition();
  expect(output).toEqual(input);
});

it("rotation", () => {
  const input = new MockRotator(1, 2, 3);
  const zone = new MockZone();
  zone.setRotation(input);
  const output = zone.getRotation();
  expect(output).toEqual(input);
});

it("savedData", () => {
  const input = "my-saved-data";
  const zone = new MockZone();
  zone.setSavedData(input);
  const output = zone.getSavedData();
  expect(output).toEqual(input);
});

it("scale", () => {
  const input = new MockVector(1, 2, 3);
  const zone = new MockZone();
  zone.setScale(input);
  const output = zone.getScale();
  expect(output).toEqual(input);
});

it("shape", () => {
  const input = ZoneShape.Cylinder;
  const zone = new MockZone();
  zone.setShape(input);
  const output = zone.getShape();
  expect(output).toEqual(input);
});

it("slotOwns", () => {
  const slot = 7;
  const zone = new MockZone();
  zone.setSlotOwns(slot, true);
  expect(zone.isSlotOwner(slot)).toEqual(true);
  expect(zone.getOwningSlots().includes(slot)).toEqual(true);
  zone.setSlotOwns(slot, false);
  expect(zone.isSlotOwner(slot)).toEqual(false);
  expect(zone.getOwningSlots().includes(slot)).toEqual(false);
});

it("snapping", () => {
  const input = ZonePermission.OwnersOnly;
  const zone = new MockZone();
  zone.setSnapping(input);
  const output = zone.getSnapping();
  expect(output).toEqual(input);
});

it("stacking", () => {
  const input = ZonePermission.OwnersOnly;
  const zone = new MockZone();
  zone.setStacking(input);
  const output = zone.getStacking();
  expect(output).toEqual(input);
});

it("destroy", () => {
  const zone = new MockZone();
  expect(zone.isValid()).toEqual(true);
  zone.destroy();
  expect(zone.isValid()).toEqual(false);
});
