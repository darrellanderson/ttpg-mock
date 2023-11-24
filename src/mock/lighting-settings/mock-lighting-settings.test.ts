import { MockColor } from "../color/mock-color";
import {
  MockLightingSettings,
  MockLightingSettingsParams,
} from "./mock-lighting-settings";

it("constructor", () => {
  const params: MockLightingSettingsParams = {
    altitude: 1,
    azimuth: 2,
    color: new MockColor(0.1, 1, 1, 1),
    intensity: 3,
    specularIntensity: 4,
  };
  const lighting = new MockLightingSettings(params);
  expect(lighting.getMainLightAltitude()).toEqual(params.altitude);
  expect(lighting.getMainLightAzimuth()).toEqual(params.azimuth);
  expect(lighting.getMainLightColor()).toEqual(params.color);
  expect(lighting.getMainLightIntensity()).toEqual(params.intensity);
  expect(lighting.getMainLightSpecularIntensity()).toEqual(
    params.specularIntensity
  );
});

it("altitude", () => {
  const input = 13;
  const lighting = new MockLightingSettings();
  lighting.setMainLightAltitude(input);
  const output = lighting.getMainLightAltitude();
  expect(output).toEqual(input);
});

it("azimuth", () => {
  const input = 13;
  const lighting = new MockLightingSettings();
  lighting.setMainLightAzimuth(input);
  const output = lighting.getMainLightAzimuth();
  expect(output).toEqual(input);
});

it("color", () => {
  const input = new MockColor(0.1, 1, 1, 1);
  const lighting = new MockLightingSettings();
  lighting.setMainLightColor(input);
  const output = lighting.getMainLightColor();
  expect(output).toEqual(input);
});

it("intensity", () => {
  const input = 13;
  const lighting = new MockLightingSettings();
  lighting.setMainLightIntensity(input);
  const output = lighting.getMainLightIntensity();
  expect(output).toEqual(input);
});

it("specularIntensity", () => {
  const input = 13;
  const lighting = new MockLightingSettings();
  lighting.setMainLightSpecularIntensity(input);
  const output = lighting.getMainLightSpecularIntensity();
  expect(output).toEqual(input);
});
