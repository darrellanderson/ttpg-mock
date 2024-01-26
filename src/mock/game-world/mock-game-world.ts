import {
  Color,
  DrawingLine,
  GameObject,
  GameWorld,
  GlobalGrid,
  Label,
  LightingSettings,
  Package,
  Player,
  Rotator,
  ScreenUIElement,
  Sound,
  StaticObject,
  TraceHit,
  TurnSystem,
  UIElement,
  Vector,
  Zone,
} from "@tabletop-playground/api";
import { MockCard } from "../static-object/game-object/card/mock-card";
import { MockCardHolder } from "../static-object/game-object/card-holder/mock-card-holder";
import { MockColor } from "../color/mock-color";
import { MockContainer } from "../static-object/game-object/container/mock-container";
import { MockDice } from "../static-object/game-object/dice/mock-dice";
import { MockGlobalGrid } from "../global-grid/mock-global-grid";
import { MockLabel } from "../label/mock-label";
import { MockLightingSettings } from "../lighting-settings/mock-lighting-settings";
import { MockMultistateObject } from "../static-object/game-object/multistate-object/mock-multistate-object";
import {
  MockGameObject,
  MockGameObjectParams,
} from "../static-object/game-object/mock-game-object";
import { MockRotator } from "../rotator/mock-rotator";
import { MockSound } from "../sound/mock-sound";
import { MockStaticObject } from "../static-object/mock-static-object";
import { MockTraceHit } from "../trace-hit/mock-trace-hit";
import { MockTurnSystem } from "../turn-system/mock-turn-system";
import { MockVector } from "../vector/mock-vector";
import { MockZone } from "../zone/mock-zone";
import { SharedObjects } from "../../shared-objects";

export type MockGameWorldParams = {
  backgroundFilename?: string;
  backgroundPackageId?: string;
  drawingLines?: DrawingLine[];
  gameObjects?: GameObject[];
  gameTime?: number;
  gravityMultiplier?: number;
  labels?: Label[];
  packages?: Package[];
  players?: Player[];
  savedData?: { [key: string]: string };
  savedDataAnonymous?: string;
  showDiceRollMessages?: boolean;
  slotColor?: { [key: number]: Color };
  slotTeam?: { [key: number]: number };
  screenUIs?: ScreenUIElement[];
  tableHeight?: number;
  tables?: StaticObject[];
  tags?: string[];
  uis?: UIElement[];
  zones?: Zone[];
  _scriptFileToData?: { [key: string]: string };
  _templateIdToMockGameObjectParams?: {
    [key: string]: MockGameObjectParams;
  };
};

export class MockGameWorld implements GameWorld {
  // Shared version used by "world" variable.
  // Expose here as "Mock" flavor for easy _reset.
  public static readonly __sharedInstance: MockGameWorld = new MockGameWorld();

  grid: GlobalGrid = new MockGlobalGrid();
  lighting: LightingSettings = new MockLightingSettings();
  turns: TurnSystem = new MockTurnSystem();

  private _backgroundFilename: string = "";
  private _backgroundPackageId: string = "";
  private _drawingLines: DrawingLine[] = [];
  private _gameObjects: GameObject[] = [];
  private _gameTime: number = 0;
  private _gravityMultiplier: number = 1;
  private _labels: Label[] = [];
  private _packages: Package[] = [];
  private _players: Player[] = [];
  private _savedData: { [key: string]: string } = {};
  private _savedDataAnonymous: string = "";
  private _screenUIs: ScreenUIElement[] = [];
  private _showDiceRollMessages: boolean = true;
  private _slotColor: { [key: number]: Color } = {};
  private _slotTeam: { [key: number]: number } = {};
  private _tableHeight: number = 0;
  private _tables: StaticObject[] = [];
  private _tags: string[] = [];
  private _uis: UIElement[] = [];
  private _zones: Zone[] = [];
  private __scriptFileToData: { [key: string]: string } = {};
  private __templateIdToMockGameObjectParams: {
    [key: string]: MockGameObjectParams;
  } = {};

  static getExecutionReason(): string {
    return "unittest";
  }

