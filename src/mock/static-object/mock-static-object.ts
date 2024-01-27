import {
  Color,
  DrawingLine,
  GameObject,
  MulticastDelegate,
  Player,
  Rotator,
  SnapPoint,
  StaticObject,
  UIElement,
  Vector,
} from "@tabletop-playground/api";
import { MockColor } from "../color/mock-color";
import { MockRotator } from "../rotator/mock-rotator";
import { MockVector } from "../vector/mock-vector";
import { MockMulticastDelegate } from "../multicast-delegate/mock-multicast-delegate";
import { MockSnapPoint } from "../snap-point/mock-snap-point";

export type MockStaticObjectParams = {
  _objType?:
  | "Card"
  | "CardHolder"
  | "Container"
  | "Dice"
  | "GameObject"
  | "MultistateObject"
  | "StaticObject";
  _modelSize?: Vector | [x: number, y: number, z: number];
  _modelCenter?: Vector | [x: number, y: number, z: number];
  bounciness?: number;
  density?: number;
  description?: string;
  drawingLines?: DrawingLine[];
  friction?: number;
  id?: string;
  metallic?: number;
  name?: string;
  packageId?: string;
  packageName?: string;
  position?: Vector | [x: number, y: number, z: number];
  primaryColor?: Color | [r: number, g: number, b: number, a: number];
  rotation?: Rotator | [pitch: number, yaw: number, roll: number];
  roughness?: number;
  savedData?: { [key: string]: string };
  scale?: Vector | [x: number, y: number, z: number];
  scriptFilename?: string;
  scriptPackageId?: string;
  secondaryColor?: Color | [r: number, g: number, b: number, a: number];
  snapPoints?: SnapPoint[];
  surfaceType?: string;
  tags?: string[];
  templateId?: string;
  templateMetadata?: string;
  templateName?: string;
  uis?: UIElement[];
};

export class MockStaticObject implements StaticObject {
  private static __nextIdNumber = 1;

  private __modelSize: Vector = new MockVector(1, 1, 1);
  private __modelCenter: Vector = new MockVector(0, 0, 0);

  private _bounciness: number = 1;
  private _density: number = 1;
  private _description: string = "";
  private _drawingLines: DrawingLine[] = [];
  private _friction: number = 1;
  private _id: string = `__id__${MockStaticObject.__nextIdNumber++}__`;
  private _isValid: boolean = true;
  private _metallic: number = 1;
  private _name: string = "";
  private _packageId: string = "";
  private _packageName: string = "";
  private _position: Vector = new MockVector(0, 0, 0);
  private _primaryColor: Color = new MockColor(1, 1, 1, 1);
  private _rotation: Rotator = new MockRotator(0, 0, 0);
  private _roughness: number = 1;
  private _savedData: { [key: string]: string } = {};
  private _scale: Vector = new MockVector(1, 1, 1);
  private _scriptFilename: string = "";
  private _scriptPackageId: string = "";
  private _secondaryColor: Color = new MockColor(0, 0, 0, 1);
  private _snapPoints: SnapPoint[] = [];
  private _surfaceType: string = "";
  private _tags: string[] = [];
  private _templateId: string = "";
  private _templateMetadata: string = "";
  private _templateName: string = "";
  private _uis: UIElement[] = [];

  onSnappedTo: MulticastDelegate<
    (
      object: GameObject,
      player: Player,
      snapPoint: SnapPoint,
      grabPosition: Vector | [x: number, y: number, z: number],
      grabRotation: Rotator | [pitch: number, yaw: number, roll: number]
    ) => void
  > = new MockMulticastDelegate<
    (
      object: GameObject,
      player: Player,
      snapPoint: SnapPoint,
      grabPosition: Vector | [x: number, y: number, z: number],
      grabRotation: Rotator | [pitch: number, yaw: number, roll: number]
    ) => void
  >();

  static getExecutionReason(): string {
    return "";
  }

  getExecutionReason() {
    return MockStaticObject.getExecutionReason();
  }

