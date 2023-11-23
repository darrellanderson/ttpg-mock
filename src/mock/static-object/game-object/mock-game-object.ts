import {
  Container,
  GameObject,
  MulticastDelegate,
  Player,
  Rotator,
  SnapPoint,
  Switcher,
  Vector,
} from "@tabletop-playground/api";
import {
  MockStaticObject,
  MockStaticObjectParams,
} from "../mock-static-object";
import { MockMulticastDelegate } from "../../multicast-delegate/mock-multicast-delegate";
import { MockRotator } from "../../rotator/mock-rotator";
import { MockVector } from "../../vector/mock-vector";
import { ObjectType } from "../../../enums";
import { MockGameWorld } from "../../game-world/mock-game-world";

export type MockGameObjectParams = MockStaticObjectParams & {
  angularVelocity?: Rotator;
  centerOfMass?: Vector;
  container?: Container;
  groupId?: number;
  isHeld?: boolean;
  isSimulatingPhysics?: boolean;
  isSnappingAllowed?: boolean;
  linearVelocity?: Vector;
  mass?: number;
  objectType?: number;
  owningPlayerSlot?: number;
  snappedToPoint?: SnapPoint;
  switcher?: Switcher;
};

export class MockGameObject extends MockStaticObject implements GameObject {
  private _angularVelocity: Rotator = new MockRotator(0, 0, 0);
  private _centerOfMass: Vector = new MockVector(0, 0, 0);
  private _container: Container | undefined = undefined;
  private _groupId: number = -1;
  private _isHeld: boolean = false;
  private _isSimulatingPhysics: boolean = false;
  private _isSnappingAllowed: boolean = true;
  private _linearVelocity: Vector = new MockVector(0, 0, 0);
  private _mass: number = 1;
  private _objectType: number = ObjectType.Regular;
  private _owningPlayerSlot: number = -1;
  private _snappedToPoint: SnapPoint | undefined = undefined;
  private _switcher: Switcher | undefined = undefined;

  constructor(params?: MockGameObjectParams) {
    super(params);

    if (params?.angularVelocity) {
      this._angularVelocity = params.angularVelocity;
    }
    if (params?.centerOfMass) {
      this._centerOfMass = params.centerOfMass;
    }
    if (params?.container) {
      this._container = params.container;
    }
    if (params?.groupId !== undefined) {
      this._groupId = params.groupId;
    }
    if (params?.isHeld !== undefined) {
      this._isHeld = params.isHeld;
    }
    if (params?.isSimulatingPhysics !== undefined) {
      this._isSimulatingPhysics = params.isSimulatingPhysics;
    }
    if (params?.isSnappingAllowed !== undefined) {
      this._isSnappingAllowed = params.isSnappingAllowed;
    }
    if (params?.linearVelocity) {
      this._linearVelocity = params.linearVelocity;
    }
    if (params?.mass !== undefined) {
      this._mass = params.mass;
    }
    if (params?.objectType !== undefined) {
      this._objectType = params.objectType;
    }
    if (params?.owningPlayerSlot !== undefined) {
      this._owningPlayerSlot = params.owningPlayerSlot;
    }
    if (params?.snappedToPoint) {
      this._snappedToPoint = params.snappedToPoint;
    }
    if (params?.switcher) {
      this._switcher = params.switcher;
    }
  }

  onCreated: MulticastDelegate<(object: this) => void> =
    new MockMulticastDelegate();
  onDestroyed: MulticastDelegate<(object: this) => void> =
    new MockMulticastDelegate();
  onTick: MulticastDelegate<(object: this, deltaTime: number) => void> =
    new MockMulticastDelegate();
  onGrab: MulticastDelegate<(object: this, player: Player) => void> =
    new MockMulticastDelegate();
  onReleased: MulticastDelegate<
    (
      object: this,
      player: Player,
      thrown: boolean,
      grabPosition: Vector | [x: number, y: number, z: number],
      grabRotation: Rotator | [pitch: number, yaw: number, roll: number]
    ) => void
  > = new MockMulticastDelegate();
  onSnapped: MulticastDelegate<
    (
      object: this,
      player: Player,
      snapPoint: SnapPoint,
      grabPosition: Vector | [x: number, y: number, z: number],
      grabRotation: Rotator | [pitch: number, yaw: number, roll: number]
    ) => void
  > = new MockMulticastDelegate();
  onSnappedToGrid: MulticastDelegate<
    (
      object: this,
      player: Player,
      grabPosition: Vector | [x: number, y: number, z: number],
      grabRotation: Rotator | [pitch: number, yaw: number, roll: number]
    ) => void
  > = new MockMulticastDelegate();
  onReset: MulticastDelegate<(object: this, player: Player) => void> =
    new MockMulticastDelegate();
  onHit: MulticastDelegate<
    (
      object: this,
      otherObject: GameObject,
      first: boolean,
      impactPoint: Vector | [x: number, y: number, z: number],
      impulse: Vector | [x: number, y: number, z: number]
    ) => void
  > = new MockMulticastDelegate();
  onPrimaryAction: MulticastDelegate<(object: this, player: Player) => void> =
    new MockMulticastDelegate();
  onSecondaryAction: MulticastDelegate<(object: this, player: Player) => void> =
    new MockMulticastDelegate();
  onNumberAction: MulticastDelegate<
    (object: this, player: Player, number: number) => void
  > = new MockMulticastDelegate();
  onCustomAction: MulticastDelegate<
    (object: this, player: Player, identifier: string) => void
  > = new MockMulticastDelegate();
  onMovementStopped: MulticastDelegate<(object: this) => void> =
    new MockMulticastDelegate();

