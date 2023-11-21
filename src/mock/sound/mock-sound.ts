import {
  Delegate,
  GameObject,
  PlayerPermission,
  Sound,
  Vector,
} from "@tabletop-playground/api";
import { MockDelegate } from "../delegate/mock-delegate";

export class MockSound implements Sound {
  onLoadComplete: Delegate<(success: boolean) => void> = new MockDelegate<
    (success: boolean) => void
  >();
  onPlaybackFinished: Delegate<() => void> = new MockDelegate<() => void>();

  stopLoop(): void {
    throw new Error("Method not implemented.");
  }
  stop(): void {
    throw new Error("Method not implemented.");
  }
  playAttached(
    object: GameObject,
    startTime?: number | undefined,
    volume?: number | undefined,
    loop?: boolean | undefined,
    players?: PlayerPermission | undefined
  ): void {
    throw new Error("Method not implemented.");
  }
  playAtLocation(
    position: Vector | [x: number, y: number, z: number],
    startTime?: number | undefined,
    volume?: number | undefined,
    loop?: boolean | undefined,
    players?: PlayerPermission | undefined
  ): void {
    throw new Error("Method not implemented.");
  }
  play(
    startTime?: number | undefined,
    volume?: number | undefined,
    loop?: boolean | undefined,
    players?: PlayerPermission | undefined
  ): void {
    throw new Error("Method not implemented.");
  }
  isPlaying(): boolean {
    throw new Error("Method not implemented.");
  }
  isLoaded(): boolean {
    throw new Error("Method not implemented.");
  }
  getPlaybackTime(): number {
    throw new Error("Method not implemented.");
  }
  getPlaybackFraction(): number {
    throw new Error("Method not implemented.");
  }
  getDuration(): number {
    throw new Error("Method not implemented.");
  }
  destroy(): void {
    throw new Error("Method not implemented.");
  }
}
