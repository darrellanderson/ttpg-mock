import { MockPhaseDetails, MockPhaseDetailsParams } from "./mock-phase-details";

it("constructor", () => {
    const params: MockPhaseDetailsParams = {
        name: "my-name",
        playerSlots: [1],
        takeTurns: false,
        restrictInteraction: true,
    };
    const phaseDetails = new MockPhaseDetails(params);
    expect(phaseDetails.name).toEqual(params.name);
    expect(phaseDetails.playerSlots).toEqual(params.playerSlots);
    expect(phaseDetails.takeTurns).toEqual(params.takeTurns);
    expect(phaseDetails.restrictInteraction).toEqual(
        params.restrictInteraction
    );
});

it("clone", () => {
    const phaseDetails = new MockPhaseDetails();
    const clone = phaseDetails.clone();
    expect(phaseDetails.name).toEqual(clone.name);
    expect(phaseDetails.playerSlots).toEqual(clone.playerSlots);
    expect(phaseDetails.takeTurns).toEqual(clone.takeTurns);
    expect(phaseDetails.restrictInteraction).toEqual(clone.restrictInteraction);
});
