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

it("setImage", () => {
    const imageButton = new MockImageWidget();
    imageButton.setImage("textureName", "packageId");
    imageButton.setImage("textureName");
});

it("setImageSize", () => {
    const imageButton = new MockImageWidget();
    imageButton.setImageSize();
    imageButton.setImageSize(1, 1);
});

it("setImageURL", () => {
    const imageButton = new MockImageWidget();
    imageButton.setImageURL("http://example.com/foo.jpg");
});

it("setSourceCard", () => {
    const imageButton = new MockImageWidget();
    const card = new MockCard();
    imageButton.setSourceCard(card);
});

it("setTintColor", () => {
    const imageButton = new MockImageWidget();
    imageButton.setTintColor([1, 1, 1, 1]);
});
