import { MockGameObject } from "../static-object/game-object/mock-game-object";
import { MockVector } from "../vector/mock-vector";
import { MockSound, MockSoundParams } from "./mock-sound";

it("constructor", () => {
    const params: MockSoundParams = {
        duration: 2,
        isLoaded: true,
        isPlaying: true,
        playbackTime: 1,
    };
    const sound = new MockSound(params);
    expect(sound.getDuration()).toEqual(params.duration);
    expect(sound.isLoaded()).toEqual(params.isLoaded);
    expect(sound.isPlaying()).toEqual(params.isPlaying);
    expect(sound.getPlaybackTime()).toEqual(params.playbackTime);
    expect(sound.getPlaybackFraction()).toBeCloseTo(0.5);
});

it("play/stop", () => {
    const sound = new MockSound();
    sound.play();
    sound.playAtLocation(new MockVector(0, 0, 0));
    sound.playAttached(new MockGameObject());
    sound.stop();
    sound.stopLoop();
});

it("get with duration zero", () => {
    const params: MockSoundParams = {
        duration: 0,
        isLoaded: true,
        isPlaying: true,
        playbackTime: 0,
    };
    const sound = new MockSound(params);
    expect(sound.getDuration()).toEqual(params.duration);
    expect(sound.isLoaded()).toEqual(params.isLoaded);
    expect(sound.isPlaying()).toEqual(params.isPlaying);
    expect(sound.getPlaybackTime()).toEqual(params.playbackTime);
    expect(sound.getPlaybackFraction()).toBeCloseTo(0);
});

it("play with offset", () => {
    const startTime = 13;
    const sound = new MockSound();
    sound.play(startTime);
    expect(sound.getPlaybackTime()).toBe(startTime);
});
