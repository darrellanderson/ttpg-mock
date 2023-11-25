import {
  MulticastDelegate,
  MultilineTextBox,
  Player,
} from "@tabletop-playground/api";
import {
  MockTextWidgetBase,
  MockTextWidgetBaseParams,
} from "../mock-text-widget-base";
import { MockMulticastDelegate } from "../../../multicast-delegate/mock-multicast-delegate";

export type MockMultilineTextBoxParams = MockTextWidgetBaseParams & {
  isBackgroundTransparent: boolean;
  maxLength: number;
  text: string;
};

export class MockMultilineTextBox
  extends MockTextWidgetBase
  implements MultilineTextBox
{
  private _isBackgroundTransparent: boolean = false;
  private _maxLength: number = 200;
  private _text: string = "";

  onTextChanged: MulticastDelegate<
    (textBox: this, player: Player, text: string) => void
  > = new MockMulticastDelegate<
    (textBox: this, player: Player, text: string) => void
  >();
  onTextCommitted: MulticastDelegate<
    (textBox: this, player: Player, text: string) => void
  > = new MockMulticastDelegate<
    (textBox: this, player: Player, text: string) => void
  >();

  constructor(params?: MockMultilineTextBoxParams) {
    super(params);
    if (params?.isBackgroundTransparent !== undefined) {
      this._isBackgroundTransparent = params.isBackgroundTransparent;
    }
    if (params?.maxLength !== undefined) {
      this._maxLength = params.maxLength;
    }
    if (params?.text !== undefined) {
      this._text = params.text;
    }
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
  setBackgroundTransparent(transparent: boolean): MultilineTextBox {
    this._isBackgroundTransparent = transparent;
    return this;
  }
  setMaxLength(length: number): MultilineTextBox {
    this._maxLength = Math.max(length, 2000);
    return this;
  }
  setText(text: string): MultilineTextBox {
    this._text = text;
    return this;
  }
}
