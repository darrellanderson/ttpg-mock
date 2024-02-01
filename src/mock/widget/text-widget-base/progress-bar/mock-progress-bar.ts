import { Color, ProgressBar } from "@tabletop-playground/api";
import {
    MockTextWidgetBase,
    MockTextWidgetBaseParams,
} from "../mock-text-widget-base";
import { MockColor } from "../../../color/mock-color";

export type MockProgressBarParams = MockTextWidgetBaseParams & {
    barColor: Color | [r: number, g: number, b: number, a: number];
    progress: number;
    text: string;
};

export class MockProgressBar extends MockTextWidgetBase implements ProgressBar {
    private _barColor: Color = new MockColor(1, 1, 1, 1);
    private _progress: number = 0;
    private _text: string = "";

    constructor(params?: MockProgressBarParams) {
        super(params);
        if (params?.barColor) {
            this._barColor = MockColor._from(params.barColor);
        }
        if (params?.progress !== undefined) {
            this._progress = params.progress;
        }
        if (params?.text) {
            this._text = params.text;
        }
    }

    getBarColor(): Color {
        return this._barColor.clone();
    }
    getProgress(): number {
        return this._progress;
    }
    getText(): string {
        return this._text;
    }
    setBarColor(
        barColor: Color | [r: number, g: number, b: number, a: number]
    ): ProgressBar {
        this._barColor = MockColor._from(barColor);
        return this;
    }
    setProgress(progress: number): ProgressBar {
        this._progress = progress;
        return this;
    }
    setText(text: string): ProgressBar {
        this._text = text;
        return this;
    }
}
