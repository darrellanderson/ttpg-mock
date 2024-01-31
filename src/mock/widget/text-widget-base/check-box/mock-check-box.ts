import { CheckBox, MulticastDelegate, Player } from "@tabletop-playground/api";
import {
    MockTextWidgetBase,
    MockTextWidgetBaseParams,
} from "../mock-text-widget-base";
import { MockMulticastDelegate } from "../../../multicast-delegate/mock-multicast-delegate";

export type MockCheckBoxParams = MockTextWidgetBaseParams & {
    isChecked?: boolean;
    text?: string;
};

export class MockCheckBox extends MockTextWidgetBase implements CheckBox {
    private _isChecked: boolean = false;
    private _text: string = "";

    onCheckStateChanged: MulticastDelegate<
        (checkBox: this, player: Player, isChecked: boolean) => void
    > = new MockMulticastDelegate<
        (checkBox: this, player: Player, isChecked: boolean) => void
    >();

    constructor(params?: MockCheckBoxParams) {
        super(params);
        if (params?.isChecked !== undefined) {
            this._isChecked = params.isChecked;
        }
        if (params?.text) {
            this._text = params.text;
        }
    }

    getText(): string {
        return this._text;
    }
    isChecked(): boolean {
        return this._isChecked;
    }
    setIsChecked(checked: boolean): CheckBox {
        this._isChecked = checked;
        return this;
    }
    setText(text: string): CheckBox {
        this._text = text;
        return this;
    }
}
