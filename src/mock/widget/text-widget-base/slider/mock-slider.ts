import { MulticastDelegate, Player, Slider } from "@tabletop-playground/api";
import { MockTextWidgetBase } from "../mock-text-widget-base";
import { MockMulticastDelegate } from "../../../multicast-delegate/mock-multicast-delegate";

export class MockSlider extends MockTextWidgetBase implements Slider {
  onValueChanged: MulticastDelegate<
    (slider: this, player: Player, value: number) => void
  > = new MockMulticastDelegate<
    (slider: this, player: Player, value: number) => void
  >();

  setValue(value: number): Slider {
    throw new Error("Method not implemented.");
  }
  setTextBoxWidth(width: number): Slider {
    throw new Error("Method not implemented.");
  }
  setStepSize(stepSize: number): Slider {
    throw new Error("Method not implemented.");
  }
  setMinValue(minValue: number): Slider {
    throw new Error("Method not implemented.");
  }
  setMaxValue(maxValue: number): Slider {
    throw new Error("Method not implemented.");
  }
  getValue(): number {
    throw new Error("Method not implemented.");
  }
  getTextBoxWidth(): number {
    throw new Error("Method not implemented.");
  }
  getStepSize(): number {
    throw new Error("Method not implemented.");
  }
  getMinValue(): number {
    throw new Error("Method not implemented.");
  }
  getMaxValue(): number {
    throw new Error("Method not implemented.");
  }
}
