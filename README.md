# ttpg-mock

Mock `@tabletop-playground/api` for TypeScript-compatible jest unittesting. Write your scripts normally, jest will redirect that api reference to the mocked version.

> [!Note]
> Your normal build process will never use any `ttpg-mock` assets, those are only used during jest test runs (your test scripts _may_ import them to access mock classes; production scripts never will).

Using the package manager of your choice, install (yarn in this case):

```
yarn add -D ttpg-mock
yarn add -D three
```

Create or edit your `jest.config.js` file to have this `moduleNameMapper` entry, redirecting the TTPG api to our mock version:

```
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",

  moduleNameMapper: {
    "^@tabletop-playground/api$": "ttpg-mock",
  },
};
```

Edd a "test" entry to the scripts in your package.json:

```
{
  ...
  "scripts": {
    ...
    "test": "jest"
    ...
  },
  ...
}
```

Run jest with a `.test.ts` file or directory:

```
% yarn test src/.../my-file.test.ts
```

## Environment

There may be places your scripts want to behave differently when under test (e.g., `setTimeout`). You can check `GameWorld.getExectutionReason() === "unittest"`.

## Mock classes

When needed, create mock instances of objects often filling any necessary state in the constructor. Import mock classes from `ttpg-mock`, for instance:

```typescript
import { MockGameObject, MockGameObjectParams } from "ttpg-mock";

it("mock class", () => {
    const params: MockGameObjectParams = {
        position: [1, 0, 0],
        templateMetadata: "my-metadata",
    };
    const obj: GameObject = new MockGameObject(params);
    expect(obj.getPosition().magnitude()).toEqual(1);
    expect(obj.getTemplateMetadata()).toEqual("my-metadata");
});
```

## Populating the world

Mock GameObjects, tables, and Players are registered with `world` automatically. You can explicitly set the available items using `mockWorld` (same object as `world` but with some new methods exposed):

```typescript
import { GameObject, world } from "@tabletop-playground/api";
import { MockGameObject, mockWorld } from "ttpg-mock";

it("mockWorld._reset", () => {
    const obj: GameObject = new MockGameObject();
    mockWorld._reset({ gameObjects: [obj] });
    expect(world.getAllObjects()).toEqual([obj]);

    mockWorld._reset(); // clears everything
});
```

## Events

Some events like `onObjectCreated` and `onPlayerJoined` are sent when creating a new GameObject or Player. Likewise GameObject.destroy sends `onObjectDestroyed` and Player.switchSlot sends `onPlayerSwitchedSlots`.

Many event senders are available when casting to the mock class, e.g.:

-   MockButton.\_clickAsPlayer
-   MockContentButton.\_clickAsPlayer
-   MockImageButton.\_clickAsPlayer
-   MockCard.\_addCardsAsPlayer
-   MockCard.\_takeCardsAsPlayer
-   MockContainer.\_addObjectsAsPlayer
-   MockContainer.\_takeAsPlayer
-   MockGameObject.\_flipOrUprightAsPlayer
-   MockGameObject.\_grabAsPlayer
-   MockGameObject.\_releaseAsPlayer
-   MockGameObject.\_snapAsPlayer (GameObject.onSnapped, StaticObject.onSnappedTo)
-   MockGameObject.\_primaryActionAsPlayer
-   MockGameObject.\_secondaryActionAsPlayer
-   MockGameObject.\_numberActionAsPlayer
-   MockGameObject.\_customActionAsPlayer

Moreover, `Delegate` and `MulticastDelegate` can be cast to their mock version to trigger events:

```typescript
import { globalEvents } from "@tabletop-playground/api";
import { MockMulticastDelegate, MockPlayer } from "ttpg-mock";

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
```
