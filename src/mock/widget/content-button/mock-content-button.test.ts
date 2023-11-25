import { MockColor } from "../../color/mock-color";
import {
  MockContentButton,
  MockContentButtonParams,
} from "./mock-content-button";
import { MockWidget } from "../mock-widget";

it("constructor", () => {
  const params: MockContentButtonParams = {
    child: new MockWidget(),
  };
  const contentButton = new MockContentButton(params);
  expect(contentButton.getChild()).toEqual(params.child);
});

it("child", () => {
  const input = new MockWidget();
  const contentButton = new MockContentButton();
  contentButton.setChild(input);
  const output = contentButton.getChild();
  expect(output).toEqual(input);
});
