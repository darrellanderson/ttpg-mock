import { HorizontalBox } from "@tabletop-playground/api";
import { MockPanel, MockPanelParams } from "../mock-panel";

export type MockHorizontalBoxParams = MockPanelParams;

export class MockHorizontalBox extends MockPanel implements HorizontalBox {
    constructor(params?: MockHorizontalBoxParams) {
        super(params);
    }
}
