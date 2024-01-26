import { MockGameObject } from "../mock-game-object";
import { MockContainer, MockContainerParams } from "./mock-container";

it("constructor", () => {
  const obj = new MockGameObject();
  const params: MockContainerParams = {
    containerTags: ["my-container-tag"],
    items: [obj],
    maxItems: 97,
    type: 3,
  };
  const container = new MockContainer(params);
  expect(container.getContainerTags()).toEqual(params.containerTags);
  expect(container.getItems()).toEqual(params.items);
  expect(container.getMaxItems()).toEqual(params.maxItems);
  expect(container.getNumItems()).toEqual(params.items?.length);
  expect(container.getType()).toEqual(params.type);
  expect(obj.getContainer()).toEqual(container);
});

it("clear", () => {
  const obj = new MockGameObject();
  const container = new MockContainer({
    items: [obj],
  });
  expect(container.getNumItems()).toEqual(1);
  expect(obj.getContainer()).toEqual(container);
  container.clear();
  expect(container.getNumItems()).toEqual(0);
  expect(obj.getContainer()).toBeUndefined();
});

it("containerTags", () => {
  const input = ["a", "b"];
  const container = new MockContainer();
  container.setContainerTags(input);
  const output = container.getContainerTags();
  expect(output).toEqual(input);
});

it("maxItems", () => {
  const input = 7;
  const container = new MockContainer();
  container.setMaxItems(input);
  const output = container.getMaxItems();
  expect(output).toEqual(input);
});

it("type", () => {
  const input = 7;
  const container = new MockContainer();
  container.setType(input);
  const output = container.getType();
  expect(output).toEqual(input);
});

it("contains", () => {
  const obj1 = new MockGameObject();
  const obj2 = new MockGameObject();
  const container = new MockContainer({
    items: [obj1],
  });
  expect(container.contains(obj1)).toEqual(true);
  expect(container.contains(obj2)).toEqual(false);
});

it("getNextTakeIndex", () => {
  const container = new MockContainer({
    items: [new MockGameObject()],
  });
  let index = container.getNextTakeIndex();
  expect(index).toEqual(0);
  container.destroy();
  index = container.getNextTakeIndex();
  expect(index).toEqual(-1);
});

it("addObjects", () => {
  const obj1 = new MockGameObject();
  const obj2 = new MockGameObject();
  const container = new MockContainer({
    items: [obj1, obj2],
  });
  expect(container.getItems()).toEqual([obj1, obj2]);

  const obj3 = new MockGameObject();
  container.addObjects([obj3], 1);
  expect(container.getItems()).toEqual([obj1, obj3, obj2]);

  const obj4 = new MockGameObject();
  container.addObjects([obj4]);
  expect(container.getItems()).toEqual([obj4, obj1, obj3, obj2]);

  const obj5 = new MockGameObject();
  const obj6 = new MockGameObject();
  container.addObjects([obj5, obj6]);
  expect(container.getItems()).toEqual([obj5, obj6, obj4, obj1, obj3, obj2]);
});

it("insert", () => {
  const obj1 = new MockGameObject();
  const obj2 = new MockGameObject();
  const container = new MockContainer({
    items: [obj1, obj2],
  });
  expect(container.getItems()).toEqual([obj1, obj2]);
  const obj3 = new MockGameObject();
  container.insert([obj3], 1);
  expect(container.getItems()).toEqual([obj1, obj3, obj2]);
});

it("remove", () => {
  const obj1 = new MockGameObject();
  const obj2 = new MockGameObject();
  const obj3 = new MockGameObject();
  const container = new MockContainer({
    items: [obj1, obj2, obj3],
  });
  expect(container.getItems()).toEqual([obj1, obj2, obj3]);
  expect(obj1.getContainer()).toEqual(container);
  expect(obj2.getContainer()).toEqual(container);
  expect(obj3.getContainer()).toEqual(container);

  let success = container.remove(obj2);
  expect(success).toEqual(true);
  expect(container.getItems()).toEqual([obj1, obj3]);
  expect(obj1.getContainer()).toEqual(container);
  expect(obj2.getContainer()).toBeUndefined();
  expect(obj3.getContainer()).toEqual(container);

  success = container.remove(obj2);
  expect(success).toEqual(false);
  expect(container.getItems()).toEqual([obj1, obj3]);
  expect(obj1.getContainer()).toEqual(container);
  expect(obj2.getContainer()).toBeUndefined();
  expect(obj3.getContainer()).toEqual(container);
});

