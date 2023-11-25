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