  constructor(params?: MockStaticObjectParams) {
    if (params?._modelSize) {
      this.__modelSize = MockVector._from(params._modelSize);
    }
    if (params?._modelCenter) {
      this.__modelCenter = MockVector._from(params._modelCenter);
    }
    if (params?.bounciness !== undefined) {
      this._bounciness = params.bounciness;
    }
    if (params?.density !== undefined) {
      this._density = params.density;
    }
    if (params?.description) {
      this._description = params.description;
    }
    if (params?.drawingLines) {
      this._drawingLines = params.drawingLines;
    }
    if (params?.friction !== undefined) {
      this._friction = params.friction;
    }
    if (params?.id) {
      this._id = params.id;
    }
    if (params?.metallic !== undefined) {
      this._metallic = params.metallic;
    }
    if (params?.name) {
      this._name = params.name;
    }
    if (params?.packageId) {
      this._packageId = params.packageId;
    }
    if (params?.packageName) {
      this._packageName = params.packageName;
    }
    if (params?.position) {
      this._position = MockVector._from(params.position);
    }
    if (params?.primaryColor) {
      this._primaryColor = MockColor._from(params.primaryColor);
    }
    if (params?.rotation) {
      this._rotation = MockRotator._from(params.rotation);
    }
    if (params?.roughness !== undefined) {
      this._roughness = params.roughness;
    }
    if (params?.savedData) {
      this._savedData = params.savedData;
    }
    if (params?.scale) {
      this._scale = MockVector._from(params.scale);
    }
    if (params?.scriptFilename) {
      this._scriptFilename = params.scriptFilename;
    }
    if (params?.scriptPackageId) {
      this._scriptPackageId = params.scriptPackageId;
    }
    if (params?.secondaryColor) {
      this._secondaryColor = MockColor._from(params.secondaryColor);
    }
    if (params?.snapPoints) {
      this._snapPoints = params.snapPoints;
      for (const snapPoint of this._snapPoints) {
        (snapPoint as MockSnapPoint)._setParentObject(this);
      }
    }
    if (params?.surfaceType) {
      this._surfaceType = params.surfaceType;
    }
    if (params?.tags) {
      this._tags = params.tags;
    }
    if (params?.templateId) {
      this._templateId = params.templateId;
    }
    if (params?.templateMetadata) {
      this._templateMetadata = params.templateMetadata;
    }
    if (params?.templateName) {
      this._templateName = params.templateName;
    }
    if (params?.uis) {
      this._uis = params.uis;
    }
  }

  addDrawingLine(line: DrawingLine): boolean {
    this._drawingLines.push(line);
    return true;
  }

  addUI(element: UIElement): number {
    const index = this._uis.length;
    this._uis.push(element);
    return index;
  }
  attachUI(element: UIElement): number {
    throw new Error("Deprecated, use addUI");
  }

  destroy(): void {
    this._isValid = false;
  }

  getAllSnapPoints(): SnapPoint[] {
    return this._snapPoints;
  }

  getAttachedUIs(): UIElement[] {
    throw new Error("Deprecated, use getUIs");
  }

  getBounciness(): number {
    return this._bounciness;
  }

  getDensity(): number {
    return this._density;
  }

  getDescription(): string {
    return this._description;
  }

  getDrawingLines(): DrawingLine[] {
    return this._drawingLines.map((line) => line.clone());
  }

  getExtentCenter(currentRotation: boolean, includeGeometry: boolean): Vector {
    let offset = this.__modelCenter;
    if (currentRotation) {
      offset = this._rotation.rotateVector(offset);
    }
    const scale = this.getScale();
    offset = new MockVector(
      offset.x * scale.x,
      offset.y * scale.y,
      offset.z * scale.z
    );
    return this.getPosition().add(offset);
  }

  getExtent(currentRotation: boolean, includeGeometry: boolean): Vector {
    let extent = this.__modelSize.multiply(0.5);
    if (currentRotation) {
      extent = this._rotation.rotateVector(extent);
    }
    const scale = this.getScale();
    return new MockVector(
      Math.abs(extent.x * scale.x),
      Math.abs(extent.y * scale.y),
      Math.abs(extent.z * scale.z)
    );
  }

  getFriction(): number {
    return this._friction;
  }

  getId(): string {
    return this._id;
  }

  getMetallic(): number {
    return this._metallic;
  }

  getName(): string {
    return this._name;
  }

  getPackageId(): string {
    return this._packageId;
  }

  getPackageName(): string {
    return this._packageName;
  }

  getPosition(): Vector {
    return this._position.clone();
  }

  getPrimaryColor(): Color {
    return this._primaryColor.clone();
  }

  getRotation(): Rotator {
    return this._rotation.clone();
  }

  getRoughness(): number {
    return this._roughness;
  }

  getSavedData(key: string): string {
    return this._savedData[key];
  }

  getScale(): Vector {
    return this._scale.clone();
  }

  getScriptFilename(): string {
    return this._scriptFilename;
  }

  getScriptPackageId(): string {
    return this._scriptPackageId;
  }

