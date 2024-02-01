import { Widget, WidgetSwitcher } from "@tabletop-playground/api";
import { MockWidget, MockWidgetParams } from "../mock-widget";

export type MockWidgetSwitcherParams = MockWidgetParams & {
    children: Widget[];
    activeIndex: number;
};

export class MockWidgetSwitcher extends MockWidget implements WidgetSwitcher {
    private _children: Widget[] = [];
    private _activeIndex: number = 0;

    constructor(params?: MockWidgetSwitcherParams) {
        super(params);
        if (params?.children) {
            this._children = params.children;
        }
        if (params?.activeIndex !== undefined) {
            this._activeIndex = params.activeIndex;
        }
    }

    addChild(child: Widget): WidgetSwitcher {
        this._children.push(child);
        return this;
    }

    getActiveIndex(): number {
        return this._activeIndex;
    }

    getActiveWidget(): Widget | undefined {
        return this._children[this._activeIndex];
    }

    getAllChildren(): Widget[] {
        return [...this._children];
    }

    getChildAt(index: number): Widget | undefined {
        return this._children[index];
    }

    getNumChildren(): number {
        return this._children.length;
    }

    insertChild(child: Widget, index: number): WidgetSwitcher {
        this._children = [
            ...this._children.slice(0, index),
            child,
            ...this._children.slice(index),
        ];
        return this;
    }

    removeAllChildren(): void {
        this._children = [];
        this._activeIndex = 0;
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

    setActiveIndex(index: number): Widget {
        this._activeIndex = index;
        return this._children[this._activeIndex];
    }

    setActiveWidget(widget: Widget): Widget {
        this._activeIndex = this._children.indexOf(widget);
        return widget;
    }
}
