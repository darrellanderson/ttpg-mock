import { MockPanel, MockPanelParams } from "../mock-panel";
import { VerticalBox } from "@tabletop-playground/api";

export type MockVerticalBoxParams = MockPanelParams & {};

export class MockVerticalBox extends MockPanel implements VerticalBox {
  constructor(params?: MockVerticalBoxParams) {
    super(params);
  }
}