  getSecondaryColor(): Color {
    return this._secondaryColor;
  }

  getSize(): Vector {
    const size = this.__modelSize;
    const scale = this.getScale();
    return new MockVector(size.x * scale.x, size.y * scale.y, size.z * scale.z);
  }

  getSnapPoint(index: number): SnapPoint | undefined {
    return this._snapPoints[index];
  }

  getSurfaceType(): string {
    return this._surfaceType;
  }

  getTags(): string[] {
    return [...this._tags];
  }

  getTemplateId(): string {
    return this._templateId;
  }

  getTemplateMetadata(): string {
    return this._templateMetadata;
  }

  getTemplateName(): string {
    return this._templateName;
  }

  getUIs(): UIElement[] {
    return this._uis.map((ui) => ui.clone());
  }

  isValid(): boolean {
    return this._isValid;
  }

  removeDrawingLine(index: number): void {
    this._drawingLines.splice(index, 1);
  }

  removeDrawingLineObject(line: DrawingLine): void {
    const index = this._drawingLines.indexOf(line);
    this.removeDrawingLine(index);
  }

  removeUIElement(element: UIElement): void {
    const index = this._uis.indexOf(element);
    this.removeUI(index);
  }
  removeUI(index: number): void {
    this._uis.splice(index, 1);
  }

  setBounciness(bounciness: number): void {
    this._bounciness = bounciness;
  }

  setDensity(density: number): void {
    this._density = density;
  }

  setDescription(description: string): void {
    this._description = description;
  }

  setFriction(friction: number): void {
    this._friction = friction;
  }

  setId(iD: string): boolean {
    this._id = iD;
    return true;
  }

  setMetallic(metallic: number): void {
    this._metallic = metallic;
  }

  setName(name: string): void {
    this._name = name;
  }

  setPosition(
    position: Vector | [x: number, y: number, z: number],
    animationSpeed?: number | undefined
  ): void {
    this._position = MockVector._from(position);
  }

  setPrimaryColor(
    color: Color | [r: number, g: number, b: number, a: number]
  ): void {
    this._primaryColor = MockColor._from(color);
  }

  setRotation(
    rotation: Rotator | [pitch: number, yaw: number, roll: number],
    animationSpeed?: number | undefined
  ): void {
    this._rotation = MockRotator._from(rotation);
  }

  setRoughness(roughness: number): void {
    this._roughness = roughness;
  }

  setSavedData(data: string, key: string): void {
    this._savedData[key] = data;
  }

  setScale(scale: Vector | [x: number, y: number, z: number]): void {
    this._scale = MockVector._from(scale);
  }

  setSecondaryColor(
    color: Color | [r: number, g: number, b: number, a: number]
  ): void {
    this._secondaryColor = MockColor._from(color);
  }

  setScript(filename: string, packageId?: string | undefined): void {
    this._scriptFilename = filename;
    this._scriptPackageId = packageId ? packageId : "";
  }

  setSurfaceType(surfaceType: string): void {
    this._surfaceType = surfaceType;
  }

  setTags(tags: string[]): void {
    this._tags = tags;
  }

  setUI(index: number, element: UIElement): void {
    if (index >= 0 && index < this._uis.length) {
      this._uis[index] = element;
    }
  }

  toJSONString(): string {
    return JSON.stringify(this);
  }

  updateUI(element: UIElement): void { }

  // --------------------------------

  worldRotationToLocal(
    rotation: Rotator | [pitch: number, yaw: number, roll: number]
  ): Rotator {
    rotation = MockRotator._from(rotation);
    return rotation.compose(this.getRotation().getInverse());
  }

  worldPositionToLocal(
    position: Vector | [x: number, y: number, z: number]
  ): Vector {
    position = MockVector._from(position);
    const offset = position.subtract(this.getPosition());
    offset.x /= this.getScale().x;
    offset.y /= this.getScale().y;
    offset.z /= this.getScale().z;
    return this.getRotation().rotateVector(offset);
  }

  localRotationToWorld(
    rotation: Rotator | [pitch: number, yaw: number, roll: number]
  ): Rotator {
    rotation = MockRotator._from(rotation);
    return rotation.compose(this.getRotation());
  }

  localPositionToWorld(
    position: Vector | [x: number, y: number, z: number]
  ): Vector {
    position = MockVector._from(position);
    position.x *= this.getScale().x;
    position.y *= this.getScale().y;
    position.z *= this.getScale().z;
    const offset = this.getRotation().rotateVector(position);
    return this.getPosition().add(offset);
  }
}