  getExecutionReason() {
    return MockGameWorld.getExecutionReason();
  }

  constructor(params?: MockGameWorldParams) {
    this._reset(params);
  }

  /**
   * Tests may want to reset the "world" variable.
   *
   * @param params
   */
  _reset(params?: MockGameWorldParams): this {
    if (params?.backgroundFilename) {
      this._backgroundFilename = params.backgroundFilename;
    } else {
      this._backgroundFilename = "";
    }
    if (params?.backgroundPackageId) {
      this._backgroundPackageId = params.backgroundPackageId;
    } else {
      this._backgroundPackageId = "";
    }
    if (params?.drawingLines) {
      this._drawingLines = params.drawingLines;
    } else {
      this._drawingLines = [];
    }
    if (params?.gameObjects) {
      this._gameObjects = params.gameObjects;
    } else {
      this._gameObjects = [];
    }
    if (params?.gameTime !== undefined) {
      this._gameTime = params.gameTime;
    } else {
      this._gameTime = 0;
    }
    if (params?.gravityMultiplier !== undefined) {
      this._gravityMultiplier = params.gravityMultiplier;
    } else {
      this._gravityMultiplier = 1;
    }
    if (params?.labels) {
      this._labels = params.labels;
    } else {
      this._labels = [];
    }
    if (params?.packages) {
      this._packages = params.packages;
    } else {
      this._packages = [];
    }
    if (params?.players) {
      this._players = params.players;
    } else {
      this._players = [];
    }
    if (params?.savedData) {
      this._savedData = params.savedData;
    } else {
      this._savedData = {};
    }
    if (params?.savedDataAnonymous) {
      this._savedDataAnonymous = params.savedDataAnonymous;
    } else {
      this._savedDataAnonymous = "";
    }
    if (params?.screenUIs) {
      this._screenUIs = params.screenUIs;
    } else {
      this._screenUIs = [];
    }
    if (params?.showDiceRollMessages !== undefined) {
      this._showDiceRollMessages = params.showDiceRollMessages;
    } else {
      this._showDiceRollMessages = true;
    }
    if (params?.slotColor !== undefined) {
      this._slotColor = params.slotColor;
    } else {
      this._slotColor = {};
    }
    if (params?.slotTeam !== undefined) {
      this._slotTeam = params.slotTeam;
    } else {
      this._slotTeam = {};
    }
    if (params?.tableHeight !== undefined) {
      this._tableHeight = params.tableHeight;
    } else {
      this._tableHeight = 0;
    }
    if (params?.tables) {
      this._tables = params.tables;
    } else {
      this._tables = [];
    }
    if (params?.tags) {
      this._tags = params.tags;
    } else {
      this._tags = [];
    }
    if (params?.uis) {
      this._uis = params.uis;
    } else {
      this._uis = [];
    }
    if (params?.zones) {
      this._zones = params.zones;
    } else {
      this._zones = [];
    }
    if (params?._templateIdToMockGameObjectParams) {
      this.__templateIdToMockGameObjectParams =
        params._templateIdToMockGameObjectParams;
    } else {
      this.__templateIdToMockGameObjectParams = {};
    }
    if (params?._scriptFileToData) {
      this.__scriptFileToData = params._scriptFileToData;
    } else {
      this.__scriptFileToData = {};
    }
    return this;
  }

  addCustomAction(
    name: string,
    tooltip?: string | undefined,
    identifier?: string | undefined
  ): void { }

  addDrawingLine(line: DrawingLine): boolean {
    this._drawingLines.push(line);
    return true;
  }

  addScreenUI(element: ScreenUIElement): number {
    const index = this._screenUIs.length;
    this._screenUIs.push(element);
    return index;
  }

  addUI(element: UIElement): number {
    const index = this._uis.length;
    this._uis.push(element);
    return index;
  }

  broadcastChatMessage(
    message: string,
    color?: Color | [r: number, g: number, b: number, a: number] | undefined
  ): void { }

  clearConsole(): void { }

  createLabel(position: Vector | [x: number, y: number, z: number]): Label {
    const label = new MockLabel();
    label.setPosition(position);
    this._labels.push(label);
    return label;
  }

