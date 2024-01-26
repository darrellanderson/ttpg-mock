import { PhaseDetails } from "@tabletop-playground/api";
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

it('setPhases', () => {
  const turnSystem = new MockTurnSystem()
  expect(turnSystem.getAllPhases()).toEqual([])
  const phases: PhaseDetails[] = [
    new MockPhaseDetails({ name: 'my-phase' })
  ]
  turnSystem.setPhases(phases)
  expect(turnSystem.getAllPhases()).toEqual(phases)
})

it('setCurrentTurn', () => {
  const turnSystem = new MockTurnSystem()
  expect(turnSystem.getCurrentTurn()).toEqual(0)
  turnSystem.setCurrentTurn(3)
  expect(turnSystem.getCurrentTurn()).toEqual(3)
})

it('setCurrentRound', () => {
  const turnSystem = new MockTurnSystem()
  expect(turnSystem.getCurrentRound()).toEqual(0)
  turnSystem.setCurrentRound(3)
  expect(turnSystem.getCurrentRound()).toEqual(3)
})

it('setCurrentPhase', () => {
  const turnSystem = new MockTurnSystem()
  expect(turnSystem.getCurrentPhaseIndex()).toEqual(0)
  turnSystem.setCurrentPhaseIndex(3)
  expect(turnSystem.getCurrentPhaseIndex()).toEqual(3)
})

it('getActivePlayers', () => {
  const turnSystem = new MockTurnSystem()
  const active = turnSystem.getActivePlayers()
  expect(active).toEqual([])
})


