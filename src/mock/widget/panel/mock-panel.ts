/* eslint-disable @typescript-eslint/no-unused-vars */
import { Panel, Widget } from "@tabletop-playground/api";
import { MockWidget, MockWidgetParams } from "../mock-widget";
import { HorizontalAlignment, VerticalAlignment } from "../../../enums";

export type MockPanelParams = MockWidgetParams & {
    children?: Widget[];
    horizontalAlignment?: number;
    verticalAlignment?: number;
};

export class MockPanel extends MockWidget implements Panel {
    private _children: Widget[] = [];
    private _horizontalAlignment: number = HorizontalAlignment.Fill;
    private _verticalAlignment: number = VerticalAlignment.Fill;

    constructor(params?: MockPanelParams) {
        super(params);
        if (params?.children) {
            this._children = params.children;
            for (const child of this._children) {
                (child as MockWidget)._setParent(this);
            }
        }
        if (params?.horizontalAlignment !== undefined) {
            this._horizontalAlignment = params.horizontalAlignment;
        }
        if (params?.verticalAlignment !== undefined) {
            this._verticalAlignment = params.verticalAlignment;
        }
    }

    addChild(child: Widget, weight?: number | undefined): Panel {
        this._children.push(child);
        (child as MockWidget)._setParent(this);
        return this;
    }

    getAllChildren(): Widget[] {
        return [...this._children];
    }

    getChildAt(index: number): Widget | undefined {
        return this._children[index];
    }

    getHorizontalAlignment(): number {
        return this._horizontalAlignment;
    }

    getNumChildren(): number {
        return this._children.length;
    }

    getVerticalAlignment(): number {
        return this._verticalAlignment;
    }

    insertChild(
        child: Widget,
        index: number,
        weight?: number | undefined
    ): Panel {
        this._children = [
            ...this._children.slice(0, index),
            child,
            ...this._children.slice(index),
        ];
        return this;
    }

    removeAllChildren(): void {
        for (const child of this._children) {
            (child as MockWidget)._setParent(undefined);
        }
        this._children = [];
    }

    removeChild(child: Widget): void {
        const index = this._children.indexOf(child);
        this.removeChildAt(index);
    }

    removeChildAt(index: number): void {
        if (index >= 0 && index < this._children.length) {
            this._children.splice(index, 1);
        }
    }

    setChildDistance(distance: number): Panel {
        return this;
    }

    setEqualChildSize(equal: boolean): Panel {
        return this;
    }

    setHorizontalAlignment(alignment: number): Panel {
        this._horizontalAlignment = alignment;
        return this;
    }

    setVerticalAlignment(alignment: number): Panel {
        this._verticalAlignment = alignment;
        return this;
    }
}
