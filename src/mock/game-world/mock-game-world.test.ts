import { MockColor } from "../color/mock-color";
import { MockDrawingLine } from "../drawing-line/mock-drawing-line";
import {
  MockGameObject,
  MockGameObjectParams,
} from "../static-object/game-object/mock-game-object";
import { MockGameWorld, MockGameWorldParams } from "./mock-game-world";
import { MockLabel } from "../label/mock-label";
import { MockPackage } from "../package/mock-package";
import { MockPlayer } from "../player/mock-player";
import { MockScreenUIElement } from "../screen-ui-element/mock-screen-ui-element";
import {
  MockStaticObject,
  MockStaticObjectParams,
} from "../static-object/mock-static-object";
import { MockUIElement } from "../ui-element/mock-ui-element";
import { MockVector } from "../vector/mock-vector";
import { MockZone } from "../zone/mock-zone";

it("constructor", () => {
  new MockGameWorld();

  const slotColor = new MockColor(1, 1, 1, 1);
  const params: MockGameWorldParams = {
    backgroundFilename: "my-background-filename",
    backgroundPackageId: "my-background-id",
    drawingLines: [new MockDrawingLine()],
    gameObjects: [new MockGameObject()],
    gravityMultiplier: 13,
    labels: [new MockLabel()],
    packages: [new MockPackage()],
    players: [new MockPlayer()],
    savedData: { "my-key": "my-value" },
    savedDataAnonymous: "my-anon-value",
    showDiceRollMessages: false,
    slotColor: { 1: slotColor },
    slotTeam: { 1: 2 },
    screenUIs: [new MockScreenUIElement()],
    tableHeight: 17,
    tables: [new MockStaticObject()],
    tags: ["my-tag1", "my-tag2"],
    uis: [new MockUIElement()],
    zones: [new MockZone()],
    _templateIdToMockGameObjectParams: {},
  };
  const gameWorld = new MockGameWorld(params);
  expect(gameWorld.getBackgroundFilename()).toBe(params.backgroundFilename);
  expect(gameWorld.getBackgroundPackageId()).toBe(params.backgroundPackageId);
  expect(gameWorld.getDrawingLines()).toEqual(params.drawingLines);
  expect(gameWorld.getAllObjects()).toEqual(params.gameObjects);
  expect(gameWorld.getGravityMultiplier()).toBe(params.gravityMultiplier);
  expect(gameWorld.getAllLabels()).toEqual(params.labels);
  expect(gameWorld.getAllowedPackages()).toEqual(params.packages);
  expect(gameWorld.getAllPlayers()).toEqual(params.players);
  expect(gameWorld.getSavedData("my-key")).toBe("my-value");
  expect(gameWorld.getSavedData()).toBe("my-anon-value");
  expect(gameWorld.getShowDiceRollMessages()).toBe(params.showDiceRollMessages);
  expect(gameWorld.getSlotColor(1)).toBe(slotColor);
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

it("background", () => {
  const filename = "my-filename";
  const packageId = "my-package-id";
  const gameWorld = new MockGameWorld();
  gameWorld.setBackground(filename, packageId);
  expect(gameWorld.getBackgroundFilename()).toBe(filename);
  expect(gameWorld.getBackgroundPackageId()).toBe(packageId);
  gameWorld.setBackground();
  expect(gameWorld.getBackgroundFilename()).toBe("");
  expect(gameWorld.getBackgroundPackageId()).toBe("");
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

it("gravityMultiplier", () => {
  const input = 7;
  const gameWorld = new MockGameWorld();
  gameWorld.setGravityMultiplier(input);
  const output = gameWorld.getGravityMultiplier();
  expect(output).toBe(input);
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

it("savedData", () => {
  const gameWorld = new MockGameWorld();
  gameWorld.setSavedData("my-anon-data");
  expect(gameWorld.getSavedData()).toBe("my-anon-data");
  gameWorld.setSavedData("my-value", "my-key");
  expect(gameWorld.getSavedData("my-key")).toBe("my-value");
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

  const input2 = new MockScreenUIElement();
  input2.height += 20; // make sure different
  gameWorld._reset();
  gameWorld.addScreenUI(input);
  output = gameWorld.getScreenUIs();
  expect(output).toEqual([input]);
  gameWorld.setScreenUI(0, input2);
  output = gameWorld.getScreenUIs();
  expect(output).toEqual([input2]);
});

it("slotColor", () => {
  const gameWorld = new MockGameWorld();
  const slot = 7;
  const color = new MockColor(1, 1, 1, 1);
  gameWorld.setSlotColor(slot, color);
  expect(gameWorld.getSlotColor(slot)).toEqual(color);
});

it("slotTeam", () => {
  const gameWorld = new MockGameWorld();
  const slot = 7;
  const team = 8;
  gameWorld.setSlotTeam(slot, team);
  expect(gameWorld.getSlotTeam(slot)).toBe(team);
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

  const input2 = new MockUIElement();
  input2.height += 20; // make sure different
  gameWorld._reset();
  gameWorld.addUI(input);
  output = gameWorld.getUIs();
  expect(output).toEqual([input]);
  gameWorld.setUI(0, input2);
  output = gameWorld.getUIs();
  expect(output).toEqual([input2]);
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

it("getObjectById", () => {
  const obj = new MockGameObject({ id: "my-id" });
  const gameWorld = new MockGameWorld({ gameObjects: [obj] });
  let output = gameWorld.getObjectById("my-id");
  expect(output).toEqual(obj);
  output = gameWorld.getObjectById("no-such-id");
  expect(output).toBeUndefined();
});

it("getObjectGroupIds", () => {
  const obj = new MockGameObject({ groupId: 7 });
  const gameWorld = new MockGameWorld({ gameObjects: [obj] });
  const output = gameWorld.getObjectGroupIds();
  expect(output).toEqual([7]);
});

it("getObjectGroupsByGroupId", () => {
  const obj = new MockGameObject({ groupId: 7 });
  const gameWorld = new MockGameWorld({ gameObjects: [obj] });
  const output = gameWorld.getObjectsByGroupId(7);
  expect(output).toEqual([obj]);
});

it("getObjectsByTemplateId", () => {
  const obj = new MockGameObject({ templateId: "my-template-id" });
  const gameWorld = new MockGameWorld({ gameObjects: [obj] });
  const output = gameWorld.getObjectsByTemplateId("my-template-id");
  expect(output).toEqual([obj]);
});

it("createObjectFromTemplate", () => {
  const templateId = "my-template-id";
  const position = new MockVector(1, 2, 3);
  const params: MockGameObjectParams = { name: "my-object-name" };
  const gameWorld = new MockGameWorld({
    _templateIdToMockGameObjectParams: { [templateId]: params },
  });
  const obj = gameWorld.createObjectFromTemplate(templateId, position);
  expect(obj?.getName()).toBe(params.name);
  expect(obj?.getPosition()).toEqual(position);

  const nope = gameWorld.createObjectFromTemplate("no-such-id", position);
  expect(nope).toBeUndefined();
});

it("createTableFromTemplate", () => {
  const templateId = "my-template-id";
  const position = new MockVector(1, 2, 3);
  const params: MockStaticObjectParams = { name: "my-table-name" };
  const gameWorld = new MockGameWorld({
    _templateIdToMockGameObjectParams: { [templateId]: params },
  });
  const obj = gameWorld.createTableFromTemplate(templateId, position);
  expect(obj?.getName()).toBe(params.name);
  expect(obj?.getPosition()).toEqual(position);

  const nope = gameWorld.createTableFromTemplate("no-such-id", position);
  expect(nope).toBeUndefined();
});
