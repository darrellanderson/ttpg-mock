# ttpg-mock

Mock `@tabletop-playground/api` for TypeScript-compatible jest unittesting. Write your scripts normally, jest will redirect that api reference to the mocked version.

> [!Note]
> Your normal build process will never use any `ttpg-mock` assets, those are only used during jest test runs (your test scripts _may_ import them to access mock classes; production scripts never will).

Using the package manager of your choice, install (yarn in this case):

```
yarn add -D ttpg-mock
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

## Mock classes

When needed, create mock instances of objects often filling any necessary state in the constructor. Import mock classes from `ttpg-mock`, for instance:

```
import { MockGameObject, MockGameObjectParams } from "ttpg-mock";

it("mock class", () => {
  const params: MockGameObjectParams = {
    position: [1, 0, 0],
    templateMetadata: "my-metadata",
  };
  const obj: GameObject = new MockGameObject(params);
  expect(obj.getPosition().magnitude()).toBe(1);
  expect(obj.getTemplateMetadata()).toBe("my-metadata");
});
```

## Populating the world

Mock objects are not registered with `world` automatically. You can add using `mockWorld` (same object as `world` but with some new methods exposed):

```
import { GameObject, world } from "@tabletop-playground/api"
import { MockGameObject, mockWorld } from "ttpg-mock";

it("mockWorld._reset", () => {
  const obj: GameObject = new MockGameObject();
  mockWorld._reset({ gameObjects: [obj] });
  expect(world.getAllObjects()).toEqual([obj]);

  mockWorld._reset() // clears everything
});
```

## Caveats

Mocking is NOT complete. Some methods (such as hit detection and transform math) aren't supported; those methods will throw a "Method not implemented" error.
