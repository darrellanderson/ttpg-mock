import { CheckBox, MulticastDelegate, Player } from "@tabletop-playground/api";
import { MockTextWidgetBase } from "../mock-text-widget-base";
import { MockMulticastDelegate } from "../../../multicast-delegate/mock-multicast-delegate";

export class MockCheckBox extends MockTextWidgetBase implements CheckBox {
  onCheckStateChanged: MulticastDelegate<
    (checkBox: this, player: Player, isChecked: boolean) => void
  > = new MockMulticastDelegate<
    (checkBox: this, player: Player, isChecked: boolean) => void
  >();

  setText(text: string): CheckBox {
    throw new Error("Method not implemented.");
  }
  setIsChecked(checked: boolean): CheckBox {
    throw new Error("Method not implemented.");
  }
  isChecked(): boolean {
    throw new Error("Method not implemented.");
  }
  getText(): string {
    throw new Error("Method not implemented.");
  }
}
