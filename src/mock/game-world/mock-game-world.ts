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
import { MockGlobalGrid } from "../global-grid/mock-global-grid";
import { MockLightingSettings } from "../lighting-settings/mock-lighting-settings";
import { MockTurnSystem } from "../turn-system/mock-turn-system";
import { MockLabel } from "../label/mock-label";
import { MockZone } from "../zone/mock-zone";

export type MockGameWorldParams = {
  backgroundFilename?: string;
  backgroundPackageId?: string;
  currentTurn?: number;
  drawingLines?: DrawingLine[];
  gameObjects?: GameObject[];
  gravityMultiplier?: number;
  labels?: Label[];
  packages?: Package[];
  players?: Player[];
  savedData?: { [key: string]: string };
  savedDataAnonymous?: string;
  showDiceRollMessages?: boolean;
  slotTeam?: { [key: number]: number };
  screenUIs?: ScreenUIElement[];
  tableHeight?: number;
  tables?: StaticObject[];
  tags?: string[];
  uis?: UIElement[];
  zones?: Zone[];
};

export class MockGameWorld implements GameWorld {
  grid: GlobalGrid = new MockGlobalGrid();
  lighting: LightingSettings = new MockLightingSettings();
  turns: TurnSystem = new MockTurnSystem();

  private _backgroundFilename: string = "";
  private _backgroundPackageId: string = "";
  private _currentTurn: number = 0;
  private _drawingLines: DrawingLine[] = [];
  private _gameObjects: GameObject[] = [];
  private _gravityMultiplier: number = 1;
  private _labels: Label[] = [];
  private _packages: Package[] = [];
  private _players: Player[] = [];
  private _savedData: { [key: string]: string } = {};
  private _savedDataAnonymous: string = "";
  private _screenUIs: ScreenUIElement[] = [];
  private _showDiceRollMessages: boolean = true;
  private _slotTeam: { [key: number]: number } = {};
  private _tableHeight: number = 0;
  private _tables: StaticObject[] = [];
  private _tags: string[] = [];
  private _uis: UIElement[] = [];
  private _zones: Zone[] = [];

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
  _reset(params?: MockGameWorldParams) {
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
    if (params?.currentTurn !== undefined) {
      this._currentTurn = params.currentTurn;
    } else {
      this._currentTurn = 0;
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
    if (params?.slotTeam !== undefined) {
      this._slotTeam = params.slotTeam;
    } else {
      this._slotTeam = [];
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
  }

  addCustomAction(
    name: string,
    tooltip?: string | undefined,
    identifier?: string | undefined
  ): void {}

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
  ): void {}

  clearConsole(): void {}

  createLabel(position: Vector | [x: number, y: number, z: number]): Label {
    const label = new MockLabel();
    label.setPosition(position);
    this._labels.push(label);
    return label;
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
  ): void {}

  drawDebugLine(
    start: Vector | [x: number, y: number, z: number],
    end: Vector | [x: number, y: number, z: number],
    color: Color | [r: number, g: number, b: number, a: number],
    duration: number,
    thickness?: number | undefined
  ): void {}

  drawDebugPoint(
    position: Vector | [x: number, y: number, z: number],
    size: number,
    color: Color | [r: number, g: number, b: number, a: number],
    duration: number
  ): void {}

  drawDebugSphere(
    position: Vector | [x: number, y: number, z: number],
    radius: number,
    color: Color | [r: number, g: number, b: number, a: number],
    duration: number,
    thickness?: number | undefined
  ): void {}

  getAllLabels(): Label[] {
    return this._labels;
  }

  getAllObjects(skipContained?: boolean | undefined): GameObject[] {
    return this._gameObjects;
  }

  getAllPlayers(): Player[] {
    return this._players;
  }

  getAllTables(): StaticObject[] {
    return this._tables;
  }

  getAllTags(): string[] {
    // Seed with initialized.
    const result = new Set(this._tags);

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
    return this._zones;
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
    return this._currentTurn;
  }

  getDrawingLines(): DrawingLine[] {
    return this._drawingLines;
  }

  getGameTime(): number {
    return 0;
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

  getSavedData(key?: string | undefined): string {
    if (key === undefined) {
      return this._savedDataAnonymous;
    }
    return this._savedData[key];
  }

  getScreenUIs(): ScreenUIElement[] {
    return this._screenUIs;
  }

  getShowDiceRollMessages(): boolean {
    return this._showDiceRollMessages;
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

  getUIs(): UIElement[] {
    return this._uis;
  }

  removeCustomAction(identifier: string): void {}

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

  setSavedData(data: string, key?: string | undefined): void {
    if (key === undefined) {
      this._savedDataAnonymous = data;
    } else {
      this._savedData[key] = data;
    }
  }

  // --------------------------------

  boxOverlap(
    position: Vector | [x: number, y: number, z: number],
    extent: Vector | [x: number, y: number, z: number],
    orientation?:
      | Rotator
      | [pitch: number, yaw: number, roll: number]
      | undefined
  ): GameObject[] {
    throw new Error("Method not implemented.");
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
    throw new Error("Method not implemented.");
  }

  capsuleOverlap(
    position: Vector | [x: number, y: number, z: number],
    extent: Vector | [x: number, y: number, z: number],
    orientation?:
      | Rotator
      | [pitch: number, yaw: number, roll: number]
      | undefined
  ): GameObject[] {
    throw new Error("Method not implemented.");
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
    throw new Error("Method not implemented.");
  }

  createObjectFromJSON(
    jsonString: string,
    position: Vector | [x: number, y: number, z: number]
  ): GameObject | undefined {
    throw new Error("Method not implemented.");
  }

  createObjectFromTemplate(
    templateId: string,
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

  createTableFromTemplate(
    templateId: string,
    position: Vector | [x: number, y: number, z: number]
  ): StaticObject | undefined {
    throw new Error("Method not implemented.");
  }

  updateUI(element: UIElement): void {
    throw new Error("Method not implemented.");
  }
  updateScreenUI(element: ScreenUIElement): void {
    throw new Error("Method not implemented.");
  }
  startDebugMode(port?: number | undefined): void {
    throw new Error("Method not implemented.");
  }
  sphereTrace(
    start: Vector | [x: number, y: number, z: number],
    end: Vector | [x: number, y: number, z: number],
    radius: number
  ): TraceHit[] {
    throw new Error("Method not implemented.");
  }
  sphereOverlap(
    position: Vector | [x: number, y: number, z: number],
    radius: number
  ): GameObject[] {
    throw new Error("Method not implemented.");
  }
  showPing(
    position: Vector | [x: number, y: number, z: number],
    color: Color | [r: number, g: number, b: number, a: number],
    playSound: boolean
  ): void {
    throw new Error("Method not implemented.");
  }
  setUI(index: number, element: UIElement): void {
    throw new Error("Method not implemented.");
  }
  setSlotTeam(slot: number, team: number): void {
    throw new Error("Method not implemented.");
  }
  setSlotColor(
    slot: number,
    color: Color | [r: number, g: number, b: number, a: number]
  ): void {
    throw new Error("Method not implemented.");
  }
  setShowDiceRollMessages(show: boolean): void {
    throw new Error("Method not implemented.");
  }
  setScreenUI(index: number, element: ScreenUIElement): void {
    throw new Error("Method not implemented.");
  }
  setGravityMultiplier(multiplier: number): void {
    throw new Error("Method not implemented.");
  }
  setBackground(
    textureName?: string | undefined,
    packageId?: string | undefined
  ): void {
    throw new Error("Method not implemented.");
  }
  resetScripting(): void {
    throw new Error("Method not implemented.");
  }
  previousTurn(): void {
    throw new Error("Method not implemented.");
  }
  nextTurn(): void {
    throw new Error("Method not implemented.");
  }
  lineTrace(
    start: Vector | [x: number, y: number, z: number],
    end: Vector | [x: number, y: number, z: number]
  ): TraceHit[] {
    throw new Error("Method not implemented.");
  }
  importText(filename: string, packageId?: string | undefined): string {
    throw new Error("Method not implemented.");
  }
  importSoundFromURL(url: string, ignoreCache?: boolean | undefined): Sound {
    throw new Error("Method not implemented.");
  }
  importSound(
    filename: string,
    packageId?: string | undefined,
    ignoreCache?: boolean | undefined
  ): Sound {
    throw new Error("Method not implemented.");
  }
  getZoneById(zoneId: string): Zone | undefined {
    throw new Error("Method not implemented.");
  }
  getTemplatePackageId(templateId: string): string {
    throw new Error("Method not implemented.");
  }
  getTemplateName(templateId: string): string {
    throw new Error("Method not implemented.");
  }
  getSlotColor(slot: number): Color {
    throw new Error("Method not implemented.");
  }
  getPlayerBySlot(slot: number): Player | undefined {
    throw new Error("Method not implemented.");
  }
  getPlayerByName(name: string): Player | undefined {
    throw new Error("Method not implemented.");
  }
  getPackageById(packageId: string): Package | undefined {
    throw new Error("Method not implemented.");
  }
  getObjectsByTemplateId(templateId: string): GameObject[] {
    throw new Error("Method not implemented.");
  }
  getObjectsByGroupId(groupId: number): GameObject[] {
    throw new Error("Method not implemented.");
  }
  getObjectGroupIds(): number[] {
    throw new Error("Method not implemented.");
  }
  getObjectById(objectId: string): GameObject | undefined {
    throw new Error("Method not implemented.");
  }
}
