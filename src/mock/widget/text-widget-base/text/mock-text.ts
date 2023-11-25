import { Text } from "@tabletop-playground/api";
import {
  MockTextWidgetBase,
  MockTextWidgetBaseParams,
} from "../mock-text-widget-base";
import { TextJustification } from "../../../../enums";

export type MockTextParams = MockTextWidgetBaseParams & {
  autoWrap?: boolean;
  justifcation?: number;
  text?: string;
};

export class MockText extends MockTextWidgetBase implements Text {
  private _autoWrap: boolean = false;
  private _justifcation: number = TextJustification.Left;
  private _text: string = "";

  constructor(params?: MockTextParams) {
    super(params);
    if (params?.autoWrap !== undefined) {
      this._autoWrap = params.autoWrap;
    }
    if (params?.justifcation !== undefined) {
      this._justifcation = params.justifcation;
    }
    if (params?.text !== undefined) {
      this._text = params.text;
    }
  }

  getAutoWrap(): boolean {
    return this._autoWrap;
  }
  getJustification(): number {
    return this._justifcation;
  }
  getText(): string {
    return this._text;
  }
  setAutoWrap(autoWrap: boolean): Text {
    this._autoWrap = autoWrap;
    return this;
  }
  setJustification(justification: number): Text {
    this._justifcation = justification;
    return this;
  }
  setText(text: string): Text {
    this._text = text;
    return this;
  }
}
