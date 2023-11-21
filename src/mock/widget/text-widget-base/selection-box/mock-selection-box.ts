import {
  MulticastDelegate,
  Player,
  SelectionBox,
} from "@tabletop-playground/api";
import { MockTextWidgetBase } from "../mock-text-widget-base";
import { MockMulticastDelegate } from "../../../multicast-delegate/mock-multicast-delegate";

export class MockSelectionBox
  extends MockTextWidgetBase
  implements SelectionBox
{
  onSelectionChanged: MulticastDelegate<
    (selectionBox: this, player: Player, index: number, option: string) => void
  > = new MockMulticastDelegate<
    (selectionBox: this, player: Player, index: number, option: string) => void
  >();

  setSelectedOption(text: string): SelectionBox {
    throw new Error("Method not implemented.");
  }
  setSelectedIndex(index: number): SelectionBox {
    throw new Error("Method not implemented.");
  }
  setOptions(options: string[]): SelectionBox {
    throw new Error("Method not implemented.");
  }
  removeOption(option: string): SelectionBox {
    throw new Error("Method not implemented.");
  }
  getSelectedOption(): string {
    throw new Error("Method not implemented.");
  }
  getSelectedIndex(): number {
    throw new Error("Method not implemented.");
  }
  getOptions(): string[] {
    throw new Error("Method not implemented.");
  }
  addOption(option: string): SelectionBox {
    throw new Error("Method not implemented.");
  }
}