  getAngularVelocity(): Rotator {
    return this._angularVelocity;
  }

  getCenterOfMass(): Vector {
    return this._centerOfMass;
  }

  getContainer(): Container | undefined {
    return this._container;
  }

  getGroupId(): number {
    return this._groupId;
  }

  getLinearVelocity(): Vector {
    return this._linearVelocity;
  }

  getMass(): number {
    return this._mass;
  }

  getObjectType(): number {
    return this._objectType;
  }

  getOwningPlayer(): Player | undefined {
    for (const player of MockGameWorld.__sharedInstance.getAllPlayers()) {
      if (player.getSlot() === this._owningPlayerSlot) {
        return player;
      }
    }
  }

  getOwningPlayerSlot(): number {
    return this._owningPlayerSlot;
  }

  getSnappedToPoint(): SnapPoint | undefined {
    return this._snappedToPoint;
  }

  getSwitcher(): Switcher | undefined {
    return this._switcher;
  }

  isHeld(): boolean {
    return this._isHeld;
  }

  isSimulatingPhysics(): boolean {
    return this._isSimulatingPhysics;
  }

  isSnappingAllowed(): boolean {
    return this._isSnappingAllowed;
  }

  setAngularVelocity(
    velocity: Rotator | [pitch: number, yaw: number, roll: number]
  ): void {
    this._angularVelocity = MockRotator._from(velocity);
  }

  setGroupId(groupId: number): void {
    this._groupId = groupId;
  }

  setLinearVelocity(
    velocity: Vector | [x: number, y: number, z: number]
  ): void {
    this._linearVelocity = MockVector._from(velocity);
  }

  setObjectType(type: number): void {
    this._objectType = type;
  }

  setOwningPlayerSlot(slot: number): void {
    this._owningPlayerSlot = slot;
  }

  setSnappingAllowed(allowed: boolean): void {
    this._isSnappingAllowed = allowed;
  }

  // ----------------------------------

  toggleLock(): void {
    throw new Error("Method not implemented.");
  }
  switchLights(on: boolean): void {
    throw new Error("Method not implemented.");
  }
  snapToGround(): void {
    throw new Error("Method not implemented.");
  }
  snap(animationSpeed?: number | undefined): SnapPoint | undefined {
    throw new Error("Method not implemented.");
  }
  removeCustomAction(identifier: string): void {
    throw new Error("Method not implemented.");
  }
  release(): void {
    throw new Error("Method not implemented.");
  }
  freeze(): void {
    throw new Error("Method not implemented.");
  }
  flipOrUpright(): void {
    throw new Error("Method not implemented.");
  }
  createSwitcher(
    objects: GameObject[],
    showAnimation?: boolean | undefined
  ): Switcher {
    throw new Error("Method not implemented.");
  }
  areLightsOn(): boolean {
    throw new Error("Method not implemented.");
  }
  applyTorque(
    torque: Vector | [x: number, y: number, z: number],
    useMass?: boolean | undefined
  ): void {
    throw new Error("Method not implemented.");
  }
  applyImpulseAtPosition(
    impulse: Vector | [x: number, y: number, z: number],
    position: Vector | [x: number, y: number, z: number]
  ): void {
    throw new Error("Method not implemented.");
  }
  applyImpulse(
    impulse: Vector | [x: number, y: number, z: number],
    useMass?: boolean | undefined
  ): void {
    throw new Error("Method not implemented.");
  }
  applyForceAtPosition(
    force: Vector | [x: number, y: number, z: number],
    position: Vector | [x: number, y: number, z: number]
  ): void {
    throw new Error("Method not implemented.");
  }
  applyForce(
    force: Vector | [x: number, y: number, z: number],
    useMass?: boolean | undefined
  ): void {
    throw new Error("Method not implemented.");
  }
  applyAngularImpulse(
    impulse: Vector | [x: number, y: number, z: number],
    useMass?: boolean | undefined
  ): void {
    throw new Error("Method not implemented.");
  }
  addCustomAction(
    name: string,
    tooltip?: string | undefined,
    identifier?: string | undefined
  ): void {
    throw new Error("Method not implemented.");
  }
}
