import { MockPlayerPermission } from "../player-permission/mock-player-permission";
import {
  MockScreenUIElement,
  MockScreenUIElementParams,
} from "./mock-screen-ui-element";
import { MockWidget } from "../widget/mock-widget";

it("constructor", () => {
  const params: MockScreenUIElementParams = {
    widget: new MockWidget(),
    positionX: 1,
    positionY: 2,
    relativePositionX: false,
    relativePositionY: false,
    width: 3,
    height: 4,
    relativeWidth: true,
    relativeHeight: true,
    anchorX: 5,
    anchorY: 6,
    players: new MockPlayerPermission(),
  };
  const elememt = new MockScreenUIElement(params);
  expect(elememt.widget).toEqual(params.widget);
  expect(elememt.positionX).toBe(params.positionX);
  expect(elememt.positionY).toBe(params.positionY);
  expect(elememt.relativePositionX).toBe(params.relativePositionX);
  expect(elememt.relativePositionY).toBe(params.relativePositionY);
  expect(elememt.width).toBe(params.width);
  expect(elememt.height).toBe(params.height);
  expect(elememt.relativeWidth).toBe(params.relativeWidth);
  expect(elememt.relativeHeight).toBe(params.relativeHeight);
  expect(elememt.anchorX).toBe(params.anchorX);
  expect(elememt.anchorY).toBe(params.anchorY);
  expect(elememt.players).toEqual(params.players);
});

it("clone", () => {
  const element = new MockScreenUIElement();
  const clone = element.clone();
  expect(clone).toEqual(element);
});
