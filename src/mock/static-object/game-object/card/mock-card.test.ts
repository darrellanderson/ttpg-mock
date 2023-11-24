import { MockCard } from "./mock-card";
import { MockCardDetails } from "../../../card-details/mock-card-details";

it("constructor", () => {
  new MockCard({});
});

it("cardDetails", () => {
  const card = new MockCard({
    cardDetails: [
      new MockCardDetails({ name: "a" }),
      new MockCardDetails({ name: "b" }),
      new MockCardDetails({ name: "c" }),
    ],
  });
  expect(card.getAllCardDetails().length).toEqual(3);
  expect(card.getCardDetails().name).toEqual("a");
  expect(card.getCardDetails(1)?.name).toEqual("b");
  expect(card.getCardDetails(3)).toBeUndefined();
});
