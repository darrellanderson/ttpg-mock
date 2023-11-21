import { Color, ProgressBar } from "@tabletop-playground/api";
import { MockTextWidgetBase } from "../mock-text-widget-base";

export class MockProgressBar extends MockTextWidgetBase implements ProgressBar {
  setText(text: string): ProgressBar {
    throw new Error("Method not implemented.");
  }
  setProgress(progress: number): ProgressBar {
    throw new Error("Method not implemented.");
  }
  setBarColor(
    barColor: Color | [r: number, g: number, b: number, a: number]
  ): ProgressBar {
    throw new Error("Method not implemented.");
  }
  getText(): string {
    throw new Error("Method not implemented.");
  }
  getProgress(): number {
    throw new Error("Method not implemented.");
  }
  getBarColor(): Color {
    throw new Error("Method not implemented.");
  }
}
