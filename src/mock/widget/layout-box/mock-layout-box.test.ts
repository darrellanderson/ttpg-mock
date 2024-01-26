import { HorizontalAlignment, VerticalAlignment } from "@tabletop-playground/api";
import { MockWidget } from "../mock-widget";
import { MockLayoutBox, MockLayoutBoxParams } from "./mock-layout-box";

it("constructor", () => {
  const params: MockLayoutBoxParams = {
    child: new MockWidget(),
    horizontalAlignment: 1,
    maximumHeight: 2,
    maximumWidth: 3,
    minimumHeight: 4,
    minimumWidth: 5,
    overrideHeight: 6,
    overrideWidth: 7,
    paddingLeft: 8,
    paddingTop: 9,
    paddingRight: 10,
    paddingBottom: 11,
    verticalAlignment: 12,
  };
  const box = new MockLayoutBox(params);
  expect(box.getBottomPadding()).toEqual(params.paddingBottom);
  expect(box.getChild()).toEqual(params.child);
  expect(box.getHorizontalAlignment()).toEqual(params.horizontalAlignment);
  expect(box.getLeftPadding()).toEqual(params.paddingLeft);
  expect(box.getMaximumHeight()).toEqual(params.maximumHeight);
  expect(box.getMaximumWidth()).toEqual(params.maximumWidth);
  expect(box.getMinimumHeight()).toEqual(params.minimumHeight);
  expect(box.getMinimumWidth()).toEqual(params.minimumWidth);
  expect(box.getOverrideHeight()).toEqual(params.overrideHeight);
  expect(box.getOverrideWidth()).toEqual(params.overrideWidth);
  expect(box.getRightPadding()).toEqual(params.paddingRight);
  expect(box.getTopPadding()).toEqual(params.paddingTop);
  expect(box.getVerticalAlignment()).toEqual(params.verticalAlignment);
});

it('setChild', () => {
  const box = new MockLayoutBox()
  const child = new MockWidget()
  box.setChild(child)
  expect(box.getChild()).toEqual(child)
})

it('getHorizontalAlignment', () => {
  const box = new MockLayoutBox()
  box.setHorizontalAlignment(HorizontalAlignment.Left)
  expect(box.getHorizontalAlignment()).toEqual(HorizontalAlignment.Left)
})

it('setMaximumHeight', () => {
  const box = new MockLayoutBox()
  box.setMaximumHeight(7)
  expect(box.getMaximumHeight()).toEqual(7)
})

it('setMaximumWidth', () => {
  const box = new MockLayoutBox()
  box.setMaximumWidth(7)
  expect(box.getMaximumWidth()).toEqual(7)
})

it('setMinimumHeight', () => {
  const box = new MockLayoutBox()
  box.setMinimumHeight(7)
  expect(box.getMinimumHeight()).toEqual(7)
})

it('setMinimumWidth', () => {
  const box = new MockLayoutBox()
  box.setMinimumWidth(7)
  expect(box.getMinimumWidth()).toEqual(7)
})

it('setOverrideHeight', () => {
  const box = new MockLayoutBox()
  box.setOverrideHeight(7)
  expect(box.getOverrideHeight()).toEqual(7)
})

it('setOverrideWidth', () => {
  const box = new MockLayoutBox()
  box.setOverrideWidth(7)
  expect(box.getOverrideWidth()).toEqual(7)
})

it('setPadding', () => {
  const box = new MockLayoutBox()
  box.setPadding(1, 2, 3, 4)
  expect(box.getLeftPadding()).toEqual(1)
  expect(box.getRightPadding()).toEqual(2)
  expect(box.getTopPadding()).toEqual(3)
  expect(box.getBottomPadding()).toEqual(4)
})

it('setVerticalAlignment', () => {
  const box = new MockLayoutBox()
  box.setVerticalAlignment(VerticalAlignment.Bottom)
  expect(box.getVerticalAlignment()).toEqual(VerticalAlignment.Bottom)
})
