import { GameObject, Player } from "@tabletop-playground/api";
import { MockCard } from "../static-object/game-object/card/mock-card";
import { MockCardHolder } from "../static-object/game-object/card-holder/mock-card-holder";
import { MockColor } from "../color/mock-color";
import { MockGameObject } from "../static-object/game-object/mock-game-object";
import { MockGameWorld } from "../game-world/mock-game-world";
import { MockPlayer, MockPlayerParams } from "./mock-player";
import { MockVector } from "../vector/mock-vector";
import { MockRotator } from "../rotator/mock-rotator";
import { SharedObjects } from "../../shared-objects";
import { MockGlobalScriptingEvents } from "../global-scripting-events/mock-global-scripting-events";

it("constructor", () => {
  const heldObject: GameObject = new MockGameObject();
  const params: MockPlayerParams = {
    cursorPosition: new MockVector(1, 2, 3),
    cursorVelocity: new MockVector(5, 6, 7),
    handCards: [new MockCard()],
    handHolder: new MockCardHolder(),
    heldObjects: [heldObject],
    highlightedObject: new MockGameObject(),
    isBlindfolded: true,
    isGameMaster: true,
    isHost: true,
    isSpectator: true,
    isUsingVR: true,
    isValid: false,
    name: "my-name",
    playerColor: new MockColor(0.1, 1, 1, 1),
    position: new MockVector(9, 10, 11),
    primaryColor: new MockColor(0.2, 1, 1, 1),
    rotation: new MockRotator(13, 14, 15),
    secondaryColor: new MockColor(0.3, 1, 1, 1),
    selectedObjects: [new MockGameObject()],
    slot: 7,
    team: 8,
    scriptKeysDown: [1, 2],
  };
  const player = new MockPlayer(params);
  expect(player.getCursorPosition()).toEqual(params.cursorPosition);
  expect(player.getCursorVelocity()).toEqual(params.cursorVelocity);
  expect(player.getHandCards()).toEqual(params.handCards);
  expect(player.getHandHolder()).toEqual(params.handHolder);
  expect(player.getHeldObjects()).toEqual(params.heldObjects);
  expect(player.getHighlightedObject()).toEqual(params.highlightedObject);
  expect(player.isBlindfolded()).toEqual(params.isBlindfolded);
  expect(player.isGameMaster()).toEqual(params.isGameMaster);
  expect(player.isHolding()).toEqual(true);
  expect(player.isHoldingObject(heldObject)).toEqual(true);
  expect(player.isHost()).toEqual(params.isHost);
  expect(player.isScriptKeyDown(1)).toEqual(true);
  expect(player.isSpectator()).toEqual(params.isSpectator);
  expect(player.isUsingVR()).toEqual(params.isUsingVR);
  expect(player.isValid()).toEqual(params.isValid);
  expect(player.getName()).toEqual(params.name);
  expect(player.getPlayerColor()).toEqual(params.playerColor);
  expect(player.getPosition()).toEqual(params.position);
  expect(player.getPrimaryColor()).toEqual(params.primaryColor);
  expect(player.getRotation()).toEqual(params.rotation);
  expect(player.getSecondaryColor()).toEqual(params.secondaryColor);
  expect(player.getSelectedObjects()).toEqual(params.selectedObjects);
  expect(player.getSlot()).toEqual(params.slot);
  expect(player.getTeam()).toEqual(params.team);
});

it("blindfolded", () => {
  const input = true;
  const player = new MockPlayer();
  player.setBlindfolded(input);
  const output = player.isBlindfolded();
  expect(output).toEqual(input);
});

it("drawingColor", () => {
  const input = new MockColor(0.1, 1, 1, 1);
  const player = new MockPlayer();
  player.setDrawingColor(input);
});

it("primaryColor", () => {
  const input = new MockColor(0.1, 1, 1, 1);
  const player = new MockPlayer();
  player.setPrimaryColor(input);
  const output = player.getPrimaryColor();
  expect(output).toEqual(input);
});

it("secondaryColor", () => {
  const input = new MockColor(0.1, 1, 1, 1);
  const player = new MockPlayer();
  player.setSecondaryColor(input);
  const output = player.getSecondaryColor();
  expect(output).toEqual(input);
});

it("handHolder", () => {
  const input = new MockCardHolder();
  const player = new MockPlayer();
  player.setHandHolder(input);
  const output = player.getHandHolder();
  expect(output).toEqual(input);
});

it("position and rotation", () => {
  const pos = new MockVector(1, 2, 3);
  const rot = new MockRotator(5, 6, 7);
  const player = new MockPlayer();
  player.setPositionAndRotation(pos, rot);
  expect(player.getPosition()).toEqual(pos);
  expect(player.getRotation()).toEqual(rot);
});

it("selected objects", () => {
  const input = [new MockGameObject()];
  const player = new MockPlayer();
  player.setSelectedObjects(input);
  const output = player.getSelectedObjects();
  expect(output).toEqual(input);
});

it("slot", () => {
  const input = 13;
  const player = new MockPlayer();
  player.switchSlot(input);
  const output = player.getSlot();
  expect(output).toEqual(input);
});

it("getOwnedObjects", () => {
  const slot = 7;
  const player = new MockPlayer({ slot });
  const obj = new MockGameObject({ owningPlayerSlot: slot });
  MockGameWorld.__sharedInstance._reset({ gameObjects: [obj] });
  const output = player.getOwnedObjects();
  expect(output).toEqual([obj]);
});

it('event onPlayerJoined', () => {
  expect(MockGlobalScriptingEvents).toBeDefined()
  let count = 0
  SharedObjects.globalScriptingEvents.onPlayerJoined.add((player: Player) => { count++ })
  new MockPlayer()
  expect(count).toEqual(1)
})

it('event onPlayerSwitchedSlots', () => {
  expect(MockGlobalScriptingEvents).toBeDefined()
  let count = 0
  SharedObjects.globalScriptingEvents.onPlayerSwitchedSlots.add((player: Player) => { count++ })
  new MockPlayer().switchSlot(7)
  expect(count).toEqual(1)
})