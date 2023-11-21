import { MulticastDelegate, Player, TextBox } from "@tabletop-playground/api";
import { MockTextWidgetBase } from "../mock-text-widget-base";
import { MockMulticastDelegate } from "../../../multicast-delegate/mock-multicast-delegate";

export class MockTextBox extends MockTextWidgetBase implements TextBox {
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

  setText(text: string): TextBox {
    throw new Error("Method not implemented.");
  }
  setSelectTextOnFocus(selectAll: boolean): TextBox {
    throw new Error("Method not implemented.");
  }
  setMaxLength(length: number): TextBox {
    throw new Error("Method not implemented.");
  }
  setInputType(type: number): TextBox {
    throw new Error("Method not implemented.");
  }
  setBackgroundTransparent(transparent: boolean): TextBox {
    throw new Error("Method not implemented.");
  }
  isSelectTextOnFocus(): boolean {
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
  getInputType(): number {
    throw new Error("Method not implemented.");
  }
}