  createObjectFromTemplate(
    templateId: string,
    position: Vector | [x: number, y: number, z: number]
  ): GameObject | undefined {
    // Fetch params (support a few built-in objects).
    let params: MockGameObjectParams | undefined =
      this.__templateIdToMockGameObjectParams[templateId];
    if (!params) {
      if (templateId === "A44BAA604E0ED034CD67FA9502214AA7") {
        params = { _objType: "Container" }; // built-in container
      } else if (templateId === "83FDE12C4E6D912B16B85E9A00422F43") {
        params = { _objType: "GameObject" }; // built-in cube
      }
    }

    // Fail if unknown.
    if (!params) {
      return undefined;
    }

    let obj: GameObject | undefined;
    if (params._objType === "Card") {
      obj = new MockCard(params);
    } else if (params._objType === "CardHolder") {
      obj = new MockCardHolder(params);
    } else if (params._objType === "Container") {
      obj = new MockContainer(params);
    } else if (params._objType === "Dice") {
      obj = new MockDice(params);
    } else if (params._objType === "GameObject") {
      obj = new MockGameObject(params);
    } else if (params._objType === "MultistateObject") {
      obj = new MockMultistateObject(params);
    } else {
      obj = new MockGameObject(params); // default
    }

    if (obj) {
      obj.setPosition(position);
      this._gameObjects.push(obj);
    }
    return obj;
  }

  createTableFromTemplate(
    templateId: string,
    position: Vector | [x: number, y: number, z: number]
  ): StaticObject | undefined {
    const params = this.__templateIdToMockGameObjectParams[templateId];
    if (!params) {
      return undefined;
    }
    const obj = new MockStaticObject(params);
    obj.setPosition(position);
    return obj;
  }

  createZone(position: Vector | [x: number, y: number, z: number]): Zone {
    const zone = new MockZone();
    zone.setPosition(position);
    this._zones.push(zone);
    return zone;
  }

  drawDebugBox(
    center: Vector | [x: number, y: number, z: number],
    extent: Vector | [x: number, y: number, z: number],
    orientation: Rotator | [pitch: number, yaw: number, roll: number],
    color: Color | [r: number, g: number, b: number, a: number],
    duration: number,
    thickness?: number | undefined
  ): void { }

  drawDebugLine(
    start: Vector | [x: number, y: number, z: number],
    end: Vector | [x: number, y: number, z: number],
    color: Color | [r: number, g: number, b: number, a: number],
    duration: number,
    thickness?: number | undefined
  ): void { }

  drawDebugPoint(
    position: Vector | [x: number, y: number, z: number],
    size: number,
    color: Color | [r: number, g: number, b: number, a: number],
    duration: number
  ): void { }

  drawDebugSphere(
    position: Vector | [x: number, y: number, z: number],
    radius: number,
    color: Color | [r: number, g: number, b: number, a: number],
    duration: number,
    thickness?: number | undefined
  ): void { }

  getAllLabels(): Label[] {
    return [...this._labels];
  }

  getAllObjects(skipContained?: boolean | undefined): GameObject[] {
    return this._gameObjects.filter((obj) => obj.isValid());
  }

  getAllPlayers(): Player[] {
    return [...this._players];
  }

  getAllTables(): StaticObject[] {
    return [...this._tables];
  }

  getAllTags(): string[] {
    // Seed with initialized.
    const result: Set<string> = new Set(this._tags);

    // Get from objects (including snap points).
    for (const obj of this.getAllObjects()) {
      for (const tag of obj.getTags()) {
        result.add(tag);
      }
      for (const snapPoint of obj.getAllSnapPoints()) {
        for (const tag of snapPoint.getTags()) {
          result.add(tag);
        }
      }
    }

    // Get from tables (including snap points).
    for (const obj of this.getAllTables()) {
      for (const tag of obj.getTags()) {
        result.add(tag);
      }
      for (const snapPoint of obj.getAllSnapPoints()) {
        for (const tag of snapPoint.getTags()) {
          result.add(tag);
        }
      }
    }

    return Array.from(result);
  }

