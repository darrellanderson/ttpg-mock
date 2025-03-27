import { CheckBox, MulticastDelegate, Player } from "@tabletop-playground/api";
import {
    MockTextWidgetBase,
    MockTextWidgetBaseParams,
} from "../mock-text-widget-base";
import { MockMulticastDelegate } from "../../../multicast-delegate/mock-multicast-delegate";

export type MockCheckBoxParams = MockTextWidgetBaseParams & {
    isChecked?: boolean;
    isTransparent?: boolean;
    text?: string;
};

export class MockCheckBox extends MockTextWidgetBase implements CheckBox {
    private _isChecked: boolean = false;
    private _isTransparent: boolean = false;
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
        if (params?.isTransparent !== undefined) {
            this._isTransparent = params.isTransparent;
        }
        if (params?.text) {
            this._text = params.text;
        }
    }

    _clickAsPlayer(player: Player): this {
        const onCheckStateChanged = this
            .onCheckStateChanged as MockMulticastDelegate<
            (checkBox: this, player: Player, isChecked: boolean) => void
        >;
        this._isChecked = !this._isChecked;
        onCheckStateChanged._trigger(this, player, this._isChecked);
        return this;
    }

    setBackgroundTransparent(transparent: boolean): CheckBox {
        this._isTransparent = transparent;
        return this;
    }

    isBackgroundTransparent(): boolean {
        return this._isTransparent;
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
