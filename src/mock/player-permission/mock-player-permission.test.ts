import { MockPlayer } from "../player/mock-player";
import { MockPlayerPermission } from "./mock-player-permission";

it("constructor", () => {
  new MockPlayerPermission();
});

it("addPlayer", () => {
  const mockPlayerPermission = new MockPlayerPermission();
  const player = new MockPlayer();
  mockPlayerPermission.addPlayer(player);
});

it("clone", () => {
  const mockPlayerPermission = new MockPlayerPermission();
  const clone = mockPlayerPermission.clone();
  expect(clone.value).toEqual(mockPlayerPermission.value);
});

it("setHost", () => {
  const mockPlayerPermission = new MockPlayerPermission();
  mockPlayerPermission.setHost(true);
});

it("setPlayerSlots", () => {
  const mockPlayerPermission = new MockPlayerPermission();
  const playerSlots = [1, 2, 3];
  mockPlayerPermission.setPlayerSlots(playerSlots);
});

it("setTeams", () => {
  const mockPlayerPermission = new MockPlayerPermission();
  const teams = [1, 2, 3];
  mockPlayerPermission.setTeams(teams);
});
