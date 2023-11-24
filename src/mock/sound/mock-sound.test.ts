import { MockSound, MockSoundParams } from "./mock-sound";

it("constructor", () => {
  const params: MockSoundParams = {
    duration: 2,
    isLoaded: true,
    isPlaying: true,
    playbackTime: 1,
  };
  const sound = new MockSound(params);
  expect(sound.getDuration()).toBe(params.duration);
  expect(sound.isLoaded()).toBe(params.isLoaded);
  expect(sound.isPlaying()).toBe(params.isPlaying);
  expect(sound.getPlaybackTime()).toBe(params.playbackTime);
  expect(sound.getPlaybackFraction()).toBeCloseTo(0.5);
});
