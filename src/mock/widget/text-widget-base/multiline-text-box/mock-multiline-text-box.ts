import {
  MulticastDelegate,
  MultilineTextBox,
  Player,
} from "@tabletop-playground/api";
import { MockTextWidgetBase } from "../mock-text-widget-base";
import { MockMulticastDelegate } from "../../../multicast-delegate/mock-multicast-delegate";

export class MockMultilineTextBox
  extends MockTextWidgetBase
  implements MultilineTextBox
{
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

  setText(text: string): MultilineTextBox {
    throw new Error("Method not implemented.");
  }
  setMaxLength(length: number): MultilineTextBox {
    throw new Error("Method not implemented.");
  }
  setBackgroundTransparent(transparent: boolean): MultilineTextBox {
    throw new Error("Method not implemented.");
  }
  isBackgroundTransparent(): boolean {
    throw new Error("Method not implemented.");
  }
  getText(): string {
    throw new Error("Method not implemented.");
  }
  getMaxLength(): number {
    throw new Error("Method not implemented.");
  }
}
