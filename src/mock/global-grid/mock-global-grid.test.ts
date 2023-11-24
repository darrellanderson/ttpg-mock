import {
  GridSnapType,
  GridType,
  GridVisibility,
} from "@tabletop-playground/api";
import { MockColor } from "../color/mock-color";
import { MockGlobalGrid, MockGlobalGridParams } from "./mock-global-grid";

it("constructor", () => {
  const params: MockGlobalGridParams = {
    color: new MockColor(0.1, 1, 1, 1),
    height: 13,
    horizontalOffset: 1,
    rotation: 2,
    snapType: GridSnapType.Center,
    type: GridType.Hexagonal,
    verticalOffset: 3,
    visibility: GridVisibility.Table,
    width: 17,
    hasThickLines: true,
  };
  const grid = new MockGlobalGrid(params);
  expect(grid.getColor()).toEqual(params.color);
  expect(grid.getHeight()).toBe(params.height);
  expect(grid.getHorizontalOffset()).toBe(params.horizontalOffset);
  expect(grid.getRotation()).toBe(params.rotation);
  expect(grid.getSnapType()).toBe(params.snapType);
  expect(grid.getType()).toBe(params.type);
  expect(grid.getVerticalOffset()).toBe(params.verticalOffset);
  expect(grid.getVisibility()).toBe(params.visibility);
  expect(grid.getWidth()).toBe(params.width);
  expect(grid.hasThickLines()).toBe(params.hasThickLines);
});

it("color", () => {
  const input = new MockColor(0.1, 1, 1, 1);
  const grid = new MockGlobalGrid();
  grid.setColor(input);
  const output = grid.getColor();
  expect(output).toEqual(input);
});

it("height", () => {
  const input = 7;
  const grid = new MockGlobalGrid();
  grid.setHeight(input);
  const output = grid.getHeight();
  expect(output).toBe(input);
});

it("horizontal offset", () => {
  const input = 7;
  const grid = new MockGlobalGrid();
  grid.setHorizontalOffset(input);
  const output = grid.getHorizontalOffset();
  expect(output).toBe(input);
});

it("rotation", () => {
  const input = 7;
  const grid = new MockGlobalGrid();
  grid.setRotation(input);
  const output = grid.getRotation();
  expect(output).toBe(input);
});

it("snap type", () => {
  const input = 7;
  const grid = new MockGlobalGrid();
  grid.setSnapType(input);
  const output = grid.getSnapType();
  expect(output).toBe(input);
});

it("thick lines", () => {
  const input = false;
  const grid = new MockGlobalGrid();
  grid.setThickLines(input);
  const output = grid.hasThickLines();
  expect(output).toBe(input);
});

it("type", () => {
  const input = 7;
  const grid = new MockGlobalGrid();
  grid.setType(input);
  const output = grid.getType();
  expect(output).toBe(input);
});

it("vertical offset", () => {
  const input = 7;
  const grid = new MockGlobalGrid();
  grid.setVerticalOffset(input);
  const output = grid.getVerticalOffset();
  expect(output).toBe(input);
});

it("visibility", () => {
  const input = 7;
  const grid = new MockGlobalGrid();
  grid.setVisibility(input);
  const output = grid.getVisibility();
  expect(output).toBe(input);
});

it("width", () => {
  const input = 7;
  const grid = new MockGlobalGrid();
  grid.setWidth(input);
  const output = grid.getWidth();
  expect(output).toBe(input);
});
