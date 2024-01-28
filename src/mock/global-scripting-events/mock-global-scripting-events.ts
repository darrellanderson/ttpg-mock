import {
    Dice,
    DrawingLine,
    GameObject,
    GlobalScriptingEvents,
    MulticastDelegate,
    Package,
    Player,
} from "@tabletop-playground/api";
import { MockMulticastDelegate } from "../multicast-delegate/mock-multicast-delegate";
import { SharedObjects } from "../../shared-objects";

export class MockGlobalScriptingEvents implements GlobalScriptingEvents {
    public static readonly __sharedInstance: MockGlobalScriptingEvents =
        new MockGlobalScriptingEvents();

    public _reset() {
        this.onChatMessage.clear();
        this.onDiceRolled.clear();
        this.onObjectCreated.clear();
        this.onObjectDestroyed.clear();
        this.onPackageAdded.clear();
        this.onPlayerJoined.clear();
        this.onPlayerLeft.clear();
        this.onShake.clear();
        this.onTick.clear();
    }

    public readonly onChatMessage: MulticastDelegate<
        (sender: Player, message: string) => void
    > = new MockMulticastDelegate<(sender: Player, message: string) => void>();

    public readonly onCustomAction: MulticastDelegate<
        (player: Player, identifier: string) => void
    > = new MockMulticastDelegate<
        (player: Player, identifier: string) => void
    >();

    public readonly onDiceRolled: MulticastDelegate<
        (player: Player, dice: Dice[]) => void
    > = new MockMulticastDelegate<(player: Player, dice: Dice[]) => void>();

    public readonly onLineDrawn: MulticastDelegate<
        (player: Player, object: GameObject, line: DrawingLine) => void
    > = new MockMulticastDelegate<
        (player: Player, object: GameObject, line: DrawingLine) => void
    >();

    public readonly onLineErased: MulticastDelegate<
        (player: Player, object: GameObject, line: DrawingLine) => void
    > = new MockMulticastDelegate<
        (player: Player, object: GameObject, line: DrawingLine) => void
    >();

    public readonly onObjectCreated: MulticastDelegate<
        (object: GameObject) => void
    > = new MockMulticastDelegate<(object: GameObject) => void>();

    public readonly onObjectDestroyed: MulticastDelegate<
        (object: GameObject) => void
    > = new MockMulticastDelegate<(object: GameObject) => void>();

    public readonly onPackageAdded: MulticastDelegate<
        (packageRef: Package) => void
    > = new MockMulticastDelegate<(packageRef: Package) => void>();

    public readonly onPlayerJoined: MulticastDelegate<
        (player: Player) => void
    > = new MockMulticastDelegate<(player: Player) => void>();

    public readonly onPlayerLeft: MulticastDelegate<(player: Player) => void> =
        new MockMulticastDelegate<(player: Player) => void>();

    public readonly onPlayerSwitchedSlots: MulticastDelegate<
        (player: Player, index: number) => void
    > = new MockMulticastDelegate<(player: Player, index: number) => void>();

    public readonly onScriptButtonPressed: MulticastDelegate<
        (player: Player, index: number, ctrl: boolean, alt: boolean) => void
    > = new MockMulticastDelegate<
        (player: Player, index: number, ctrl: boolean, alt: boolean) => void
    >();

    public readonly onScriptButtonReleased: MulticastDelegate<
        (player: Player, index: number) => void
    > = new MockMulticastDelegate<(player: Player, index: number) => void>();

    public readonly onShake: MulticastDelegate<
        (player: Player, objects: GameObject[]) => void
    > = new MockMulticastDelegate<
        (player: Player, objects: GameObject[]) => void
    >();

    public readonly onTeamChatMessage: MulticastDelegate<
        (sender: Player, team: number, message: string) => void
    > = new MockMulticastDelegate<
        (sender: Player, team: number, message: string) => void
    >();

    public readonly onTick: MulticastDelegate<(milliseconds: number) => void> =
        new MockMulticastDelegate<(milliseconds: number) => void>();

    public readonly onWhisper: MulticastDelegate<
        (sender: Player, recipient: Player, message: string) => void
    > = new MockMulticastDelegate<
        (sender: Player, recipient: Player, message: string) => void
    >();

    _chatMessageAsPlayer(sender: Player, message: string): void {
        (
            this.onChatMessage as MockMulticastDelegate<
                (sender: Player, message: string) => void
            >
        )._trigger(sender, message);
    }

    _customActionAsPlayer(player: Player, identifier: string): void {
        (
            this.onCustomAction as MockMulticastDelegate<
                (player: Player, identifier: string) => void
            >
        )._trigger(player, identifier);
    }

    _diceRolledAsPlayer(player: Player, dice: Dice[]): void {
        (
            this.onDiceRolled as MockMulticastDelegate<
                (player: Player, dice: Dice[]) => void
            >
        )._trigger(player, dice);
    }

    _scriptButtonPressedAsPlayer(
        player: Player,
        index: number,
        ctrl: boolean,
        alt: boolean
    ): void {
        (
            this.onScriptButtonPressed as MockMulticastDelegate<
                (
                    player: Player,
                    index: number,
                    ctrl: boolean,
                    alt: boolean
                ) => void
            >
        )._trigger(player, index, ctrl, alt);
    }

    _scriptButtonReleasedAsPlayer(player: Player, index: number): void {
        (
            this.onScriptButtonReleased as MockMulticastDelegate<
                (player: Player, index: number) => void
            >
        )._trigger(player, index);
    }

    _shakeAsPlayer(player: Player, objects: GameObject[]): void {
        (
            this.onShake as MockMulticastDelegate<
                (player: Player, objects: GameObject[]) => void
            >
        )._trigger(player, objects);
    }

    _teamChatAsPlayer(sender: Player, team: number, message: string): void {
        (
            this.onTeamChatMessage as MockMulticastDelegate<
                (sender: Player, team: number, message: string) => void
            >
        )._trigger(sender, team, message);
    }

    _whisperAsPlayer(sender: Player, recipient: Player, message: string): void {
        (
            this.onWhisper as MockMulticastDelegate<
                (sender: Player, recipient: Player, message: string) => void
            >
        )._trigger(sender, recipient, message);
    }
}

SharedObjects.globalScriptingEvents =
    MockGlobalScriptingEvents.__sharedInstance;