  getAllZones(): Zone[] {
    return [...this._zones];
  }

  getAllowedPackages(): Package[] {
    return this._packages.filter((pkg: Package) => pkg.isAllowed());
  }

  getBackgroundFilename(): string {
    return this._backgroundFilename;
  }

  getBackgroundPackageId(): string {
    return this._backgroundPackageId;
  }

  getCurrentTurn(): number {
    return this.turns.getCurrentTurn();
  }

  getDrawingLines(): DrawingLine[] {
    return [...this._drawingLines];
  }

  getGameTime(): number {
    return this._gameTime;
  }

  getGravityMultiplier(): number {
    return this._gravityMultiplier;
  }

  getLabelById(labelId: string): Label | undefined {
    for (const label of this._labels) {
      if (label.getId() === labelId) {
        return label;
      }
    }
  }

  getObjectById(objectId: string): GameObject | undefined {
    for (const obj of this._gameObjects) {
      if (obj.getId() === objectId) {
        return obj;
      }
    }
  }

  getObjectGroupIds(): number[] {
    const result: Set<number> = new Set();
    for (const obj of this.getAllObjects()) {
      const groupId = obj.getGroupId();
      if (groupId !== -1) {
        result.add(groupId);
      }
    }
    return Array.from(result);
  }

  getObjectsByGroupId(groupId: number): GameObject[] {
    return this.getAllObjects().filter(
      (obj: GameObject) => obj.getGroupId() === groupId
    );
  }

  getObjectsByTemplateId(templateId: string): GameObject[] {
    return this.getAllObjects().filter(
      (obj: GameObject) => obj.getTemplateId() === templateId
    );
  }

  getPackageById(packageId: string): Package | undefined {
    for (const pkg of this._packages) {
      if (pkg.getUniqueId() === packageId) {
        return pkg;
      }
    }
  }

  getPlayerByName(name: string): Player | undefined {
    for (const player of this._players) {
      if (player.getName() === name) {
        return player;
      }
    }
  }

  getPlayerBySlot(slot: number): Player | undefined {
    for (const player of this._players) {
      if (player.getSlot() === slot) {
        return player;
      }
    }
  }

  getSavedData(key?: string | undefined): string {
    if (key === undefined) {
      return this._savedDataAnonymous;
    }
    return this._savedData[key];
  }

  getScreenUIs(): ScreenUIElement[] {
    return [...this._screenUIs];
  }

  getShowDiceRollMessages(): boolean {
    return this._showDiceRollMessages;
  }

  getSlotColor(slot: number): Color {
    const color = this._slotColor[slot];
    if (!color) {
      return new MockColor(1, 1, 1, 1);
    }
    return color.clone();
  }

  getSlotTeam(slot: number): number {
    const team = this._slotTeam[slot];
    if (team === undefined) {
      return 0;
    }
    return team;
  }

  getTableHeight(
    position?: Vector | [x: number, y: number, z: number] | undefined
  ): number {
    return this._tableHeight;
  }

  getTemplateName(templateId: string): string {
    const params: MockGameObjectParams | undefined =
      this.__templateIdToMockGameObjectParams[templateId];
    return params?.name ?? "";
  }

  getTemplatePackageId(templateId: string): string {
    const params: MockGameObjectParams | undefined =
      this.__templateIdToMockGameObjectParams[templateId];
    return params?.packageId ?? "";
  }

  getUIs(): UIElement[] {
    return [...this._uis];
  }

  getZoneById(zoneId: string): Zone | undefined {
    for (const zone of this._zones) {
      if (zone.getId() === zoneId) {
        return zone;
      }
    }
  }

  importSound(
    filename: string,
    packageId?: string | undefined,
    ignoreCache?: boolean | undefined
  ): Sound {
    return new MockSound();
  }

  importSoundFromURL(url: string, ignoreCache?: boolean | undefined): Sound {
    return new MockSound();
  }

  importText(filename: string, packageId?: string | undefined): string {
    return this.__scriptFileToData[filename];
  }

