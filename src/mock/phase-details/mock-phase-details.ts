import { PhaseDetails } from "@tabletop-playground/api";

export class MockPhaseDetails implements PhaseDetails {
  name: string = "";
  playerSlots: number[] = [];
  takeTurns: boolean = false;
  restrictInteraction: boolean = false;

  clone(): PhaseDetails {
    throw new Error("Method not implemented.");
  }
}
