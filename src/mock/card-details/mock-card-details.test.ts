import { MockCardDetails, MockCardDetailsParams } from "./mock-card-details";

describe("MockCardDetails", () => {
  test("constructor", () => {
    new MockCardDetails(); // standard
    const params: MockCardDetailsParams = {
      index: 1,
      stackIndex: 2,
      templateId: "my-template-id",
      name: "my-name",
      metadata: "my-metadata",
      textureOverrideURL: "my-texture-override-url",
      flipped: true,
      tags: ["my-tag"],
    };
    const cardDetails = new MockCardDetails(params);
    expect(cardDetails.index).toEqual(params.index);
    expect(cardDetails.stackIndex).toEqual(params.stackIndex);
    expect(cardDetails.templateId).toEqual(params.templateId);
    expect(cardDetails.name).toEqual(params.name);
    expect(cardDetails.metadata).toEqual(params.metadata);
    expect(cardDetails.textureOverrideURL).toEqual(params.textureOverrideURL);
    expect(cardDetails.flipped).toEqual(params.flipped);
    expect(cardDetails.tags).toEqual(params.tags);
  });

  test("index", () => {
    const value = 7;
    const cardDetails = new MockCardDetails({ index: value });
    expect(cardDetails.index).toEqual(value);
  });

  test("stackIndex", () => {
    const value = 7;
    const cardDetails = new MockCardDetails({ stackIndex: value });
    expect(cardDetails.stackIndex).toEqual(value);
  });

  test("templateId", () => {
    const value = "my value";
    const cardDetails = new MockCardDetails({ templateId: value });
    expect(cardDetails.templateId).toEqual(value);
  });

  test("name", () => {
    const value = "my value";
    const cardDetails = new MockCardDetails({ name: value });
    expect(cardDetails.name).toEqual(value);
  });

  test("metadata", () => {
    const value = "my value";
    const cardDetails = new MockCardDetails({ metadata: value });
    expect(cardDetails.metadata).toEqual(value);
  });

  test("textureOverrideURL", () => {
    const value = "my value";
    const cardDetails = new MockCardDetails({ textureOverrideURL: value });
    expect(cardDetails.textureOverrideURL).toEqual(value);
  });

  test("flipped", () => {
    const value = true;
    const cardDetails = new MockCardDetails({ flipped: value });
    expect(cardDetails.flipped).toEqual(value);
  });

  test("tags", () => {
    const value = ["a", "b", "c"];
    const cardDetails = new MockCardDetails({ tags: value });
    expect(cardDetails.tags).toEqual(value);
  });
});
