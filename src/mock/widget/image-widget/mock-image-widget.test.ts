import { MockCard } from "../../static-object/game-object/card/mock-card";
import { MockColor } from "../../color/mock-color";
import { MockImageWidget, MockImageWidgetParams } from "./mock-image-widget";

it("constructor", () => {
  const params: MockImageWidgetParams = {
    tintColor: new MockColor(0.1, 1, 1, 1),
    sourceCard: new MockCard(),
    imageUrl: "my-url",
    imageHeight: 1,
    imageWidth: 2,
    imageFileHeight: 3,
    imageFileWidth: 4,
    imageTextureName: "my-texture",
    imageTexturePackageId: "my-package",
  };
  const imageWidget = new MockImageWidget(params);
  expect(imageWidget.getTintColor()).toEqual(params.tintColor);
  expect(imageWidget.getImageFileHeight()).toEqual(params.imageFileHeight);
  expect(imageWidget.getImageFileWidth()).toEqual(params.imageFileWidth);
  expect(imageWidget.getImageHeight()).toEqual(params.imageHeight);
  expect(imageWidget.getImageWidth()).toEqual(params.imageWidth);
  expect(imageWidget.getImageURL()).toEqual(params.imageUrl);
});
