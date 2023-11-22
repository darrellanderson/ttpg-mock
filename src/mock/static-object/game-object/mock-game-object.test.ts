import { ObjectType } from "../../../enums";
import { MockContainer } from "./container/mock-container";
import { MockGameObject, MockGameObjectParams } from "./mock-game-object";
import { MockPlayer } from "../../player/mock-player";
import { MockRotator } from "../../rotator/mock-rotator";
import { MockSnapPoint } from "../../snap-point/mock-snap-point";
import { MockSwitcher } from "../../switcher/mock-switcher";
import { MockVector } from "../../vector/mock-vector";

it("constructor", () => {
  const params: MockGameObjectParams = {
    angularVelocity: new MockRotator(1, 2, 3),
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
  expect(gameObject.getCenterOfMass()).toEqual(params.centerOfMass);
  expect(gameObject.getContainer()).toEqual(params.container);
  expect(gameObject.getGroupId()).toBe(params.groupId);
  expect(gameObject.isHeld()).toBe(params.isHeld);
  expect(gameObject.isSimulatingPhysics()).toBe(params.isSimulatingPhysics);
  expect(gameObject.isSnappingAllowed()).toBe(params.isSnappingAllowed);
  expect(gameObject.getLinearVelocity()).toEqual(params.linearVelocity);
  expect(gameObject.getMass()).toBe(params.mass);
  expect(gameObject.getObjectType()).toBe(params.objectType);
  expect(gameObject.getOwningPlayerSlot()).toBe(params.owningPlayerSlot);
  expect(gameObject.getSnappedToPoint()).toEqual(params.snappedToPoint);
  expect(gameObject.getSwitcher()).toEqual(params.switcher);
});

it("getOwningPlayer", () => {
  const player = new MockPlayer({ slot: 7 });
});
