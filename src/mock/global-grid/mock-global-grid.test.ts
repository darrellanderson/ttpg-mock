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
    expect(grid.getHeight()).toEqual(params.height);
    expect(grid.getHorizontalOffset()).toEqual(params.horizontalOffset);
    expect(grid.getRotation()).toEqual(params.rotation);
    expect(grid.getSnapType()).toEqual(params.snapType);
    expect(grid.getType()).toEqual(params.type);
    expect(grid.getVerticalOffset()).toEqual(params.verticalOffset);
    expect(grid.getVisibility()).toEqual(params.visibility);
    expect(grid.getWidth()).toEqual(params.width);
    expect(grid.hasThickLines()).toEqual(params.hasThickLines);
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
    expect(output).toEqual(input);
});

it("horizontal offset", () => {
    const input = 7;
    const grid = new MockGlobalGrid();
    grid.setHorizontalOffset(input);
    const output = grid.getHorizontalOffset();
    expect(output).toEqual(input);
});

it("rotation", () => {
    const input = 7;
    const grid = new MockGlobalGrid();
    grid.setRotation(input);
    const output = grid.getRotation();
    expect(output).toEqual(input);
});

it("snap type", () => {
    const input = 7;
    const grid = new MockGlobalGrid();
    grid.setSnapType(input);
    const output = grid.getSnapType();
    expect(output).toEqual(input);
});

it("thick lines", () => {
    const input = false;
    const grid = new MockGlobalGrid();
    grid.setThickLines(input);
    const output = grid.hasThickLines();
    expect(output).toEqual(input);
});

it("type", () => {
    const input = 7;
    const grid = new MockGlobalGrid();
    grid.setType(input);
    const output = grid.getType();
    expect(output).toEqual(input);
});

it("vertical offset", () => {
    const input = 7;
    const grid = new MockGlobalGrid();
    grid.setVerticalOffset(input);
    const output = grid.getVerticalOffset();
    expect(output).toEqual(input);
});

it("visibility", () => {
    const input = 7;
    const grid = new MockGlobalGrid();
    grid.setVisibility(input);
    const output = grid.getVisibility();
    expect(output).toEqual(input);
});

it("width", () => {
    const input = 7;
    const grid = new MockGlobalGrid();
    grid.setWidth(input);
    const output = grid.getWidth();
    expect(output).toEqual(input);
});
