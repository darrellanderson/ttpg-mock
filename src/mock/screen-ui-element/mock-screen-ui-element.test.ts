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
  expect(elememt.positionX).toEqual(params.positionX);
  expect(elememt.positionY).toEqual(params.positionY);
  expect(elememt.relativePositionX).toEqual(params.relativePositionX);
  expect(elememt.relativePositionY).toEqual(params.relativePositionY);
  expect(elememt.width).toEqual(params.width);
  expect(elememt.height).toEqual(params.height);
  expect(elememt.relativeWidth).toEqual(params.relativeWidth);
  expect(elememt.relativeHeight).toEqual(params.relativeHeight);
  expect(elememt.anchorX).toEqual(params.anchorX);
  expect(elememt.anchorY).toEqual(params.anchorY);
  expect(elememt.players).toEqual(params.players);
});

it("clone", () => {
  const element = new MockScreenUIElement();
  const clone = element.clone();
  expect(clone).toEqual(element);
});
