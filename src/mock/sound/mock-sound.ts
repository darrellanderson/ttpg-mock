import {
    Delegate,
    GameObject,
    PlayerPermission,
    Sound,
    Vector,
} from "@tabletop-playground/api";
import { MockDelegate } from "../delegate/mock-delegate";

export type MockSoundParams = {
    duration?: number;
    isLoaded?: boolean;
    isPlaying?: boolean;
    playbackFraction?: number;
    playbackTime?: number;
};

export class MockSound implements Sound {
    private _duration: number = 0;
    private _isLoaded: boolean = false;
    private _isPlaying: boolean = false;
    private _playbackTime: number = 0;

    onLoadComplete: Delegate<(success: boolean) => void> = new MockDelegate<
        (success: boolean) => void
    >();
    onPlaybackFinished: Delegate<() => void> = new MockDelegate<() => void>();

    constructor(params?: MockSoundParams) {
        if (params?.duration !== undefined) {
            this._duration = params.duration;
        }
        if (params?.isLoaded !== undefined) {
            this._isLoaded = params.isLoaded;
        }
        if (params?.isPlaying !== undefined) {
            this._isPlaying = params.isPlaying;
        }
        if (params?.playbackTime !== undefined) {
            this._playbackTime = params.playbackTime;
        }
    }

    destroy(): void {}

    isLoaded(): boolean {
        return this._isLoaded;
    }

    isPlaying(): boolean {
        return this._isPlaying;
    }

    getPlaybackFraction(): number {
        return this._duration > 0 ? this._playbackTime / this._duration : 0;
    }

    getDuration(): number {
        return this._duration;
    }

    getPlaybackTime(): number {
        return this._playbackTime;
    }

    play(
        startTime?: number | undefined,
        volume?: number | undefined,
        loop?: boolean | undefined,
        players?: PlayerPermission | undefined
    ): void {
        this._isPlaying = true;
        this._playbackTime = startTime !== undefined ? startTime : 0;
    }

    playAtLocation(
        position: Vector | [x: number, y: number, z: number],
        startTime?: number | undefined,
        volume?: number | undefined,
        loop?: boolean | undefined,
        players?: PlayerPermission | undefined
    ): void {
        this.play(startTime, volume, loop, players);
    }

    playAttached(
        object: GameObject,
        startTime?: number | undefined,
        volume?: number | undefined,
        loop?: boolean | undefined,
        players?: PlayerPermission | undefined
    ): void {
        this.play(startTime, volume, loop, players);
    }

    stop(): void {
        this._isPlaying = false;
    }

    stopLoop(): void {
        this._isPlaying = false;
    }
}
