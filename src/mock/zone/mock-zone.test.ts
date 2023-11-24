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
