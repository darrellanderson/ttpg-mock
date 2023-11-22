import { MockDrawingLine } from "../drawing-line/mock-drawing-line";
import { MockGameObject } from "../static-object/game-object/mock-game-object";
import { MockGameWorld } from "./mock-game-world";

it("constructor", () => {
  new MockGameWorld();
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
