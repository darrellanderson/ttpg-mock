import { GameObject, Widget } from "@tabletop-playground/api";

export type MockWidgetParams = {
  visible?: boolean;
  enabled?: boolean;
  parent?: Widget;
  owningObject?: GameObject;
};

export class MockWidget implements Widget {
  // two "clean" widgets not expect(a).toEqual(b)!
  private static __index = 0;
  private __id = `__widget_${MockWidget.__index++}__`;

  private _visible: boolean = true;
  private _enabled: boolean = true;
  private _parent: Widget | undefined = undefined;
  private _owningObject: GameObject | undefined = undefined;

  constructor(params?: MockWidgetParams) {
    if (params?.visible !== undefined) {
      this._visible = params.visible;
    }
    if (params?.enabled !== undefined) {
      this._enabled = params.enabled;
    }
    if (params?.parent) {
      this._parent = params.parent;
    }
    if (params?.owningObject) {
      this._owningObject = params.owningObject;
    }
  }

  setVisible(visible: boolean): Widget {
    this._visible = visible;
    return this;
  }

  setEnabled(enabled: boolean): this {
    this._enabled = enabled;
    return this;
  }

  isVisible(): boolean {
    return this._visible;
  }
  isEnabled(): boolean {
    return this._enabled;
  }

  getParent(): Widget | undefined {
    return this._parent;
  }

  getOwningObject(): GameObject | undefined {
    return this._owningObject;
  }

  _getId(): string {
    return this.__id;
  }
}
