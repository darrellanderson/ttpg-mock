/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Container,
    GameObject,
    GameWorld,
    MulticastDelegate,
    Player,
    Rotator,
    SnapPoint,
    StaticObject,
    Switcher,
    Vector,
} from "@tabletop-playground/api";
import {
    MockStaticObject,
    MockStaticObjectParams,
} from "../mock-static-object";
import { MockMulticastDelegate } from "../../multicast-delegate/mock-multicast-delegate";
import { MockRotator } from "../../rotator/mock-rotator";
import { MockSwitcher } from "../../switcher/mock-switcher";
import { MockVector } from "../../vector/mock-vector";
import { ObjectType } from "../../../enums";
import { SharedObjects } from "../../../shared-objects";
import { MockGameWorld } from "../../game-world/mock-game-world";
import { MockSnapPoint } from "../../snap-point/mock-snap-point";

export type MockGameObjectParams = MockStaticObjectParams & {
    angularVelocity?: Rotator | [pitch: number, yaw: number, roll: number];
    areLightsOn?: boolean;
    centerOfMass?: Vector | [x: number, y: number, z: number];
    container?: Container;
    groupId?: number;
    isHeld?: boolean;
    isSimulatingPhysics?: boolean;
    isSnappingAllowed?: boolean;
    linearVelocity?: Vector | [x: number, y: number, z: number];
    mass?: number;
    objectType?: number;
    owningPlayerSlot?: number;
    snappedToPoint?: SnapPoint;
    switcher?: Switcher;
};

export class MockGameObject extends MockStaticObject implements GameObject {
    private _angularVelocity: Rotator = new MockRotator(0, 0, 0);
    private _areLightsOn: boolean = true;
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

    public readonly onCreated: MulticastDelegate<(object: this) => void> =
        new MockMulticastDelegate();
    public readonly onDestroyed: MulticastDelegate<(object: this) => void> =
        new MockMulticastDelegate();
    public readonly onFlipUpright: MulticastDelegate<
        (object: this, player: Player) => void
    > = new MockMulticastDelegate<(object: this, player: Player) => void>();
    public readonly onTick: MulticastDelegate<
        (object: this, deltaTime: number) => void
    > = new MockMulticastDelegate();
    public readonly onGrab: MulticastDelegate<
        (object: this, player: Player) => void
    > = new MockMulticastDelegate();
    public readonly onReleased: MulticastDelegate<
        (
            object: this,
            player: Player,
            thrown: boolean,
            grabPosition: Vector | [x: number, y: number, z: number],
            grabRotation: Rotator | [pitch: number, yaw: number, roll: number]
        ) => void
    > = new MockMulticastDelegate();
    public readonly onSnapped: MulticastDelegate<
        (
            object: this,
            player: Player,
            snapPoint: SnapPoint,
            grabPosition: Vector | [x: number, y: number, z: number],
            grabRotation: Rotator | [pitch: number, yaw: number, roll: number]
        ) => void
    > = new MockMulticastDelegate();
    public readonly onSnappedToGrid: MulticastDelegate<
        (
            object: this,
            player: Player,
            grabPosition: Vector | [x: number, y: number, z: number],
            grabRotation: Rotator | [pitch: number, yaw: number, roll: number]
        ) => void
    > = new MockMulticastDelegate();
    public readonly onReset: MulticastDelegate<
        (object: this, player: Player) => void
    > = new MockMulticastDelegate();
    public readonly onHit: MulticastDelegate<
        (
            object: this,
            otherObject: GameObject,
            first: boolean,
            impactPoint: Vector | [x: number, y: number, z: number],
            impulse: Vector | [x: number, y: number, z: number]
        ) => void
    > = new MockMulticastDelegate();
    public readonly onPrimaryAction: MulticastDelegate<
        (object: this, player: Player) => void
    > = new MockMulticastDelegate();
    public readonly onSecondaryAction: MulticastDelegate<
        (object: this, player: Player) => void
    > = new MockMulticastDelegate();
    public readonly onNumberAction: MulticastDelegate<
        (object: this, player: Player, number: number) => void
    > = new MockMulticastDelegate();
    public readonly onCustomAction: MulticastDelegate<
        (object: this, player: Player, identifier: string) => void
    > = new MockMulticastDelegate();
    public readonly onMovementStopped: MulticastDelegate<
        (object: this) => void
    > = new MockMulticastDelegate();

    /**
     * Shortcut method to create a simple card with the given metadata.
     *
     * @param cardMetadata
     * @param params
     * @returns
     */
    public static simple(
        metadata: string,
        params?: MockGameObjectParams
    ): MockGameObject {
        return new MockGameObject({
            ...params,
            templateMetadata: metadata,
        });
    }

