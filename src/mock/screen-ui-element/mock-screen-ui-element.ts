import {
  PlayerPermission,
  ScreenUIElement,
  Widget,
} from "@tabletop-playground/api";
import { MockWidget } from "../widget/mock-widget";
import { MockPlayerPermission } from "../player-permission/mock-player-permission";

export class MockScreenUIElement implements ScreenUIElement {
  widget: Widget = new MockWidget();
  positionX: number = 0;
  positionY: number = 0;
  relativePositionX: boolean = true;
  relativePositionY: boolean = true;
  width: number = 160;
  height: number = 90;
  relativeWidth: boolean = false;
  relativeHeight: boolean = false;
  anchorX: number = 0;
  anchorY: number = 0;
  players: PlayerPermission = new MockPlayerPermission();

  clone(): ScreenUIElement {
    throw new Error("Method not implemented.");
  }
}
