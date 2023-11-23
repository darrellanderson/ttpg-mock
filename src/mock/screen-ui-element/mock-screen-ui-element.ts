import {
  PlayerPermission,
  ScreenUIElement,
  Widget,
} from "@tabletop-playground/api";
import { MockWidget } from "../widget/mock-widget";
import { MockPlayerPermission } from "../player-permission/mock-player-permission";

export type MockScreenUIElementParams = {
  widget?: Widget;
  positionX?: number;
  positionY?: number;
  relativePositionX?: boolean;
  relativePositionY?: boolean;
  width?: number;
  height?: number;
  relativeWidth?: boolean;
  relativeHeight?: boolean;
  anchorX?: number;
  anchorY?: number;
  players?: PlayerPermission;
};

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

  constructor(params?: MockScreenUIElementParams) {
    if (params?.widget) {
      this.widget = params.widget;
    }
    if (params?.positionX !== undefined) {
      this.positionX = params.positionX;
    }
    if (params?.positionY !== undefined) {
      this.positionY = params.positionY;
    }
    if (params?.relativePositionX !== undefined) {
      this.relativePositionX = params.relativePositionX;
    }
    if (params?.relativePositionY !== undefined) {
      this.relativePositionY = params.relativePositionY;
    }
    if (params?.width !== undefined) {
      this.width = params.width;
    }
    if (params?.height !== undefined) {
      this.height = params.height;
    }
    if (params?.relativeWidth !== undefined) {
      this.relativeWidth = params.relativeWidth;
    }
    if (params?.relativeHeight !== undefined) {
      this.relativeHeight = params.relativeHeight;
    }
    if (params?.anchorX !== undefined) {
      this.anchorX = params.anchorX;
    }
    if (params?.anchorY !== undefined) {
      this.anchorY = params.anchorY;
    }
    if (params?.players) {
      this.players = params.players;
    }
  }

  clone(): ScreenUIElement {
    const clone = new ScreenUIElement();
    clone.widget = this.widget;
    clone.positionX = this.positionX;
    clone.positionY = this.positionY;
    clone.relativePositionX = this.relativePositionX;
    clone.relativePositionY = this.relativePositionY;
    clone.width = this.width;
    clone.height = this.height;
    clone.relativeWidth = this.relativeWidth;
    clone.relativeHeight = this.relativeHeight;
    clone.anchorX = this.anchorX;
    clone.anchorY = this.anchorY;
    clone.players = this.players;
    return clone;
  }
}
