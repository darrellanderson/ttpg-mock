import { MulticastDelegate, Player, TextBox } from "@tabletop-playground/api";
import {
  MockTextWidgetBase,
  MockTextWidgetBaseParams,
} from "../mock-text-widget-base";
import { MockMulticastDelegate } from "../../../multicast-delegate/mock-multicast-delegate";

export type MockTextBoxParams = MockTextWidgetBaseParams & {
  inputType?: number;
  maxLength?: number;
  text?: string;
  isBackgroundTransparent?: boolean;
  isSelectTextOnFocus?: boolean;
};

export class MockTextBox extends MockTextWidgetBase implements TextBox {
  private _inputType: number = 0;
  private _maxLength: number = 100;
  private _text: string = "";
  private _isBackgroundTransparent: boolean = false;
  private _isSelectTextOnFocus: boolean = false;

  onTextChanged: MulticastDelegate<
    (textBox: this, player: Player, text: string) => void
  > = new MockMulticastDelegate<
    (textBox: this, player: Player, text: string) => void
  >();
  onTextCommitted: MulticastDelegate<
    (textBox: this, player: Player, text: string, usingEnter: boolean) => void
  > = new MockMulticastDelegate<
    (textBox: this, player: Player, text: string, usingEnter: boolean) => void
  >();

  constructor(params?: MockTextBoxParams) {
    super(params);
    if (params?.inputType !== undefined) {
      this._inputType = params.inputType;
    }
    if (params?.maxLength !== undefined) {
      this._maxLength = params.maxLength;
    }
    if (params?.text !== undefined) {
      this._text = params.text;
    }
    if (params?.isBackgroundTransparent !== undefined) {
      this._isBackgroundTransparent = params.isBackgroundTransparent;
    }
    if (params?.isSelectTextOnFocus !== undefined) {
      this._isSelectTextOnFocus = params.isSelectTextOnFocus;
    }
  }

  getInputType(): number {
    return this._inputType;
  }
  getMaxLength(): number {
    return this._maxLength;
  }
  getText(): string {
    return this._text;
  }
  isBackgroundTransparent(): boolean {
    return this._isBackgroundTransparent;
  }
  isSelectTextOnFocus(): boolean {
    return this._isSelectTextOnFocus;
  }
  setBackgroundTransparent(transparent: boolean): TextBox {
    this._isBackgroundTransparent = transparent;
    return this;
  }
  setInputType(type: number): TextBox {
    this._inputType = type;
    return this;
  }
  setMaxLength(length: number): TextBox {
    this._maxLength = length;
    return this;
  }
  setSelectTextOnFocus(selectAll: boolean): TextBox {
    this._isSelectTextOnFocus = selectAll;
    return this;
  }
  setText(text: string): TextBox {
    this._text = text;
    return this;
  }
}