  previousTurn(): void {
    this.turns.previousTurn();
  }

  nextTurn(): void {
    this.turns.nextTurn();
  }

  removeCustomAction(identifier: string): void { }

  removeDrawingLine(index: number): void {
    if (index >= 0 && index < this._drawingLines.length) {
      this._drawingLines.splice(index, 1);
    }
  }

  removeDrawingLineObject(line: DrawingLine): void {
    const index = this._drawingLines.indexOf(line);
    this.removeDrawingLine(index);
  }

  removeScreenUI(index: number): void {
    if (index >= 0 && index < this._screenUIs.length) {
      this._screenUIs.splice(index, 1);
    }
  }

  removeScreenUIElement(element: ScreenUIElement): void {
    const index = this._screenUIs.indexOf(element);
    this.removeScreenUI(index);
  }

  removeUI(index: number): void {
    if (index >= 0 && index < this._uis.length) {
      this._uis.splice(index, 1);
    }
  }

  removeUIElement(element: UIElement): void {
    const index = this._uis.indexOf(element);
    this.removeUI(index);
  }

  resetScripting(): void { }

  setBackground(
    textureName?: string | undefined,
    packageId?: string | undefined
  ): void {
    this._backgroundFilename = textureName ?? "";
    this._backgroundPackageId = packageId ?? "";
  }

  setGravityMultiplier(multiplier: number): void {
    this._gravityMultiplier = multiplier;
  }

  setSavedData(data: string, key?: string | undefined): void {
    if (key === undefined) {
      this._savedDataAnonymous = data;
    } else {
      this._savedData[key] = data;
    }
  }

  setScreenUI(index: number, element: ScreenUIElement): void {
    if (index >= 0 && index < this._screenUIs.length) {
      this._screenUIs[index] = element;
    }
  }

  setShowDiceRollMessages(show: boolean): void {
    this._showDiceRollMessages = show;
  }

  setSlotColor(
    slot: number,
    color: Color | [r: number, g: number, b: number, a: number]
  ): void {
    this._slotColor[slot] = MockColor._from(color);
  }

  setSlotTeam(slot: number, team: number): void {
    this._slotTeam[slot] = team;
  }

  setUI(index: number, element: UIElement): void {
    if (index >= 0 && index < this._uis.length) {
      this._uis[index] = element;
    }
  }

  showPing(
    position: Vector | [x: number, y: number, z: number],
    color: Color | [r: number, g: number, b: number, a: number],
    playSound: boolean
  ): void { }

  startDebugMode(port?: number | undefined): void { }

  updateScreenUI(element: ScreenUIElement): void { }

  updateUI(element: UIElement): void { }

  // --------------------------------

  boxOverlap(
    position: Vector | [x: number, y: number, z: number],
    extent: Vector | [x: number, y: number, z: number],
    orientation?:
      | Rotator
      | [pitch: number, yaw: number, roll: number]
      | undefined
  ): GameObject[] {
    const p0: Vector = MockVector._from(position);
    const ext: Vector = MockVector._from(extent);
    const rot: Rotator = MockRotator._from(orientation ?? [0, 0, 0]);
    const invRot = rot.getInverse();
    const result: GameObject[] = [];
    for (const obj of this._gameObjects) {
      const offsetRaw = obj.getPosition().subtract(p0);
      const offset = invRot.rotateVector(offsetRaw);
      if (
        offset.x >= -ext.x &&
        offset.x <= ext.x &&
        offset.y >= -ext.y &&
        offset.y <= ext.y &&
        offset.z >= -ext.z &&
        offset.z <= ext.z
      ) {
        result.push(obj);
      }
    }
    return result;
  }

