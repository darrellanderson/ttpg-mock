import { ObjectType } from "../../../enums";
import { MockContainer } from "./container/mock-container";
import { MockGameObject, MockGameObjectParams } from "./mock-game-object";
import { MockGameWorld } from "../../game-world/mock-game-world";
import { MockPlayer } from "../../player/mock-player";
import { MockRotator } from "../../rotator/mock-rotator";
import { MockSnapPoint } from "../../snap-point/mock-snap-point";
import { MockSwitcher } from "../../switcher/mock-switcher";
import { MockVector } from "../../vector/mock-vector";

it("constructor", () => {
  const params: MockGameObjectParams = {
    angularVelocity: new MockRotator(1, 2, 3),
    areLightsOn: false,
    centerOfMass: new MockVector(5, 6, 7),
    container: new MockContainer(),
    groupId: 7,
    isHeld: true,
    isSimulatingPhysics: false,
    isSnappingAllowed: false,
    linearVelocity: new MockVector(9, 10, 11),
    mass: 8,
    objectType: ObjectType.Ground,
    owningPlayerSlot: 9,
    snappedToPoint: new MockSnapPoint(),
    switcher: new MockSwitcher(),
  };
  const gameObject = new MockGameObject(params);
  expect(gameObject.getAngularVelocity()).toEqual(params.angularVelocity);
  expect(gameObject.areLightsOn()).toEqual(params.areLightsOn);
  expect(gameObject.getCenterOfMass()).toEqual(params.centerOfMass);
  expect(gameObject.getContainer()).toEqual(params.container);
  expect(gameObject.getGroupId()).toEqual(params.groupId);
  expect(gameObject.isHeld()).toEqual(params.isHeld);
  expect(gameObject.isSimulatingPhysics()).toEqual(params.isSimulatingPhysics);
  expect(gameObject.isSnappingAllowed()).toEqual(params.isSnappingAllowed);
  expect(gameObject.getLinearVelocity()).toEqual(params.linearVelocity);
  expect(gameObject.getMass()).toEqual(params.mass);
  expect(gameObject.getObjectType()).toEqual(params.objectType);
  expect(gameObject.getOwningPlayerSlot()).toEqual(params.owningPlayerSlot);
  expect(gameObject.getSnappedToPoint()).toEqual(params.snappedToPoint);
  expect(gameObject.getSwitcher()).toEqual(params.switcher);
});

it("angular velocity", () => {
  const input = new MockRotator(1, 2, 3);
  const obj = new MockGameObject();
  obj.setAngularVelocity(input);
  const output = obj.getAngularVelocity();
  expect(output).toEqual(input);
});

it("linear velocity", () => {
  const input = new MockVector(1, 2, 3);
  const obj = new MockGameObject();
  obj.setLinearVelocity(input);
  const output = obj.getLinearVelocity();
  expect(output).toEqual(input);
});

it("group id", () => {
  const input = 7;
  const obj = new MockGameObject();
  obj.setGroupId(input);
  const output = obj.getGroupId();
  expect(output).toEqual(input);
});

it("object type", () => {
  const input = ObjectType.NonInteractive;
  const obj = new MockGameObject();
  obj.setObjectType(input);
  const output = obj.getObjectType();
  expect(output).toEqual(input);
});

it("owning player slot", () => {
  const input = 7;
  const obj = new MockGameObject();
  obj.setOwningPlayerSlot(input);
  const output = obj.getOwningPlayerSlot();
  expect(output).toEqual(input);
});

it("snapping allowed", () => {
  const input = false;
  const obj = new MockGameObject();
  obj.setSnappingAllowed(input);
  const output = obj.isSnappingAllowed();
  expect(output).toEqual(input);
});

it("createSwitcher", () => {
  const obj1 = new MockGameObject();
  const obj2 = new MockGameObject();
  obj1.createSwitcher([obj2]);
});

it("freeze", () => {
  const obj = new MockGameObject();
  expect(obj.getObjectType()).toEqual(ObjectType.Regular);
  obj.freeze();
  expect(obj.getObjectType()).toEqual(ObjectType.Ground);
});

it("getOwningPlayer", () => {
  const slot = 7;
  const obj = new MockGameObject({ owningPlayerSlot: slot });
  const player = new MockPlayer({ slot });
  MockGameWorld.__sharedInstance._reset({ players: [player] });
  expect(obj.getOwningPlayer()).toEqual(player);
});

it("release", () => {
  const obj = new MockGameObject({ isHeld: true });
  expect(obj.isHeld()).toEqual(true);
  obj.release();
  expect(obj.isHeld()).toEqual(false);
});

it("snap", () => {
  const obj = new MockGameObject();
  obj.snap();
});

it("snapToGround", () => {
  const obj = new MockGameObject({ position: new MockVector(1, 2, 999) });
  obj.snapToGround();
  const tableHeight = MockGameWorld.__sharedInstance.getTableHeight();
  expect(obj.getPosition().z).toEqual(tableHeight);
});

it("switchLights", () => {
  const obj = new MockGameObject({ isHeld: true });
  expect(obj.areLightsOn()).toEqual(true);
  obj.switchLights(false);
  expect(obj.areLightsOn()).toEqual(false);
});

it("toggleLock", () => {
  const obj = new MockGameObject();
  expect(obj.getObjectType()).toEqual(ObjectType.Regular);
  obj.toggleLock();
  expect(obj.getObjectType()).toEqual(ObjectType.Ground);
  obj.toggleLock();
  expect(obj.getObjectType()).toEqual(ObjectType.Regular);
});
