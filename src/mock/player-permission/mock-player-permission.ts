import { Player, PlayerPermission } from "@tabletop-playground/api";

export class MockPlayerPermission implements PlayerPermission {
  value: number = -1;

  addPlayer(player: Player): PlayerPermission {
    return this;
  }

  clone(): PlayerPermission {
    const clone = new MockPlayerPermission();
    clone.value = this.value;
    return clone;
  }

  setHost(hostIsPermitted: boolean): PlayerPermission {
    return this;
  }

  setPlayerSlots(slots: number[]): PlayerPermission {
    return this;
  }

  setTeams(teams: number[]): PlayerPermission {
    return this;
  }
}