it("removeAt", () => {
  const obj1 = new MockGameObject();
  const obj2 = new MockGameObject();
  const obj3 = new MockGameObject();
  const container = new MockContainer({
    items: [obj1, obj2, obj3],
  });
  expect(container.getItems()).toEqual([obj1, obj2, obj3]);
  expect(obj1.getContainer()).toEqual(container);
  expect(obj2.getContainer()).toEqual(container);
  expect(obj3.getContainer()).toEqual(container);

  let success = container.removeAt(1);
  expect(success).toEqual(true);
  expect(container.getItems()).toEqual([obj1, obj3]);
  expect(obj1.getContainer()).toEqual(container);
  expect(obj2.getContainer()).toBeUndefined();
  expect(obj3.getContainer()).toEqual(container);

  success = container.removeAt(99);
  expect(success).toEqual(false);
  expect(container.getItems()).toEqual([obj1, obj3]);
  expect(obj1.getContainer()).toEqual(container);
  expect(obj2.getContainer()).toBeUndefined();
  expect(obj3.getContainer()).toEqual(container);
});

it("take", () => {
  const obj1 = new MockGameObject();
  const obj2 = new MockGameObject();
  const obj3 = new MockGameObject();
  const container = new MockContainer({
    items: [obj1, obj2, obj3],
  });
  expect(container.getItems()).toEqual([obj1, obj2, obj3]);
  expect(obj1.getContainer()).toEqual(container);
  expect(obj2.getContainer()).toEqual(container);
  expect(obj3.getContainer()).toEqual(container);

  let success = container.take(obj2, [0, 0, 0]);
  expect(success).toEqual(true);
  expect(container.getItems()).toEqual([obj1, obj3]);

  success = container.take(obj2, [0, 0, 0]);
  expect(success).toEqual(false);
  expect(container.getItems()).toEqual([obj1, obj3]);
});

it("takeAt", () => {
  const obj1 = new MockGameObject();
  const obj2 = new MockGameObject();
  const obj3 = new MockGameObject();
  const container = new MockContainer({
    items: [obj1, obj2, obj3],
  });
  expect(container.getItems()).toEqual([obj1, obj2, obj3]);
  expect(obj1.getContainer()).toEqual(container);
  expect(obj2.getContainer()).toEqual(container);
  expect(obj3.getContainer()).toEqual(container);

  let success = container.takeAt(1, [0, 0, 0]);
  expect(success).toEqual(obj2);
  expect(container.getItems()).toEqual([obj1, obj3]);
  expect(obj1.getContainer()).toEqual(container);
  expect(obj2.getContainer()).toBeUndefined();
  expect(obj3.getContainer()).toEqual(container);

  success = container.takeAt(99, [0, 0, 0]);
  expect(success).toBeUndefined();
  expect(container.getItems()).toEqual([obj1, obj3]);
  expect(obj1.getContainer()).toEqual(container);
  expect(obj2.getContainer()).toBeUndefined();
  expect(obj3.getContainer()).toEqual(container);
});

it("takeAt (keep)", () => {
  const obj1 = new MockGameObject();
  const obj2 = new MockGameObject();
  const obj3 = new MockGameObject();
  const container = new MockContainer({
    items: [obj1, obj2, obj3],
  });
  expect(container.getItems()).toEqual([obj1, obj2, obj3]);
  expect(obj1.getContainer()).toEqual(container);
  expect(obj2.getContainer()).toEqual(container);
  expect(obj3.getContainer()).toEqual(container);

  const showAnimation = undefined;
  const keep = true;
  let success = container.takeAt(1, [0, 0, 0], showAnimation, keep);
  expect(success).toEqual(obj2);
  expect(container.getItems()).toEqual([obj1, obj2, obj3]);
  expect(obj1.getContainer()).toEqual(container);
  expect(obj2.getContainer()).toEqual(container);
  expect(obj3.getContainer()).toEqual(container);
});
