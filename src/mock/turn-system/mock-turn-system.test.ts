import { MockPhaseDetails } from "../phase-details/mock-phase-details";
import { MockPlayer } from "../player/mock-player";
import { MockTurnSystem, MockTurnSystemParams } from "./mock-turn-system";

it("constructor", () => {
  const phase = new MockPhaseDetails();
  const params: MockTurnSystemParams = {
    phases: [phase],
    currentTurn: 1,
    currentRound: 2,
    currentPhaseIndex: 0,
    activePlayers: [new MockPlayer()],
  };
  const turnSystem = new MockTurnSystem(params);
  expect(turnSystem.getAllPhases()).toEqual(params.phases);
  expect(turnSystem.getActivePlayers()).toEqual(params.activePlayers);
  expect(turnSystem.getCurrentPhase()).toEqual(phase);
  expect(turnSystem.getCurrentPhaseIndex()).toEqual(params.currentPhaseIndex);
  expect(turnSystem.getCurrentRound()).toEqual(params.currentRound);
  expect(turnSystem.getCurrentTurn()).toEqual(params.currentTurn);
});
