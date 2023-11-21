import { Button, MulticastDelegate, Player } from "@tabletop-playground/api";
import { MockMulticastDelegate } from "../../../multicast-delegate/mock-multicast-delegate";
import { MockTextWidgetBase } from "../mock-text-widget-base";

export class MockButton extends MockTextWidgetBase implements Button {
  onClicked: MulticastDelegate<(button: this, player: Player) => void> =
    new MockMulticastDelegate();

  setText(text: string): Button {
    throw new Error("Method not implemented.");
  }
  setJustification(justification: number): Button {
    throw new Error("Method not implemented.");
  }
  getText(): string {
    throw new Error("Method not implemented.");
  }
  getJustification(): number {
    throw new Error("Method not implemented.");
  }
}
