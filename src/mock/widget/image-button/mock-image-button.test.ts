import { MockCard } from "../../static-object/game-object/card/mock-card";
import { MockColor } from "../../color/mock-color";
import { MockImageButton, MockImageButtonParams } from "./mock-image-button";

it("constructor", () => {
    const params: MockImageButtonParams = {
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
    const imageButton = new MockImageButton(params);
    expect(imageButton.getTintColor()).toEqual(params.tintColor);
    expect(imageButton.getImageFileHeight()).toEqual(params.imageFileHeight);
    expect(imageButton.getImageFileWidth()).toEqual(params.imageFileWidth);
    expect(imageButton.getImageHeight()).toEqual(params.imageHeight);
    expect(imageButton.getImageWidth()).toEqual(params.imageWidth);
});

it("setImage", () => {
    const imageButton = new MockImageButton();
    imageButton.setImage("textureName", "packageId");
    imageButton.setImage("textureName");
});

it("setImageSize", () => {
    const imageButton = new MockImageButton();
    imageButton.setImageSize();
    imageButton.setImageSize(1, 1);
});

it("setImageURL", () => {
    const imageButton = new MockImageButton();
    imageButton.setImageURL("http://example.com/foo.jpg");
});

it("setSourceCard", () => {
    const imageButton = new MockImageButton();
    const card = new MockCard();
    imageButton.setSourceCard(card);
});

it("setTintColor", () => {
    const imageButton = new MockImageButton();
    imageButton.setTintColor([1, 1, 1, 1]);
});
