import {
  Card,
  Color,
  ImageWidget,
  MulticastDelegate,
} from "@tabletop-playground/api";
import { MockWidget } from "../mock-widget";
import { MockMulticastDelegate } from "../../multicast-delegate/mock-multicast-delegate";

export class MockImageWidget extends MockWidget implements ImageWidget {
  onImageLoaded: MulticastDelegate<
    (UImage: this, filename: string, packageId: string) => void
  > = new MockMulticastDelegate<
    (UImage: this, filename: string, packageId: string) => void
  >();

  setTintColor(
    color: Color | [r: number, g: number, b: number, a: number]
  ): ImageWidget {
    throw new Error("Method not implemented.");
  }
  setSourceCard(sourceCard: Card): ImageWidget {
    throw new Error("Method not implemented.");
  }
  setImageURL(url: string): ImageWidget {
    throw new Error("Method not implemented.");
  }
  setImageSize(
    width?: number | undefined,
    height?: number | undefined
  ): ImageWidget {
    throw new Error("Method not implemented.");
  }
  setImage(textureName: string, packageId?: string | undefined): ImageWidget {
    throw new Error("Method not implemented.");
  }
  getTintColor(): Color {
    throw new Error("Method not implemented.");
  }
  getImageWidth(): number {
    throw new Error("Method not implemented.");
  }
  getImageURL(): string {
    throw new Error("Method not implemented.");
  }
  getImageHeight(): number {
    throw new Error("Method not implemented.");
  }
  getImageFileWidth(): number {
    throw new Error("Method not implemented.");
  }
  getImageFileHeight(): number {
    throw new Error("Method not implemented.");
  }
}
