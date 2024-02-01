import { MockGameObject } from "../static-object/game-object/mock-game-object";
import { MockSwitcher, MockSwitcherParams } from "./mock-switcher";

it("constructor", () => {
    const obj1 = new MockGameObject();
    const obj2 = new MockGameObject();
    const params: MockSwitcherParams = {
        gameObjects: [obj1, obj2],
        index: 1,
        isValid: false,
    };
    const switcher = new MockSwitcher(params);
    expect(switcher.contains(obj1)).toEqual(true);
    expect(switcher.getCurrentObject()).toEqual(obj2);
    expect(switcher.getCurrentObjectIndex()).toEqual(1);
    expect(switcher.getNumObjects()).toEqual(2);
    expect(switcher.getObjectAt(0)).toEqual(obj1);
    expect(switcher.isValid()).toEqual(params.isValid);
});

it("addObjects", () => {
    const obj1 = new MockGameObject();
    const obj2 = new MockGameObject();

    const switcher = new MockSwitcher();
    expect(switcher.getNumObjects()).toEqual(0);

    switcher.addObjects([obj1]);
    expect(switcher.getNumObjects()).toEqual(1);
    expect(switcher.getObjectAt(0)).toEqual(obj1);

    switcher.addObjects([obj2], 0);
    expect(switcher.getNumObjects()).toEqual(2);
    expect(switcher.getObjectAt(0)).toEqual(obj2);
    expect(switcher.getObjectAt(1)).toEqual(obj1);
});

it("destroy", () => {
    const switcher = new MockSwitcher();
    expect(switcher.isValid()).toEqual(true);
    switcher.destroy();
    expect(switcher.isValid()).toEqual(false);
});

it("remove", () => {
    const obj1 = new MockGameObject();
    const obj2 = new MockGameObject();
    const switcher = new MockSwitcher();
    switcher.addObjects([obj1, obj2]);
    expect(switcher.getNumObjects()).toEqual(2);
    expect(switcher.getObjectAt(0)).toEqual(obj1);
    expect(switcher.getObjectAt(1)).toEqual(obj2);

    let success = switcher.remove(obj1);
    expect(success).toEqual(true);
    expect(switcher.getNumObjects()).toEqual(1);
    expect(switcher.getObjectAt(0)).toEqual(obj2);

    success = switcher.remove(obj1);
    expect(success).toEqual(false);
});

it("setObjectIndex", () => {
    const obj1 = new MockGameObject();
    const obj2 = new MockGameObject();
    const switcher = new MockSwitcher();
    switcher.addObjects([obj1, obj2]);
    expect(switcher.getCurrentObjectIndex()).toEqual(0);
    switcher.setObjectIndex(1);
    expect(switcher.getCurrentObjectIndex()).toEqual(1);
});
