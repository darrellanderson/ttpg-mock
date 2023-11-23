import { MockPhaseDetails, MockPhaseDetailsParams } from "./mock-phase-details";

it("constructor", () => {
  const params: MockPhaseDetailsParams = {
    name: "my-name",
    playerSlots: [1],
    takeTurns: false,
    restrictInteraction: true,
  };
  const phaseDetails = new MockPhaseDetails(params);
  expect(phaseDetails.name).toBe(params.name);
  expect(phaseDetails.playerSlots).toEqual(params.playerSlots);
  expect(phaseDetails.takeTurns).toBe(params.takeTurns);
  expect(phaseDetails.restrictInteraction).toBe(params.restrictInteraction);
});

it("clone", () => {
  const phaseDetails = new MockPhaseDetails();
  const clone = phaseDetails.clone();
  expect(phaseDetails.name).toBe(clone.name);
  expect(phaseDetails.playerSlots).toEqual(clone.playerSlots);
  expect(phaseDetails.takeTurns).toBe(clone.takeTurns);
  expect(phaseDetails.restrictInteraction).toBe(clone.restrictInteraction);
});
