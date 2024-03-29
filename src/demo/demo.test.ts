/*
 * The jest-config will redirect "@tabletop-playground/api" to ttpg-mock.
 */
import {
    FetchOptions,
    FetchResponse,
    GameObject,
    GridSnapType,
    Player,
    Rotator,
    Vector,
    fetch,
    globalEvents,
    world,
} from "@tabletop-playground/api";

/*
 * With the "ttpg-mock" node module installed, this would be:
 *
 * import { ... } from "ttpg-mock"
 */
import {
    MockGameObject,
    MockGameObjectParams,
    MockMulticastDelegate,
    MockPlayer,
    mockWorld,
} from "../index";

it("enum", () => {
    const x = GridSnapType.Center;
    expect(x).toEqual(1);
});

it("variable", () => {
    // Call method on "world" with typed response.
    const objs: GameObject[] = world.getAllObjects();
    expect(Array.isArray(objs)).toEqual(true);
});

it("function", () => {
    // Call "fetch" function with typed response.
    const url: string = "http://www.example.com";
    const options: FetchOptions = {};
    const response: Promise<FetchResponse> = fetch(url, options);
    expect(response !== undefined).toEqual(true);
});

it("mock classes", () => {
    // Create a mock object, use with base type.
    const params: MockGameObjectParams = {
        position: [1, 0, 0],
        templateMetadata: "my-metadata",
    };
    const obj: GameObject = new MockGameObject(params);
    expect(obj.getPosition().magnitude()).toEqual(1);
    expect(obj.getTemplateMetadata()).toEqual("my-metadata");

    // Use as type.
    let arg: GameObject | undefined;
    const f = (o: GameObject) => {
        arg = o;
    };
    f(obj);
    expect(arg).toEqual(obj);

    // Call method on mocked object (make sure those work!).
    const obj2: GameObject = new MockGameObject();
    const v: Vector = obj2.getPosition();
    const m: number = v.magnitude();
    expect(m).toEqual(0);
});

it("new + typed", () => {
    const v: Vector = new Vector(0, 0, 0);
    const m: number = v.magnitude(); // call method
    expect(m).toEqual(0);
});

it("instanceof", () => {
    const v: Vector = new Vector(0, 0, 0);
    const is = v instanceof Vector;
    expect(is).toEqual(true);
    const isNot = v instanceof Rotator;
    expect(isNot).toEqual(false);
});

it("world._reset", () => {
    const obj: GameObject = new MockGameObject();
    mockWorld._reset({ gameObjects: [obj] });
    expect(world.getAllObjects()).toEqual([obj]);
});

it("events", () => {
    const fakePlayer = new MockPlayer();
    const fakeMessage = "hello";

    // Listen for onChatMessage, require the fake info.
    let listenerCalled = false;
    globalEvents.onChatMessage.add((sender, message) => {
        if (sender !== fakePlayer || message !== fakeMessage) {
            throw new Error("bad");
        }
        listenerCalled = true;
    });

    // Cast to the mock version to access _trigger.
    const mock = globalEvents.onChatMessage as MockMulticastDelegate<
        (sender: Player, message: string) => void
    >;
    mock._trigger(fakePlayer, fakeMessage);
    expect(listenerCalled).toEqual(true);

    globalEvents.onChatMessage.clear();
});
