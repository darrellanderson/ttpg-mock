import {
  Card,
  Color,
  ImageButton,
  MulticastDelegate,
  Player,
} from "@tabletop-playground/api";
import { MockWidget } from "../mock-widget";
import { MockMulticastDelegate } from "../../multicast-delegate/mock-multicast-delegate";

export class MockImageButton extends MockWidget implements ImageButton {
  onClicked: MulticastDelegate<(button: this, player: Player) => void> =
    new MockMulticastDelegate<(button: this, player: Player) => void>();
  onImageLoaded: MulticastDelegate<
    (UImage: this, filename: string, packageId: string) => void
  > = new MockMulticastDelegate<
    (UImage: this, filename: string, packageId: string) => void
  >();

  setTintColor(
    color: Color | [r: number, g: number, b: number, a: number]
  ): ImageButton {
    throw new Error("Method not implemented.");
  }
  setSourceCard(sourceCard: Card): ImageButton {
    throw new Error("Method not implemented.");
  }
  setImageURL(url: string): ImageButton {
    throw new Error("Method not implemented.");
  }
  setImageSize(
    width?: number | undefined,
    height?: number | undefined
  ): ImageButton {
    throw new Error("Method not implemented.");
  }
  setImage(textureName: string, packageId?: string | undefined): ImageButton {
    throw new Error("Method not implemented.");
  }
  getTintColor(): Color {
    throw new Error("Method not implemented.");
  }
  getImageWidth(): number {
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
