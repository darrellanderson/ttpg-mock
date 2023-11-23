import { MockPlayerPermission } from "../player-permission/mock-player-permission";
import { MockUIElement, MockUIElementParams } from "./mock-ui-element";
import { MockWidget } from "../widget/mock-widget";
import { MockVector } from "../vector/mock-vector";
import { MockRotator } from "../rotator/mock-rotator";

it("constructor", () => {
  const params: MockUIElementParams = {
    widget: new MockWidget(),
    position: new MockVector(1, 2, 3),
    rotation: new MockRotator(5, 6, 7),
    scale: 9,
    useWidgetSize: true,
    width: 11,
    height: 12,
    useTransparency: true,
    anchorX: 13,
    anchorY: 14,
    presentationStyle: 15,
    twoSided: true,
    players: new MockPlayerPermission(),
    zoomVisibility: 16,
  };
  const elememt = new MockUIElement(params);
  expect(elememt.widget).toEqual(params.widget);
  expect(elememt.position).toEqual(params.position);
  expect(elememt.rotation).toEqual(params.rotation);
  expect(elememt.scale).toBe(params.scale);
  expect(elememt.useWidgetSize).toBe(params.useWidgetSize);
  expect(elememt.width).toBe(params.width);
  expect(elememt.height).toBe(params.height);
  expect(elememt.useTransparency).toBe(params.useTransparency);
  expect(elememt.anchorX).toBe(params.anchorX);
  expect(elememt.anchorY).toBe(params.anchorY);
  expect(elememt.presentationStyle).toBe(params.presentationStyle);
  expect(elememt.twoSided).toBe(params.twoSided);
  expect(elememt.players).toEqual(params.players);
  expect(elememt.zoomVisibility).toBe(params.zoomVisibility);
});

it("clone", () => {
  const element = new MockUIElement();
  const clone = element.clone();
  expect(clone).toEqual(element);
});
