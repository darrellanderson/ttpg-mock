/* eslint-disable @typescript-eslint/no-unused-vars */
import { Canvas, Widget } from "@tabletop-playground/api";
import { MockWidget, MockWidgetParams } from "../mock-widget";

export type MockCanvasParams = MockWidgetParams & {
    children?: Widget[];
};

export class MockCanvas extends MockWidget implements Canvas {
    private _children: Widget[] = [];

    constructor(params?: MockCanvasParams) {
        super(params);
        if (params?.children) {
            this._children = params.children;
        }
    }

    addChild(
        child: Widget,
        x: number,
        y: number,
        width: number,
        height: number
    ): Canvas {
        this._children.push(child);
        return this;
    }

    getChildren(): Widget[] {
        return [...this._children];
    }

    removeChild(child: Widget): void {
        const index = this._children.indexOf(child);
        if (index >= 0) {
            this._children.splice(index, 1);
        }
    }

    updateChild(
        child: Widget,
        x: number,
        y: number,
        width: number,
        height: number
    ): void {}
}
