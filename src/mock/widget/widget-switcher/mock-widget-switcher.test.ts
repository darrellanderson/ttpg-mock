import { MockWidget } from "../mock-widget";
import {
  MockWidgetSwitcher,
  MockWidgetSwitcherParams,
} from "./mock-widget-switcher";

it("constructor", () => {
  const params: MockWidgetSwitcherParams = {
    children: [new MockWidget(), new MockWidget()],
    activeIndex: 1,
  };
  const switcher = new MockWidgetSwitcher(params);
  expect(switcher.getActiveIndex()).toEqual(params.activeIndex);
  expect(switcher.getActiveWidget()).toEqual(
    params.children[params.activeIndex]
  );
  expect(switcher.getAllChildren()).toEqual(params.children);
  expect(switcher.getChildAt(0)).toEqual(params.children[0]);
  expect(switcher.getNumChildren()).toEqual(params.children.length);
});
