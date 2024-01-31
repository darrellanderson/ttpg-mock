import { Border, Color, Widget } from "@tabletop-playground/api";
import { MockColor } from "../../color/mock-color";
import { MockWidget, MockWidgetParams } from "../mock-widget";

export type MockBorderParams = MockWidgetParams & {
    color?: Color | [r: number, g: number, b: number, a: number];
    child?: Widget;
};

export class MockBorder extends MockWidget implements Border {
    private _color: Color = new MockColor(0, 0, 0, 1);
    private _child: Widget | undefined = undefined;

    constructor(params?: MockBorderParams) {
        super(params);
        if (params?.color) {
            this._color = MockColor._from(params.color);
        }
        if (params?.child) {
            this._child = params.child;
        }
    }

    setColor(
        color: Color | [r: number, g: number, b: number, a: number]
    ): Border {
        this._color = MockColor._from(color);
        return this;
    }
    setChild(child?: Widget | undefined): Border {
        this._child = child;
        return this;
    }
    getColor(): Color {
        return this._color.clone();
    }
    getChild(): Widget | undefined {
        return this._child;
    }
}
