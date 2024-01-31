import { MockGameObject } from "../static-object/game-object/mock-game-object";
import { MockWidget, MockWidgetParams } from "./mock-widget";

it("constructor", () => {
    const params: MockWidgetParams = {
        visible: false,
        enabled: false,
        parent: new MockWidget(),
        owningObject: new MockGameObject(),
    };
    const widget = new MockWidget(params);
    expect(widget.isVisible()).toEqual(params.visible);
    expect(widget.isEnabled()).toEqual(params.enabled);
    expect(widget.getParent()).toEqual(params.parent);
    expect(widget.getOwningObject()).toEqual(params.owningObject);
});

it("visible", () => {
    const input = false;
    const widget = new MockWidget();
    widget.setVisible(input);
    const output = widget.isVisible();
    expect(output).toEqual(input);
});

it("enabled", () => {
    const input = false;
    const widget = new MockWidget();
    widget.setEnabled(input);
    const output = widget.isEnabled();
    expect(output).toEqual(input);
});

it("_id", () => {
    const w1 = new MockWidget();
    const w2 = new MockWidget();
    expect(w1._getId()).not.toEqual(w2._getId());
    expect(w1).not.toEqual(w2); // id fields breaks equality for simpler testing
});
