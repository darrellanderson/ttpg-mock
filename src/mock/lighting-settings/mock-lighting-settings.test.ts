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
  expect(lighting.getMainLightAltitude()).toBe(params.altitude);
  expect(lighting.getMainLightAzimuth()).toBe(params.azimuth);
  expect(lighting.getMainLightColor()).toEqual(params.color);
  expect(lighting.getMainLightIntensity()).toBe(params.intensity);
  expect(lighting.getMainLightSpecularIntensity()).toBe(
    params.specularIntensity
  );
});

it("altitude", () => {
  const input = 13;
  const lighting = new MockLightingSettings();
  lighting.setMainLightAltitude(input);
  const output = lighting.getMainLightAltitude();
  expect(output).toBe(input);
});

it("azimuth", () => {
  const input = 13;
  const lighting = new MockLightingSettings();
  lighting.setMainLightAzimuth(input);
  const output = lighting.getMainLightAzimuth();
  expect(output).toBe(input);
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
  expect(output).toBe(input);
});

it("specularIntensity", () => {
  const input = 13;
  const lighting = new MockLightingSettings();
  lighting.setMainLightSpecularIntensity(input);
  const output = lighting.getMainLightSpecularIntensity();
  expect(output).toBe(input);
});