  boxTrace(
    start: Vector | [x: number, y: number, z: number],
    end: Vector | [x: number, y: number, z: number],
    extent: Vector | [x: number, y: number, z: number],
    orientation?:
      | Rotator
      | [pitch: number, yaw: number, roll: number]
      | undefined
  ): TraceHit[] {
    const p0 = MockVector._from(start);
    const p1 = MockVector._from(end);
    const ext = MockVector._from(extent);
    const rot: Rotator = MockRotator._from(orientation ?? [0, 0, 0]);
    const invRot = rot.getInverse();
    const result: TraceHit[] = [];
    for (const obj of this._gameObjects) {
      const closest = obj.getPosition().findClosestPointOnSegment(p0, p1);
      const offsetRaw = obj.getPosition().subtract(closest);
      const offset = invRot.rotateVector(offsetRaw);
      if (
        offset.x >= -ext.x &&
        offset.x <= ext.x &&
        offset.y >= -ext.y &&
        offset.y <= ext.y &&
        offset.z >= -ext.z &&
        offset.z <= ext.z
      ) {
        result.push(
          new MockTraceHit({
            distance: obj.getPosition().subtract(p0).magnitude(),
            impactPosition: new MockVector(0, 0, 0),
            normal: new MockVector(0, 0, 0),
            object: obj,
            position: new MockVector(0, 0, 0),
          })
        );
      }
      result.sort((a, b) => {
        return a.distance - b.distance;
      });
    }
    return result;
  }

  capsuleOverlap(
    position: Vector | [x: number, y: number, z: number],
    extent: Vector | [x: number, y: number, z: number],
    orientation?:
      | Rotator
      | [pitch: number, yaw: number, roll: number]
      | undefined
  ): GameObject[] {
    // "close enough".
    return this.boxOverlap(position, extent, orientation);
  }

  capsuleTrace(
    start: Vector | [x: number, y: number, z: number],
    end: Vector | [x: number, y: number, z: number],
    extent: Vector | [x: number, y: number, z: number],
    orientation?:
      | Rotator
      | [pitch: number, yaw: number, roll: number]
      | undefined
  ): TraceHit[] {
    // "close enough".
    return this.boxTrace(start, end, extent, orientation);
  }

  createObjectFromJSON(
    jsonString: string,
    position: Vector | [x: number, y: number, z: number]
  ): GameObject | undefined {
    throw new Error("Method not implemented.");
  }

  createStaticObjectFromJSON(
    jsonString: string,
    position: Vector | [x: number, y: number, z: number]
  ): StaticObject | undefined {
    throw new Error("Method not implemented.");
  }

  sphereTrace(
    start: Vector | [x: number, y: number, z: number],
    end: Vector | [x: number, y: number, z: number],
    radius: number
  ): TraceHit[] {
    const extent: Vector = new MockVector(radius, radius, radius);
    return this.boxTrace(start, end, extent, undefined);
  }

  sphereOverlap(
    position: Vector | [x: number, y: number, z: number],
    radius: number
  ): GameObject[] {
    const extent: Vector = new MockVector(radius, radius, radius);
    return this.boxOverlap(position, extent, undefined);
  }

  lineTrace(
    start: Vector | [x: number, y: number, z: number],
    end: Vector | [x: number, y: number, z: number]
  ): TraceHit[] {
    const p0 = MockVector._from(start);
    const p1 = MockVector._from(end);
    const result: TraceHit[] = [];
    for (const obj of this._gameObjects) {
      const ext = obj.getExtent(false, false);
      const rot = obj.getRotation();
      const invRot = rot.getInverse();
      const objPos = obj.getPosition();
      const closest = objPos.findClosestPointOnSegment(p0, p1);
      const offsetRaw = closest.subtract(objPos);
      const offset = invRot.rotateVector(offsetRaw);
      if (
        offset.x >= -ext.x &&
        offset.x <= ext.x &&
        offset.y >= -ext.y &&
        offset.y <= ext.y &&
        offset.z >= -ext.z &&
        offset.z <= ext.z
      ) {
        result.push(
          new MockTraceHit({
            distance: obj.getPosition().subtract(p0).magnitude(),
            impactPosition: new MockVector(0, 0, 0),
            normal: new MockVector(0, 0, 0),
            object: obj,
            position: new MockVector(0, 0, 0),
          })
        );
      }
      result.sort((a, b) => {
        return a.distance - b.distance;
      });
    }
    return result;
  }
}

SharedObjects.gameWorld = MockGameWorld.__sharedInstance;
