import {
  Color,
  GameObject,
  MulticastDelegate,
  Rotator,
  Vector,
  Zone,
} from "@tabletop-playground/api";
import { ZonePermission, ZoneShape } from "../../enums";
import { MockMulticastDelegate } from "../multicast-delegate/mock-multicast-delegate";
import { MockColor } from "../color/mock-color";
import { MockRotator } from "../rotator/mock-rotator";
import { MockVector } from "../vector/mock-vector";

export type MockZoneParams = {
  alwaysVisible?: boolean;
  color?: Color;
  id?: string;
  owningSlots?: number[];
  position?: Vector;
  rotation?: Rotator;
  savedData?: string;
  scale?: Vector;
  shape?: number;
  valid?: boolean;
  perm_cursorHidden?: number;
  perm_inserting?: number;
  perm_objectInteraction?: number;
  perm_objectVisibility?: number;
  perm_snapping?: number;
  perm_stacking?: number;
};

export class MockZone implements Zone {
  private static __zoneIndex = 0;

  onDestroyed: MulticastDelegate<(zone: this) => void> =
    new MockMulticastDelegate<(zone: this) => void>();
  onTick: MulticastDelegate<(zone: this, deltaTime: number) => void> =
    new MockMulticastDelegate<(zone: this, deltaTime: number) => void>();
  onBeginOverlap: MulticastDelegate<(zone: this, object: GameObject) => void> =
    new MockMulticastDelegate<(zone: this, object: GameObject) => void>();
  onEndOverlap: MulticastDelegate<(zone: this, object: GameObject) => void> =
    new MockMulticastDelegate<(zone: this, object: GameObject) => void>();

  private _alwaysVisible = true;
  private _color: Color = new MockColor(1, 1, 1, 1);
  private _perm = {
    cursorHidden: ZonePermission.Everybody,
    inserting: ZonePermission.Everybody,
    objectInteraction: ZonePermission.Everybody,
    objectVisibility: ZonePermission.Everybody,
    snapping: ZonePermission.Everybody,
    stacking: ZonePermission.Everybody,
  };
  private _id: string = `__zone_${MockZone.__zoneIndex++}__`;
  private _owningSlots: number[] = [];
  private _position: Vector = new MockVector(0, 0, 0);
  private _rotation: Rotator = new MockRotator(0, 0, 0);
  private _savedData: string = "";
  private _scale: Vector = new MockVector(1, 1, 1);
  private _shape: number = ZoneShape.Box;
  private _valid: boolean = true;

  constructor(params?: MockZoneParams) {
    if (params?.alwaysVisible) {
      this._alwaysVisible = params.alwaysVisible;
    }
    if (params?.color) {
      this._color = params.color;
    }
    if (params?.id) {
      this._id = params.id;
    }
    if (params?.owningSlots) {
      this._owningSlots = params.owningSlots;
    }
    if (params?.position) {
      this._position = params.position;
    }
    if (params?.rotation) {
      this._rotation = params.rotation;
    }
    if (params?.savedData) {
      this._savedData = params.savedData;
    }
    if (params?.scale) {
      this._scale = params.scale;
    }
    if (params?.shape) {
      this._shape = params.shape;
    }
    if (params?.valid) {
      this._valid = params.valid;
    }
    if (params?.perm_cursorHidden) {
      this._perm.cursorHidden = params.perm_cursorHidden;
    }
    if (params?.perm_inserting) {
      this._perm.inserting = params.perm_inserting;
    }
    if (params?.perm_objectInteraction) {
      this._perm.objectInteraction = params.perm_objectInteraction;
    }
    if (params?.perm_objectVisibility) {
      this._perm.objectVisibility = params.perm_objectVisibility;
    }
    if (params?.perm_snapping) {
      this._perm.snapping = params.perm_snapping;
    }
    if (params?.perm_stacking) {
      this._perm.stacking = params.perm_stacking;
    }
  }

  destroy(): void {
    this._valid = false;
  }

  getColor(): Color {
    return this._color.clone();
  }

  getCursorHidden(): number {
    return this._perm.cursorHidden;
  }

  getId(): string {
    return this._id;
  }

  getInserting(): number {
    return this._perm.inserting;
  }

  getObjectInteraction(): number {
    return this._perm.objectInteraction;
  }

  getObjectVisibility(): number {
    return this._perm.objectVisibility;
  }

  getOwningSlots(): number[] {
    return [...this._owningSlots];
  }

  getPosition(): Vector {
    return this._position.clone();
  }

  getRotation(): Rotator {
    return this._rotation.clone();
  }

  getSavedData(): string {
    return this._savedData;
  }

  getScale(): Vector {
    return this._scale.clone();
  }

  getShape(): number {
    return this._shape;
  }

  getSnapping(): number {
    return this._perm.snapping;
  }

  getStacking(): number {
    return this._perm.stacking;
  }

  isAlwaysVisible(): boolean {
    return this._alwaysVisible;
  }

  isSlotOwner(playerIndex: number): boolean {
    return this._owningSlots.includes(playerIndex);
  }

  isValid(): boolean {
    return this._valid;
  }

  setAlwaysVisible(alwaysVisible: boolean): void {
    this._alwaysVisible = alwaysVisible;
  }

  setColor(color: Color | [r: number, g: number, b: number, a: number]): void {
    this._color = MockColor._from(color);
  }

  setCursorHidden(permission: number): void {
    this._perm.cursorHidden = permission;
  }

  setId(iD: string): boolean {
    this._id = iD;
    return true;
  }

  setInserting(permission: number): void {
    this._perm.inserting = permission;
  }

  setObjectInteraction(permission: number): void {
    this._perm.objectInteraction = permission;
  }

  setObjectVisibility(permission: number): void {
    this._perm.objectVisibility = permission;
  }

  setPosition(position: Vector | [x: number, y: number, z: number]): void {
    this._position = MockVector._from(position);
  }

  setRotation(
    rotation: Rotator | [pitch: number, yaw: number, roll: number]
  ): void {
    this._rotation = MockRotator._from(rotation);
  }

  setSavedData(data: string): void {
    this._savedData = data;
  }

  setScale(scale: Vector | [x: number, y: number, z: number]): void {
    this._scale = MockVector._from(scale);
  }

  setShape(shape: number): void {
    this._shape = shape;
  }

  setSlotOwns(playerSlot: number, owner: boolean): void {
    const index = this._owningSlots.indexOf(playerSlot);
    if (owner && index < 0) {
      this._owningSlots.push(playerSlot);
    } else if (!owner && index >= 0) {
      this._owningSlots.splice(index, 1);
    }
  }

  setSnapping(permission: number): void {
    this._perm.snapping = permission;
  }

  setStacking(permission: number): void {
    this._perm.stacking = permission;
  }

  // --------------------------------

  getOverlappingObjects(): GameObject[] {
    throw new Error("Method not implemented.");
  }

  isOverlapping(object: GameObject): boolean {
    throw new Error("Method not implemented.");
  }
}
