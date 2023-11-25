import {
  Card,
  Color,
  ImageWidget,
  MulticastDelegate,
} from "@tabletop-playground/api";
import { MockColor } from "../../color/mock-color";
import { MockMulticastDelegate } from "../../multicast-delegate/mock-multicast-delegate";
import { MockWidget, MockWidgetParams } from "../mock-widget";

export type MockImageWidgetParams = MockWidgetParams & {
  tintColor?: Color | [r: number, g: number, b: number, a: number];
  sourceCard?: Card;
  imageUrl?: string;
  imageHeight?: number;
  imageWidth?: number;
  imageFileHeight?: number;
  imageFileWidth?: number;
  imageTextureName?: string;
  imageTexturePackageId?: string;
};

export class MockImageWidget extends MockWidget implements ImageWidget {
  private _tintColor: Color = new MockColor(1, 1, 1, 1);
  private _sourceCard: Card | undefined = undefined;
  private _imageUrl: string = "";
  private _imageWidth: number = 0;
  private _imageHeight: number = 0;
  private _imageFileWidth: number = 0;
  private _imageFileHeight: number = 0;
  private _imageTextureName: string = "";
  private _imageTexturePackageId: string = "";

  onImageLoaded: MulticastDelegate<
    (UImage: this, filename: string, packageId: string) => void
  > = new MockMulticastDelegate<
    (UImage: this, filename: string, packageId: string) => void
  >();

  constructor(params?: MockImageWidgetParams) {
    super(params);
    if (params?.tintColor) {
      this._tintColor = MockColor._from(params.tintColor);
    }
    if (params?.sourceCard) {
      this._sourceCard = params.sourceCard;
    }
    if (params?.imageUrl) {
      this._imageUrl = params.imageUrl;
    }
    if (params?.imageWidth) {
      this._imageWidth = params.imageWidth;
    }
    if (params?.imageHeight) {
      this._imageHeight = params.imageHeight;
    }
    if (params?.imageFileWidth) {
      this._imageFileWidth = params.imageFileWidth;
    }
    if (params?.imageFileHeight) {
      this._imageFileHeight = params.imageFileHeight;
    }
    if (params?.imageTextureName) {
      this._imageTextureName = params.imageTextureName;
    }
    if (params?.imageTexturePackageId) {
      this._imageTexturePackageId = params.imageTexturePackageId;
    }
  }

  getImageFileHeight(): number {
    return this._imageFileHeight;
  }
  getImageFileWidth(): number {
    return this._imageFileWidth;
  }
  getImageHeight(): number {
    return this._imageHeight;
  }
  getImageWidth(): number {
    return this._imageWidth;
  }
  getImageURL(): string {
    return this._imageUrl;
  }
  getTintColor(): Color {
    return this._tintColor.clone();
  }
  setImage(textureName: string, packageId?: string | undefined): ImageWidget {
    this._imageTextureName = textureName;
    this._imageTexturePackageId = packageId ? packageId : "";
    return this;
  }
  setImageSize(
    width?: number | undefined,
    height?: number | undefined
  ): ImageWidget {
    this._imageHeight = height ? height : 0;
    this._imageWidth = width ? width : 0;
    return this;
  }
  setImageURL(url: string): ImageWidget {
    this._imageUrl = url;
    return this;
  }
  setSourceCard(sourceCard: Card): ImageWidget {
    this._sourceCard = sourceCard;
    return this;
  }
  setTintColor(
    color: Color | [r: number, g: number, b: number, a: number]
  ): ImageWidget {
    this._tintColor = MockColor._from(color);
    return this;
  }
}
