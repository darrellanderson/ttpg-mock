import { Button, MulticastDelegate, Player } from "@tabletop-playground/api";
import { MockMulticastDelegate } from "../../../multicast-delegate/mock-multicast-delegate";
import {
  MockTextWidgetBase,
  MockTextWidgetBaseParams,
} from "../mock-text-widget-base";
import { TextJustification } from "../../../../enums";

export type MockButtonParams = MockTextWidgetBaseParams & {
  justification?: number;
  text?: string;
};

export class MockButton extends MockTextWidgetBase implements Button {
  private _justification: number = TextJustification.Center;
  private _text: string = "";

  onClicked: MulticastDelegate<(button: this, player: Player) => void> =
    new MockMulticastDelegate();

  constructor(params?: MockButtonParams) {
    super(params);
    if (params?.justification !== undefined) {
      this._justification = params.justification;
    }
    if (params?.text) {
      this._text = params.text;
    }
  }

  getJustification(): number {
    return this._justification;
  }

  getText(): string {
    return this._text;
  }

  setJustification(justification: number): Button {
    this._justification = justification;
    return this;
  }

  setText(text: string): Button {
    this._text = text;
    return this;
  }
}
