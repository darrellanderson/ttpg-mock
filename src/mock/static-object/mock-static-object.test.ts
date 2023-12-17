import { MockColor } from "../color/mock-color";
import { MockDrawingLine } from "../drawing-line/mock-drawing-line";
import { MockRotator } from "../rotator/mock-rotator";
import { MockSnapPoint } from "../snap-point/mock-snap-point";
import { MockStaticObject, MockStaticObjectParams } from "./mock-static-object";
import { MockUIElement } from "../ui-element/mock-ui-element";
import { MockVector } from "../vector/mock-vector";

it("constructor", () => {
  const params: MockStaticObjectParams = {
    _modelSize: new MockVector(1, 1, 1),
    _modelCenter: new MockVector(0, 0, 0),
    bounciness: 2,
    density: 3,
    description: "my-description",
    drawingLines: [],
    friction: 4,
    id: "my-id",
    metallic: 5,
    name: "my-name",
    packageId: "my-package-id",
    packageName: "my-package-name",
    position: new MockVector(7, 8, 9),
    primaryColor: new MockColor(0.1, 0.2, 0.3, 0.4),
    rotation: new MockRotator(10, 11, 12),
    roughness: 6,
    savedData: { "my-key": "my-value" },
    scale: new MockVector(13, 14, 15),
    scriptFilename: "my-script-filename",
    scriptPackageId: "my-script-package-id",
    secondaryColor: new MockColor(0.5, 0.6, 0.7, 0.8),
    snapPoints: [],
    surfaceType: "my-surface-type",
    tags: ["my-tag"],
    templateId: "my-template-id",
    templateMetadata: "my-template-metadata",
    templateName: "my-template-name",
    uis: [],
  };

  const obj = new MockStaticObject(params);

  expect(obj.getBounciness()).toEqual(params.bounciness);
  expect(obj.getDensity()).toEqual(params.density);
  expect(obj.getDescription()).toEqual(params.description);
  expect(obj.getDrawingLines()).toEqual(params.drawingLines);
  expect(obj.getExtent(false, false).toString()).toEqual("(X=6.5,Y=7,Z=7.5)");
  expect(obj.getExtentCenter(false, false).toString()).toEqual("(X=7,Y=8,Z=9)"); // position
  expect(obj.getFriction()).toEqual(params.friction);
  expect(obj.getId()).toEqual(params.id);
  expect(obj.getMetallic()).toEqual(params.metallic);
  expect(obj.getName()).toEqual(params.name);
  expect(obj.getPackageId()).toEqual(params.packageId);
  expect(obj.getPackageName()).toEqual(params.packageName);
  expect(obj.getPosition()).toEqual(params.position);
  expect(obj.getPrimaryColor()).toEqual(params.primaryColor);
  expect(obj.getRotation()).toEqual(params.rotation);
  expect(obj.getRoughness()).toEqual(params.roughness);
  expect(obj.getSavedData("my-key")).toEqual("my-value");
  expect(obj.getScale()).toEqual(params.scale);
  expect(obj.getSize().toString()).toEqual("(X=13,Y=14,Z=15)");
  expect(obj.getScriptFilename()).toEqual(params.scriptFilename);
  expect(obj.getScriptPackageId()).toEqual(params.scriptPackageId);
  expect(obj.getAllSnapPoints()).toEqual(params.snapPoints);
  expect(obj.getTags()).toEqual(params.tags);
  expect(obj.getTemplateId()).toEqual(params.templateId);
  expect(obj.getTemplateMetadata()).toEqual(params.templateMetadata);
  expect(obj.getTemplateName()).toEqual(params.templateName);
  expect(obj.getUIs()).toEqual(params.uis);
});

it("bounciness", () => {
  const input = 7;
  const obj = new MockStaticObject();
  obj.setBounciness(input);
  const output = obj.getBounciness();
  expect(output).toEqual(input);
});

it("density", () => {
  const input = 7;
  const obj = new MockStaticObject();
  obj.setDensity(input);
  const output = obj.getDensity();
  expect(output).toEqual(input);
});

it("description", () => {
  const input = "test-input";
  const obj = new MockStaticObject();
  obj.setDescription(input);
  const output = obj.getDescription();
  expect(output).toEqual(input);
});

