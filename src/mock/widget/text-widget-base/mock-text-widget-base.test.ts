import { MockColor } from "../../color/mock-color";
import {
  MockTextWidgetBase,
  MockTextWidgetBaseParams,
} from "./mock-text-widget-base";

it("constructor", () => {
  const params: MockTextWidgetBaseParams = {
    fontFilename: "my-font",
    fontPackageId: "my-package-id",
    fontSize: 1,
    textColor: new MockColor(0.1, 1, 1, 1),
    isBold: true,
    isItalic: true,
  };
  const base = new MockTextWidgetBase(params);
  expect(base.getFontFileName()).toEqual(params.fontFilename);
  expect(base.getFontPackageId()).toEqual(params.fontPackageId);
  expect(base.getFontSize()).toEqual(params.fontSize);
  expect(base.getTextColor()).toEqual(params.textColor);
  expect(base.isBold()).toEqual(params.isBold);
  expect(base.isItalic()).toEqual(params.isItalic);
});
