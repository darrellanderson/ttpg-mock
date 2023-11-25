import { RichText } from "@tabletop-playground/api";
import {
  MockTextWidgetBase,
  MockTextWidgetBaseParams,
} from "../mock-text-widget-base";
import { TextJustification } from "../../../../enums";

export type MockRichTextParams = MockTextWidgetBaseParams & {
  autoWrap?: boolean;
  justification?: number;
  text?: string;
};

export class MockRichText extends MockTextWidgetBase implements RichText {
  private _autoWrap: boolean = false;
  private _justification: number = TextJustification.Left;
  private _text: string = "";

  constructor(params?: MockRichTextParams) {
    super(params);
    if (params?.autoWrap !== undefined) {
      this._autoWrap = params.autoWrap;
    }
    if (params?.justification !== undefined) {
      this._justification = params.justification;
    }
    if (params?.text) {
      this._text = params.text;
    }
  }

  getAutoWrap(): boolean {
    return this._autoWrap;
  }
  getJustification(): number {
    return this._justification;
  }
  getText(): string {
    return this._text;
  }
  setAutoWrap(autoWrap: boolean): RichText {
    this._autoWrap = autoWrap;
    return this;
  }
  setJustification(justification: number): RichText {
    this._justification = justification;
    return this;
  }
  setText(text: string): RichText {
    this._text = text;
    return this;
  }
}
