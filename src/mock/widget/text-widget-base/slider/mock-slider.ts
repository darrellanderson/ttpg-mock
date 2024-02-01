import { MulticastDelegate, Player, Slider } from "@tabletop-playground/api";
import {
    MockTextWidgetBase,
    MockTextWidgetBaseParams,
} from "../mock-text-widget-base";
import { MockMulticastDelegate } from "../../../multicast-delegate/mock-multicast-delegate";

export type MockSliderParams = MockTextWidgetBaseParams & {
    maxValue?: number;
    minValue?: number;
    stepSize?: number;
    textBoxWidth?: number;
    value?: number;
};

export class MockSlider extends MockTextWidgetBase implements Slider {
    private _maxValue: number = 0;
    private _minValue: number = 0;
    private _stepSize: number = 0;
    private _textBoxWidth: number = 0;
    private _value: number = 0;

    onValueChanged: MulticastDelegate<
        (slider: this, player: Player, value: number) => void
    > = new MockMulticastDelegate<
        (slider: this, player: Player, value: number) => void
    >();

    constructor(params?: MockSliderParams) {
        super(params);
        if (params?.maxValue !== undefined) {
            this._maxValue = params.maxValue;
        }
        if (params?.minValue !== undefined) {
            this._minValue = params.minValue;
        }
        if (params?.stepSize !== undefined) {
            this._stepSize = params.stepSize;
        }
        if (params?.textBoxWidth !== undefined) {
            this._textBoxWidth = params.textBoxWidth;
        }
        if (params?.value !== undefined) {
            this._value = params.value;
        }
    }

    getMaxValue(): number {
        return this._maxValue;
    }
    getMinValue(): number {
        return this._minValue;
    }
    getStepSize(): number {
        return this._stepSize;
    }
    getTextBoxWidth(): number {
        return this._textBoxWidth;
    }
    getValue(): number {
        return this._value;
    }
    setMaxValue(maxValue: number): Slider {
        this._maxValue = maxValue;
        return this;
    }
    setMinValue(minValue: number): Slider {
        this._minValue = minValue;
        return this;
    }
    setStepSize(stepSize: number): Slider {
        this._stepSize = stepSize;
        return this;
    }
    setTextBoxWidth(width: number): Slider {
        this._textBoxWidth = width;
        return this;
    }
    setValue(value: number): Slider {
        this._value = value;
        return this;
    }
}
