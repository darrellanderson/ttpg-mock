import { MockCanvas, MockCanvasParams } from "./mock-canvas";
import { MockWidget } from "../mock-widget";

it("constructor", () => {
    const params: MockCanvasParams = {
        children: [new MockWidget()],
    };
    const canvas = new MockCanvas(params);
    expect(canvas.getChildren()).toEqual(params.children);
});

it("children", () => {
    const child1 = new MockWidget();
    const child2 = new MockWidget();
    expect(child1).not.toEqual(child2); // "_id" equality buster
    const canvas = new MockCanvas();

    canvas.addChild(child1, 0, 0, 0, 0);
    expect(canvas.getChildren()).toEqual([child1]);

    canvas.addChild(child2, 0, 0, 0, 0);
    expect(canvas.getChildren()).toEqual([child1, child2]);

    canvas.removeChild(child1);
    expect(canvas.getChildren()).toEqual([child2]);
});

it("updateChild", () => {
    const child1 = new MockWidget();
    const canvas = new MockCanvas({ children: [child1] });
    canvas.updateChild(child1, 0, 0, 0, 0);
});
