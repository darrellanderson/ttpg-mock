import { PhaseDetails } from "@tabletop-playground/api";

export type MockPhaseDetailsParams = {
    name?: string;
    playerSlots?: number[];
    takeTurns?: boolean;
    restrictInteraction?: boolean;
};

export class MockPhaseDetails implements PhaseDetails {
    name: string = "";
    playerSlots: number[] = [];
    takeTurns: boolean = false;
    restrictInteraction: boolean = false;

    constructor(params?: MockPhaseDetailsParams) {
        if (params?.name) {
            this.name = params.name;
        }
        if (params?.playerSlots) {
            this.playerSlots = params.playerSlots;
        }
        if (params?.takeTurns !== undefined) {
            this.takeTurns = params.takeTurns;
        }
        if (params?.restrictInteraction !== undefined) {
            this.restrictInteraction = true;
        }
    }

    clone(): PhaseDetails {
        const clone = new PhaseDetails();
        clone.name = this.name;
        clone.playerSlots = [...this.playerSlots];
        clone.takeTurns = this.takeTurns;
        clone.restrictInteraction = this.restrictInteraction;
        return clone;
    }
}