it("drawingLines", () => {
  const input = new MockDrawingLine();
  const obj = new MockStaticObject();
  obj.addDrawingLine(input);
  expect(obj.getDrawingLines()).toEqual([input]);
  obj.removeDrawingLineObject(input);
  expect(obj.getDrawingLines()).toEqual([]);
  obj.addDrawingLine(input);
  expect(obj.getDrawingLines()).toEqual([input]);
  obj.removeDrawingLine(0);
  expect(obj.getDrawingLines()).toEqual([]);
});

it("extent", () => {
  const obj = new MockStaticObject({
    _modelSize: [20, 30, 40],
    _modelCenter: [2, 3, 4],
    rotation: [0, 90, 0],
  });
  let currentRotation = false;
  const includeGeometry = false;
  let center = obj.getExtentCenter(currentRotation, includeGeometry);
  let want = new MockVector(2, 3, 4);
  expect(center.toString()).toEqual(want.toString());

  currentRotation = true;
  center = obj.getExtentCenter(currentRotation, includeGeometry);
  want = new MockVector(-3, 2, 4);
  expect(center.toString()).toEqual(want.toString());

  currentRotation = false;
  let extent = obj.getExtent(currentRotation, includeGeometry);
  want = new MockVector(10, 15, 20);
  expect(extent.toString()).toEqual(want.toString());

  currentRotation = true;
  extent = obj.getExtent(currentRotation, includeGeometry);
  want = new MockVector(15, 10, 20);
  expect(extent.toString()).toEqual(want.toString());
});

it("friction", () => {
  const input = 7;
  const obj = new MockStaticObject();
  obj.setFriction(input);
  const output = obj.getFriction();
  expect(output).toEqual(input);
});

it("id", () => {
  // default
  const obj = new MockStaticObject();
  let output = obj.getId();
  expect(output).toMatch(/__id__([0-9]+)__/);

  // custom
  const input = "test-id";
  obj.setId(input);
  output = obj.getId();
  expect(output).toEqual(input);
});

it("isValid", () => {
  const obj = new MockStaticObject();
  expect(obj.isValid()).toEqual(true);
  obj.destroy();
  expect(obj.isValid()).toEqual(false);
});

it("metallic", () => {
  const input = 7;
  const obj = new MockStaticObject();
  obj.setMetallic(input);
  const output = obj.getMetallic();
  expect(output).toEqual(input);
});

it("name", () => {
  const input = "test-input";
  const obj = new MockStaticObject();
  obj.setName(input);
  const output = obj.getName();
  expect(output).toEqual(input);
});

it("position", () => {
  const input: [x: number, y: number, z: number] = [1, 2, 3];
  const obj = new MockStaticObject();
  obj.setPosition(input);
  const output = obj.getPosition();
  expect(output.equals(input, 0)).toEqual(true);
});

it("primaryColor", () => {
  const input: [r: number, g: number, b: number, a: number] = [
    0.1, 0.2, 0.3, 1,
  ];
  const obj = new MockStaticObject();
  obj.setPrimaryColor(input);
  const output = obj.getPrimaryColor();
  expect(output.toString()).toEqual("(R=0.1,G=0.2,B=0.3,A=1)");
});

it("rotation", () => {
  const input: [pitch: number, yaw: number, roll: number] = [1, 2, 3];
  const obj = new MockStaticObject();
  obj.setRotation(input);
  const output = obj.getRotation();
  expect(output.equals(input, 0)).toEqual(true);
});

it("roughness", () => {
  const input = 7;
  const obj = new MockStaticObject();
  obj.setRoughness(input);
  const output = obj.getRoughness();
  expect(output).toEqual(input);
});

it("savedData", () => {
  const input = "my-saved-data";
  const key = "my-key";
  const obj = new MockStaticObject();
  obj.setSavedData(input, key);
  const output = obj.getSavedData(key);
  expect(output).toEqual(input);
});

it("scale", () => {
  const input: [x: number, y: number, z: number] = [1, 2, 3];
  const obj = new MockStaticObject();
  obj.setScale(input);
  const output = obj.getScale();
  expect(output.equals(input, 0)).toEqual(true);
});

it("script", () => {
  const input1 = "my-script";
  const input2 = "my-pacakge-id";
  const obj = new MockStaticObject();
  obj.setScript(input1, input2);
  const output1 = obj.getScriptFilename();
  const output2 = obj.getScriptPackageId();
  expect(output1).toEqual(input1);
  expect(output2).toEqual(input2);
});

