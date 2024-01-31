import {
    HorizontalAlignment,
    VerticalAlignment,
} from "@tabletop-playground/api";
import { MockWidget } from "../mock-widget";
import { MockPanel, MockPanelParams } from "./mock-panel";

it("constructor", () => {
    const child = new MockWidget();
    const params: MockPanelParams = {
        children: [child],
        horizontalAlignment: HorizontalAlignment.Center,
        verticalAlignment: VerticalAlignment.Center,
    };
    const panel = new MockPanel(params);
    expect(panel.getAllChildren()).toEqual(params.children);
    expect(panel.getChildAt(0)).toEqual(child);
    expect(panel.getHorizontalAlignment()).toEqual(params.horizontalAlignment);
    expect(panel.getNumChildren()).toEqual(params.children?.length);
    expect(panel.getVerticalAlignment()).toEqual(params.verticalAlignment);
});
