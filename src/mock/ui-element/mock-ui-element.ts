import {
    PlayerPermission,
    Rotator,
    UIElement,
    Vector,
    Widget,
} from "@tabletop-playground/api";
import { MockVector } from "../vector/mock-vector";
import { MockRotator } from "../rotator/mock-rotator";
import { MockPlayerPermission } from "../player-permission/mock-player-permission";
import { MockWidget } from "../widget/mock-widget";
import { UIPresentationStyle, UIZoomVisibility } from "../../enums";

export type MockUIElementParams = {
    widget: Widget;
    position: Vector;
    rotation: Rotator;
    scale: number;
    useWidgetSize: boolean;
    width: number;
    height: number;
    useTransparency: boolean;
    anchorX: number;
    anchorY: number;
    presentationStyle: number;
    twoSided: boolean;
    players: PlayerPermission;
    zoomVisibility: number;
};

export class MockUIElement implements UIElement {
    widget: Widget = undefined as unknown as MockWidget;
    position: Vector = new MockVector(0, 0, 0);
    rotation: Rotator = new MockRotator(0, 0, 0);
    scale: number = 1;
    useWidgetSize: boolean = false;
    width: number = 160;
    height: number = 90;
    useTransparency: boolean = false;
    anchorX: number = 0.5;
    anchorY: number = 0.5;
    presentationStyle: number = UIPresentationStyle.Regular;
    twoSided: boolean = false;
    players: PlayerPermission = new MockPlayerPermission();
    zoomVisibility: number = UIZoomVisibility.Regular;

    constructor(params?: MockUIElementParams) {
        if (params?.widget) {
            this.widget = params.widget;
        }
        if (params?.position) {
            this.position = params.position;
        }
        if (params?.rotation) {
            this.rotation = params.rotation;
        }
        if (params?.scale !== undefined) {
            this.scale = params.scale;
        }
        if (params?.useWidgetSize !== undefined) {
            this.useWidgetSize = params.useWidgetSize;
        }
        if (params?.width !== undefined) {
            this.width = params.width;
        }
        if (params?.height !== undefined) {
            this.height = params.height;
        }
        if (params?.useTransparency !== undefined) {
            this.useTransparency = params.useTransparency;
        }
        if (params?.anchorX !== undefined) {
            this.anchorX = params.anchorX;
        }
        if (params?.anchorY !== undefined) {
            this.anchorY = params.anchorY;
        }
        if (params?.presentationStyle !== undefined) {
            this.presentationStyle = params.presentationStyle;
        }
        if (params?.twoSided !== undefined) {
            this.twoSided = params.twoSided;
        }
        if (params?.players) {
            this.players = params.players;
        }
        if (params?.zoomVisibility !== undefined) {
            this.zoomVisibility = params.zoomVisibility;
        }
    }

    clone(): UIElement {
        const clone = new MockUIElement();
        clone.widget = this.widget;
        clone.position = this.position.clone();
        clone.rotation = this.rotation.clone();
        clone.scale = this.scale;
        clone.useWidgetSize = this.useWidgetSize;
        clone.width = this.width;
        clone.height = this.height;
        clone.useTransparency = this.useTransparency;
        clone.presentationStyle = this.presentationStyle;
        clone.twoSided = this.twoSided;
        clone.players = this.players.clone();
        clone.zoomVisibility = this.zoomVisibility;
        return clone;
    }
}