it("secondaryColor", () => {
  const input: [r: number, g: number, b: number, a: number] = [
    0.1, 0.2, 0.3, 1,
  ];
  const obj = new MockStaticObject();
  obj.setSecondaryColor(input);
  const output = obj.getSecondaryColor();
  expect(output.toString()).toEqual("(R=0.1,G=0.2,B=0.3,A=1)");
});

it("surfaceType", () => {
  const input = "override-surface-type";
  const obj = new MockStaticObject();
  obj.setSurfaceType(input);
  const output = obj.getSurfaceType();
  expect(output.toString()).toEqual(input);
});

it("tags", () => {
  const input = ["a", "b", "c"];
  const obj = new MockStaticObject();
  obj.setTags(input);
  const output = obj.getTags();
  expect(output).toEqual(input);
});

it("templateMetadata", () => {
  const input = "test-input";
  const obj = new MockStaticObject({ templateMetadata: input });
  const output = obj.getTemplateMetadata();
  expect(output).toEqual(input);
});

it("ui", () => {
  const input = new MockUIElement();
  const obj = new MockStaticObject();
  const index = obj.addUI(input);
  expect(obj.getUIs()).toEqual([input]);

  obj.removeUI(index);
  expect(obj.getUIs()).toEqual([]);

  obj.addUI(input);
  expect(obj.getUIs()).toEqual([input]);
  obj.removeUIElement(input);
  expect(obj.getUIs()).toEqual([]);

  obj.addUI(input);
  obj.setUI(0, input);
  expect(obj.getUIs()).toEqual([input]);
  obj.removeUIElement(input);
  expect(obj.getUIs()).toEqual([]);

  // Deprecated methods throw.
  expect(() => {
    obj.attachUI(input);
  }).toThrow();
  expect(() => {
    obj.getAttachedUIs();
  }).toThrow();
});

it("toJSONString", () => {
  const obj = new MockStaticObject();
  const output = obj.toJSONString();
  expect(output.length).toBeGreaterThan(0);
});

it("getExecutionReason", () => {
  const obj = new MockStaticObject();
  let output = obj.getExecutionReason();
  expect(typeof output).toEqual("string");

  // Static version.
  output = MockStaticObject.getExecutionReason();
  expect(typeof output).toEqual("string");
});

it("getSnapPoint", () => {
  const input = new MockSnapPoint();
  const params: MockStaticObjectParams = {
    snapPoints: [input],
  };
  const obj = new MockStaticObject(params);
  const output = obj.getSnapPoint(0);
  expect(output).toEqual(input);
  expect(input.getParentObject()).toEqual(obj);
});

it("world/local position", () => {
  // Created this object in TTPG.
  const obj = new MockStaticObject({
    position: new MockVector(-2.278, -11.371, 85.72),
    rotation: new MockRotator(88.2512, 107.7911, -0.0977),
    scale: new MockVector(2, 3, 4),
  });
  const pos = new MockVector(1, 2, 3);

  let out = obj.worldPositionToLocal(pos);
  let want = new MockVector(-41.162, -2.41, -3.559);
  expect(out.x).toBeCloseTo(out.x, 1);
  expect(out.y).toBeCloseTo(out.y, 1);
  expect(out.z).toBeCloseTo(out.z, 1);

  out = obj.localPositionToWorld(pos);
  want = new MockVector(-4.322, -24.571, 88.085);
  expect(out.x).toBeCloseTo(out.x, 1);
  expect(out.y).toBeCloseTo(out.y, 1);
  expect(out.z).toBeCloseTo(out.z, 1);
});

it("world/local rotation", () => {
  // Created this object in TTPG.
  const obj = new MockStaticObject({
    position: new MockVector(-2.278, -11.371, 85.72),
    rotation: new MockRotator(88.2512, 107.7911, -0.0977),
    scale: new MockVector(2, 3, 4),
  });
  const rot = new MockRotator(1, 2, 3);

  let out = obj.worldRotationToLocal(rot);
  let want = new MockRotator(15.9102, -89.4555, 91.4662);
  expect(out.pitch).toBeCloseTo(out.pitch, 1);
  expect(out.yaw).toBeCloseTo(out.yaw, 1);
  expect(out.roll).toBeCloseTo(out.roll, 1);

  out = obj.localRotationToWorld(rot);
  want = new MockRotator(87.868, 177.3503, 73.4141);
  expect(out.pitch).toBeCloseTo(out.pitch, 1);
  expect(out.yaw).toBeCloseTo(out.yaw, 1);
  expect(out.roll).toBeCloseTo(out.roll, 1);
});
