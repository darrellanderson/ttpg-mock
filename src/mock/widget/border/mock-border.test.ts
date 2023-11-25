import { MockColor } from "../../color/mock-color";
import { MockWidget } from "../mock-widget";
import { MockBorder, MockBorderParams } from "./mock-border";

it("constructor", () => {
  const params: MockBorderParams = {
    color: new MockColor(0.1, 1, 1, 1),
    child: new MockWidget(),
  };
  const border = new MockBorder(params);
  expect(border.getColor()).toEqual(params.color);
  expect(border.getChild()).toEqual(params.child);
});

it("child", () => {
  const input = new MockWidget();
  const border = new MockBorder();
  border.setChild(input);
  const output = border.getChild();
  expect(output).toEqual(input);
});

it("color", () => {
  const input = new MockColor(0.2, 1, 1, 1);
  const border = new MockBorder();
  border.setColor(input);
  const output = border.getColor();
  expect(output).toEqual(input);
});
