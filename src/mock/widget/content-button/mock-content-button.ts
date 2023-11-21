import {
  ContentButton,
  MulticastDelegate,
  Player,
  Widget,
} from "@tabletop-playground/api";
import { MockMulticastDelegate } from "../../multicast-delegate/mock-multicast-delegate";
import { MockWidget } from "../mock-widget";

export class MockContentButton extends MockWidget implements ContentButton {
  onClicked: MulticastDelegate<(button: this, player: Player) => void> =
    new MockMulticastDelegate<(button: this, player: Player) => void>();

  setChild(child?: Widget | undefined): ContentButton {
    throw new Error("Method not implemented.");
  }
  getChild(): Widget | undefined {
    throw new Error("Method not implemented.");
  }
}
