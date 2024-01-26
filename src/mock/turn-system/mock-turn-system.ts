import {
  MulticastDelegate,
  PhaseDetails,
  Player,
  TurnSystem,
} from "@tabletop-playground/api";
import { MockMulticastDelegate } from "../multicast-delegate/mock-multicast-delegate";

export type MockTurnSystemParams = {
  phases?: PhaseDetails[];
  currentTurn?: number;
  currentRound?: number;
  currentPhaseIndex?: number;
  activePlayers?: Player[];
};

export class MockTurnSystem implements TurnSystem {
  private _phases: PhaseDetails[] = [];
  private _currentTurn: number = 0;
  private _currentRound: number = 0;
  private _currentPhaseIndex: number = 0;
  private _activePlayers: Player[] = [];

  onTurnChanged: MulticastDelegate<
    (previousTurn: number, previousPhase: number, previousRound: number) => void
  > = new MockMulticastDelegate<
    (previousTurn: number, previousPhase: number, previousRound: number) => void
  >();

  constructor(params?: MockTurnSystemParams) {
    if (params?.phases) {
      this._phases = params.phases;
    }
    if (params?.currentTurn !== undefined) {
      this._currentTurn = params.currentTurn;
    }
    if (params?.currentRound !== undefined) {
      this._currentRound = params.currentRound;
    }
    if (params?.currentPhaseIndex !== undefined) {
      this._currentPhaseIndex = params.currentPhaseIndex;
    }
    if (params?.activePlayers !== undefined) {
      this._activePlayers = params.activePlayers;
    }
  }

  setPhases(phases: PhaseDetails[]): void {
    this._phases = phases.map((phase) => phase.clone())
  }

  setCurrentTurn(turn: number): void {
    this._currentTurn = turn;
  }

  setCurrentRound(round: number): void {
    this._currentRound = round;
  }

  setCurrentPhaseIndex(phase: number): void {
    this._currentPhaseIndex = phase;
  }

  previousTurn(): void {
    // pass without side effects
  }

  nextTurn(): void {
    // pass without side effects
  }

  getCurrentTurn(): number {
    return this._currentTurn;
  }

  getCurrentRound(): number {
    return this._currentRound;
  }

  getCurrentPhaseIndex(): number {
    return this._currentPhaseIndex;
  }

  getCurrentPhase(): PhaseDetails {
    return this._phases[this._currentPhaseIndex];
  }

  getAllPhases(): PhaseDetails[] {
    return this._phases;
  }

  getActivePlayers(): Player[] {
    return this._activePlayers;
  }
}