    constructor(
        params?: MockGameObjectParams,
        triggerOnCreated: boolean = true
    ) {
        super(params);

        if (params?.angularVelocity) {
            this._angularVelocity = MockRotator._from(params.angularVelocity);
        }
        if (params?.areLightsOn !== undefined) {
            this._areLightsOn = params.areLightsOn;
        }
        if (params?.centerOfMass) {
            this._centerOfMass = MockVector._from(params.centerOfMass);
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
            this._linearVelocity = MockVector._from(params.linearVelocity);
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

        if (SharedObjects.maybeGameWorld) {
            (SharedObjects.gameWorld as MockGameWorld)._addGameObject(this);
        }

        if (triggerOnCreated) {
            this._triggerOnCreated();
        }
    }

    _triggerOnCreated(): void {
        const onCreated = this.onCreated as MockMulticastDelegate<
            (object: this) => void
        >;
        onCreated._trigger(this);
        if (SharedObjects.maybeGlobalScriptingEvents) {
            const onObjectCreated = SharedObjects.globalScriptingEvents
                .onObjectCreated as MockMulticastDelegate<
                (object: GameObject) => void
            >;
            onObjectCreated._trigger(this);
        }
    }

    _setContainer(container: Container | undefined): void {
        this._container = container;
    }

    _setSnappedToPoint(snapPoint: SnapPoint | undefined): void {
        if (this._snappedToPoint) {
            (this._snappedToPoint as MockSnapPoint)._setSnappedObject(
                undefined
            );
        }
        this._snappedToPoint = snapPoint;
        if (snapPoint && snapPoint.getSnappedObject() !== this) {
            (snapPoint as MockSnapPoint)._setSnappedObject(this);
        }
    }

    _flipOrUprightAsPlayer(player: Player): void {
        this.flipOrUpright();
        const onFlipUpright = this.onFlipUpright as MockMulticastDelegate<
            (object: this, player: Player) => void
        >;
        onFlipUpright._trigger(this, player);
    }

    _grabAsPlayer(player: Player) {
        this._isHeld = true;
        const onGrab = this.onGrab as MockMulticastDelegate<
            (object: this, player: Player) => void
        >;
        onGrab._trigger(this, player);
    }

    _releaseAsPlayer(player: Player, thrown: boolean) {
        this._isHeld = false;
        const onReleased = this.onReleased as MockMulticastDelegate<
            (
                object: this,
                player: Player,
                thrown: boolean,
                grabPosition: Vector | [x: number, y: number, z: number],
                grabRotation:
                    | Rotator
                    | [pitch: number, yaw: number, roll: number]
            ) => void
        >;
        onReleased._trigger(this, player, thrown, [0, 0, 0], [0, 0, 0]);
    }

    _snapAsPlayer(snapPoint: SnapPoint, player: Player): void {
        this._setSnappedToPoint(snapPoint);
        const onSnapped = this.onSnapped as MockMulticastDelegate<
            (
                object: this,
                player: Player,
                snapPoint: SnapPoint,
                grabPosition: Vector | [x: number, y: number, z: number],
                grabRotation:
                    | Rotator
                    | [pitch: number, yaw: number, roll: number]
            ) => void
        >;
        onSnapped._trigger(this, player, snapPoint, [0, 0, 0], [0, 0, 0]);

        const snappedTo: StaticObject | undefined = snapPoint.getParentObject();
        if (snappedTo) {
            const onSnappedTo = snappedTo.onSnappedTo as MockMulticastDelegate<
                (
                    object: GameObject,
                    player: Player,
                    snapPoint: SnapPoint,
                    grabPosition: Vector | [x: number, y: number, z: number],
                    grabRotation:
                        | Rotator
                        | [pitch: number, yaw: number, roll: number]
                ) => void
            >;
            onSnappedTo._trigger(this, player, snapPoint, [0, 0, 0], [0, 0, 0]);
        }
    }

    _primaryActionAsPlayer(player: Player) {
        const onPrimaryAction = this.onPrimaryAction as MockMulticastDelegate<
            (object: this, player: Player) => void
        >;
        onPrimaryAction._trigger(this, player);
    }

    _secondaryActionAsPlayer(player: Player) {
        const onSecondaryAction = this
            .onSecondaryAction as MockMulticastDelegate<
            (object: this, player: Player) => void
        >;
        onSecondaryAction._trigger(this, player);
    }

    _numberActionAsPlayer(player: Player, number: number) {
        const onNumberAction = this.onNumberAction as MockMulticastDelegate<
            (object: this, player: Player, number: number) => void
        >;
        onNumberAction._trigger(this, player, number);
    }

    _customActionAsPlayer(player: Player, identifier: string) {
        const onCustomAction = this.onCustomAction as MockMulticastDelegate<
            (object: this, player: Player, identifier: string) => void
        >;
        onCustomAction._trigger(this, player, identifier);
    }

    addCustomAction(
        name: string,
        tooltip?: string | undefined,
        identifier?: string | undefined
    ): void {}

    areLightsOn(): boolean {
        return this._areLightsOn;
    }

    createSwitcher(
        objects: GameObject[],
        showAnimation?: boolean | undefined
    ): Switcher {
        return new MockSwitcher({ gameObjects: [this, ...objects] });
    }

    destroy(): void {
        super.destroy();

        const onDestroyed = this.onDestroyed as MockMulticastDelegate<
            (object: this) => void
        >;
        onDestroyed._trigger(this);

        if (SharedObjects.maybeGlobalScriptingEvents) {
            const onObjectDestroyed = SharedObjects.globalScriptingEvents
                .onObjectDestroyed as MockMulticastDelegate<
                (object: GameObject) => void
            >;
            onObjectDestroyed._trigger(this);
        }
    }

    flipOrUpright(): void {
        const rot: Rotator = this.getRotation();
        const newRot: Rotator = new MockRotator(0, 0, 180).compose(rot);
        this.setRotation(newRot);
    }

    freeze(): void {
        this.setObjectType(ObjectType.Ground);
    }

    getAngularVelocity(): Rotator {
        return this._angularVelocity.clone();
    }

    getCenterOfMass(): Vector {
        return this._centerOfMass.clone();
    }

    getContainer(): Container | undefined {
        return this._container;
    }

    getGroupId(): number {
        return this._groupId;
    }

    getLinearVelocity(): Vector {
        return this._linearVelocity.clone();
    }

    getMass(): number {
        return this._mass;
    }

    getObjectType(): number {
        return this._objectType;
    }

    getOwningPlayer(): Player | undefined {
        const gameWorld: GameWorld = SharedObjects.gameWorld;
        for (const player of gameWorld.getAllPlayers()) {
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

    release(): void {
        this._isHeld = false;
    }

    removeCustomAction(identifier: string): void {}

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

    setPosition(
        position: Vector | [x: number, y: number, z: number],
        animationSpeed?: number | undefined
    ): void {
        super.setPosition(position, animationSpeed);
        this._setSnappedToPoint(undefined);
    }

    setSnappingAllowed(allowed: boolean): void {
        this._isSnappingAllowed = allowed;
    }

    snap(animationSpeed?: number | undefined): SnapPoint | undefined {
        let closest: SnapPoint | undefined = undefined;
        let closestDistance = Number.MAX_VALUE;
        for (const obj of SharedObjects.gameWorld.getAllObjects(true)) {
            if (obj === this) {
                continue;
            }
            for (const snapPoint of obj.getAllSnapPoints()) {
                const distance = this.getPosition().distance(
                    snapPoint.getGlobalPosition()
                );
                if (
                    distance <= snapPoint.getRange() &&
                    distance < closestDistance
                ) {
                    closest = snapPoint;
                    closestDistance = distance;
                }
            }
        }
        for (const obj of SharedObjects.gameWorld.getAllTables()) {
            if (obj === this) {
                continue;
            }
            for (const snapPoint of obj.getAllSnapPoints()) {
                const distance = this.getPosition().distance(
                    snapPoint.getGlobalPosition()
                );
                if (
                    distance <= snapPoint.getRange() &&
                    distance < closestDistance
                ) {
                    closest = snapPoint;
                    closestDistance = distance;
                }
            }
        }
        if (closest) {
            this._setSnappedToPoint(closest);
            return closest;
        }
        return undefined;
    }

    snapToGround(): void {
        const pos = this.getPosition();
        const gameWorld: GameWorld = SharedObjects.gameWorld;
        pos.z = gameWorld.getTableHeight();
        this.setPosition(pos);
    }

    switchLights(on: boolean): void {
        this._areLightsOn = on;
    }

    toggleLock(): void {
        if (this.getObjectType() === ObjectType.Ground) {
            this.setObjectType(ObjectType.Regular);
        } else {
            this.setObjectType(ObjectType.Ground);
        }
    }

    // ----------------------------------

    applyTorque(
        torque: Vector | [x: number, y: number, z: number],
        useMass?: boolean | undefined
    ): void {
        // ignore
    }
    applyImpulseAtPosition(
        impulse: Vector | [x: number, y: number, z: number],
        position: Vector | [x: number, y: number, z: number]
    ): void {
        // ignore
    }
    applyImpulse(
        impulse: Vector | [x: number, y: number, z: number],
        useMass?: boolean | undefined
    ): void {
        // ignore
    }
    applyForceAtPosition(
        force: Vector | [x: number, y: number, z: number],
        position: Vector | [x: number, y: number, z: number]
    ): void {
        // ignore
    }
    applyForce(
        force: Vector | [x: number, y: number, z: number],
        useMass?: boolean | undefined
    ): void {
        // ignore
    }
    applyAngularImpulse(
        impulse: Vector | [x: number, y: number, z: number],
        useMass?: boolean | undefined
    ): void {
        // ignore
    }
}
