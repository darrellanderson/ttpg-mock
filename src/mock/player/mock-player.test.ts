import { MockCard } from "../static-object/game-object/card/mock-card";
import { MockCardHolder } from "../static-object/game-object/card-holder/mock-card-holder";
import { MockColor } from "../color/mock-color";
import { MockGameObject } from "../static-object/game-object/mock-game-object";
import { MockPlayer, MockPlayerParams } from "./mock-player";
import { MockVector } from "../vector/mock-vector";
import { MockRotator } from "../rotator/mock-rotator";
import { GameObject } from "@tabletop-playground/api";

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
  expect(player.isBlindfolded()).toBe(params.isBlindfolded);
  expect(player.isGameMaster()).toBe(params.isGameMaster);
  expect(player.isHolding()).toBe(true);
  expect(player.isHoldingObject(heldObject)).toBe(true);
  expect(player.isHost()).toBe(params.isHost);
  expect(player.isScriptKeyDown(1)).toBe(true);
  expect(player.isSpectator()).toBe(params.isSpectator);
  expect(player.isUsingVR()).toBe(params.isUsingVR);
  expect(player.getName()).toBe(params.name);
  expect(player.getPlayerColor()).toEqual(params.playerColor);
  expect(player.getPosition()).toEqual(params.position);
  expect(player.getPrimaryColor()).toEqual(params.primaryColor);
  expect(player.getRotation()).toEqual(params.rotation);
  expect(player.getSecondaryColor()).toEqual(params.secondaryColor);
  expect(player.getSelectedObjects()).toEqual(params.selectedObjects);
  expect(player.getSlot()).toBe(params.slot);
  expect(player.getTeam()).toBe(params.team);
});
