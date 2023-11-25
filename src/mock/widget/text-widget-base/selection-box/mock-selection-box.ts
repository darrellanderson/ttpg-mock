import {
  MulticastDelegate,
  Player,
  SelectionBox,
} from "@tabletop-playground/api";
import {
  MockTextWidgetBase,
  MockTextWidgetBaseParams,
} from "../mock-text-widget-base";
import { MockMulticastDelegate } from "../../../multicast-delegate/mock-multicast-delegate";

export type MockSelectionBoxParams = MockTextWidgetBaseParams & {
  options?: string[];
  selectedIndex?: number;
};

export class MockSelectionBox
  extends MockTextWidgetBase
  implements SelectionBox
{
  private _options: string[] = [];
  private _selectedIndex: number = 0;

  onSelectionChanged: MulticastDelegate<
    (selectionBox: this, player: Player, index: number, option: string) => void
  > = new MockMulticastDelegate<
    (selectionBox: this, player: Player, index: number, option: string) => void
  >();

  constructor(params?: MockSelectionBoxParams) {
    super(params);
    if (params?.options !== undefined) {
      this._options = params.options;
    }
    if (params?.selectedIndex !== undefined) {
      this._selectedIndex = params.selectedIndex;
    }
  }

  addOption(option: string): SelectionBox {
    this._options.push(option);
    return this;
  }
  getOptions(): string[] {
    return [...this._options];
  }
  getSelectedIndex(): number {
    return this._selectedIndex;
  }
  getSelectedOption(): string {
    return this._options[this._selectedIndex];
  }
  removeOption(option: string): SelectionBox {
    const index = this._options.indexOf(option);
    if (index >= 0) {
      this._options.splice(index, 1);
    }
    return this;
  }
  setOptions(options: string[]): SelectionBox {
    this._options = options;
    return this;
  }
  setSelectedIndex(index: number): SelectionBox {
    this._selectedIndex = index;
    return this;
  }
  setSelectedOption(text: string): SelectionBox {
    const index = this._options.indexOf(text);
    if (index >= 0) {
      this._selectedIndex = index;
    }
    return this;
  }
}
