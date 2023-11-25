import { Color, LightingSettings } from "@tabletop-playground/api";
import { MockColor } from "../color/mock-color";

export type MockLightingSettingsParams = {
  altitude?: number;
  azimuth?: number;
  color?: Color | [r: number, g: number, b: number, a: number];
  intensity?: number;
  specularIntensity?: number;
};

export class MockLightingSettings implements LightingSettings {
  private _altitude = 90;
  private _azimuth = 0;
  private _color = new MockColor(1, 1, 1, 1);
  private _intensity = 1;
  private _specularIntensity = 1;

  constructor(params?: MockLightingSettingsParams) {
    if (params?.altitude) {
      this._altitude = params.altitude;
    }
    if (params?.azimuth) {
      this._azimuth = params.azimuth;
    }
    if (params?.color) {
      this._color = MockColor._from(params.color);
    }
    if (params?.intensity) {
      this._intensity = params.intensity;
    }
    if (params?.specularIntensity) {
      this._specularIntensity = params.specularIntensity;
    }
  }

  getMainLightAltitude(): number {
    return this._altitude;
  }

  getMainLightAzimuth(): number {
    return this._azimuth;
  }

  getMainLightColor(): Color {
    return this._color.clone();
  }

  getMainLightIntensity(): number {
    return this._intensity;
  }

  getMainLightSpecularIntensity(): number {
    return this._specularIntensity;
  }

  setMainLightAltitude(angle: number): void {
    this._altitude = angle;
  }

  setMainLightAzimuth(angle: number): void {
    this._azimuth = angle;
  }

  setMainLightColor(
    color: Color | [r: number, g: number, b: number, a: number]
  ): void {
    this._color = MockColor._from(color);
  }

  setMainLightIntensity(intensity: number): void {
    this._intensity = intensity;
  }

  setMainLightSpecularIntensity(intensity: number): void {
    this._specularIntensity = intensity;
  }
}
