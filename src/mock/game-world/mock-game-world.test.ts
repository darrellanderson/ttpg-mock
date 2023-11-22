import { MockDrawingLine } from "../drawing-line/mock-drawing-line";
import { MockGameObject } from "../static-object/game-object/mock-game-object";
import { MockGameWorld, MockGameWorldParams } from "./mock-game-world";
import { MockLabel } from "../label/mock-label";
import { MockPackage } from "../package/mock-package";
import { MockPlayer } from "../player/mock-player";
import { MockScreenUIElement } from "../screen-ui-element/mock-screen-ui-element";
import { MockStaticObject } from "../static-object/mock-static-object";
import { MockUIElement } from "../ui-element/mock-ui-element";
import { MockVector } from "../vector/mock-vector";
import { MockZone } from "../zone/mock-zone";

it("constructor", () => {
  new MockGameWorld();

  const params: MockGameWorldParams = {
    backgroundFilename: "my-background-filename",
    backgroundPackageId: "my-background-id",
    currentTurn: 7,
    drawingLines: [new MockDrawingLine()],
    gameObjects: [new MockGameObject()],
    gravityMultiplier: 13,
    labels: [new MockLabel()],
    packages: [new MockPackage()],
    players: [new MockPlayer()],
    savedData: { "my-key": "my-value" },
    savedDataAnonymous: "my-anon-value",
    showDiceRollMessages: false,
    slotTeam: { 1: 2 },
    screenUIs: [new MockScreenUIElement()],
    tableHeight: 17,
    tables: [new MockStaticObject()],
    tags: ["my-tag1", "my-tag2"],
    uis: [new MockUIElement()],
    zones: [new MockZone()],
  };
  const gameWorld = new MockGameWorld(params);
  expect(gameWorld.getBackgroundFilename()).toBe(params.backgroundFilename);
  expect(gameWorld.getBackgroundPackageId()).toBe(params.backgroundPackageId);
  expect(gameWorld.getCurrentTurn()).toBe(params.currentTurn);
  expect(gameWorld.getDrawingLines()).toEqual(params.drawingLines);
  expect(gameWorld.getAllObjects()).toEqual(params.gameObjects);
  expect(gameWorld.getGravityMultiplier()).toBe(params.gravityMultiplier);
  expect(gameWorld.getAllLabels()).toEqual(params.labels);
  expect(gameWorld.getAllowedPackages()).toEqual(params.packages);
  expect(gameWorld.getAllPlayers()).toEqual(params.players);
  expect(gameWorld.getSavedData("my-key")).toBe("my-value");
  expect(gameWorld.getSavedData()).toBe("my-anon-value");
  expect(gameWorld.getShowDiceRollMessages()).toBe(params.showDiceRollMessages);
  expect(gameWorld.getSlotTeam(1)).toBe(2);
  expect(gameWorld.getScreenUIs()).toEqual(params.screenUIs);
  expect(gameWorld.getTableHeight()).toBe(params.tableHeight);
  expect(gameWorld.getAllTables()).toEqual(params.tables);
  expect(gameWorld.getAllTags()).toEqual(params.tags);
  expect(gameWorld.getUIs()).toEqual(params.uis);
  expect(gameWorld.getAllZones()).toEqual(params.zones);
});

it("static getExecutionReason", () => {
  const output = MockGameWorld.getExecutionReason();
  expect(typeof output).toBe("string");
});

it("drawingLines", () => {
  const input = new MockDrawingLine();
  const gameWorld = new MockGameWorld();
  gameWorld.addDrawingLine(input);
  let output = gameWorld.getDrawingLines();
  expect(output).toEqual([input]);

  gameWorld._reset();
  gameWorld.addDrawingLine(input);
  output = gameWorld.getDrawingLines();
  expect(output).toEqual([input]);
  gameWorld.removeDrawingLine(0);
  output = gameWorld.getDrawingLines();
  expect(output).toEqual([]);

  gameWorld._reset();
  gameWorld.addDrawingLine(input);
  output = gameWorld.getDrawingLines();
  expect(output).toEqual([input]);
  gameWorld.removeDrawingLineObject(input);
  output = gameWorld.getDrawingLines();
  expect(output).toEqual([]);
});

it("labels", () => {
  const gameWorld = new MockGameWorld();
  let output = gameWorld.getAllLabels();
  expect(output).toEqual([]);

  const pos = new MockVector(0, 0, 0);
  const label = gameWorld.createLabel(pos);
  output = gameWorld.getAllLabels();
  expect(output).toEqual([label]);
});

it("screenUIs", () => {
  const input = new MockScreenUIElement();
  const gameWorld = new MockGameWorld();
  gameWorld.addScreenUI(input);
  let output = gameWorld.getScreenUIs();
  expect(output).toEqual([input]);

  gameWorld._reset();
  gameWorld.addScreenUI(input);
  output = gameWorld.getScreenUIs();
  expect(output).toEqual([input]);
  gameWorld.removeScreenUI(0);
  output = gameWorld.getScreenUIs();
  expect(output).toEqual([]);

  gameWorld._reset();
  gameWorld.addScreenUI(input);
  output = gameWorld.getScreenUIs();
  expect(output).toEqual([input]);
  gameWorld.removeScreenUIElement(input);
  output = gameWorld.getScreenUIs();
  expect(output).toEqual([]);
});

it("uis", () => {
  const input = new MockUIElement();
  const gameWorld = new MockGameWorld();
  gameWorld.addUI(input);
  let output = gameWorld.getUIs();
  expect(output).toEqual([input]);

  gameWorld._reset();
  gameWorld.addUI(input);
  output = gameWorld.getUIs();
  expect(output).toEqual([input]);
  gameWorld.removeUI(0);
  output = gameWorld.getUIs();
  expect(output).toEqual([]);

  gameWorld._reset();
  gameWorld.addUI(input);
  output = gameWorld.getUIs();
  expect(output).toEqual([input]);
  gameWorld.removeUIElement(input);
  output = gameWorld.getUIs();
  expect(output).toEqual([]);
});

it("zones", () => {
  const gameWorld = new MockGameWorld();
  let output = gameWorld.getAllZones();
  expect(output).toEqual([]);

  const pos = new MockVector(0, 0, 0);
  const zone = gameWorld.createZone(pos);
  output = gameWorld.getAllZones();
  expect(output).toEqual([zone]);
});

it("getAllObjects", () => {
  const gameWorld = new MockGameWorld();
  const obj1 = new MockGameObject();
  const obj2 = new MockGameObject();

  gameWorld._reset({ gameObjects: [obj1, obj2] });
  let allObjects = gameWorld.getAllObjects();
  expect(allObjects).toEqual([obj1, obj2]);

  gameWorld._reset();
  allObjects = gameWorld.getAllObjects();
  expect(allObjects).toEqual([]);
});

it("getLabelById", () => {
  const label = new MockLabel({ id: "my-id" });
  const gameWorld = new MockGameWorld({ labels: [label] });
  let output = gameWorld.getLabelById("my-id");
  expect(output).toEqual(label);
  output = gameWorld.getLabelById("no-such-id");
  expect(output).toBeUndefined();
});
