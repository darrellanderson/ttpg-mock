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
    expect(cardDetails.index).toBe(params.index);
    expect(cardDetails.stackIndex).toBe(params.stackIndex);
    expect(cardDetails.templateId).toBe(params.templateId);
    expect(cardDetails.name).toBe(params.name);
    expect(cardDetails.metadata).toBe(params.metadata);
    expect(cardDetails.textureOverrideURL).toBe(params.textureOverrideURL);
    expect(cardDetails.flipped).toBe(params.flipped);
    expect(cardDetails.tags).toEqual(params.tags);
  });

  test("index", () => {
    const value = 7;
    const cardDetails = new MockCardDetails({ index: value });
    expect(cardDetails.index).toBe(value);
  });

  test("stackIndex", () => {
    const value = 7;
    const cardDetails = new MockCardDetails({ stackIndex: value });
    expect(cardDetails.stackIndex).toBe(value);
  });

  test("templateId", () => {
    const value = "my value";
    const cardDetails = new MockCardDetails({ templateId: value });
    expect(cardDetails.templateId).toBe(value);
  });

  test("name", () => {
    const value = "my value";
    const cardDetails = new MockCardDetails({ name: value });
    expect(cardDetails.name).toBe(value);
  });

  test("metadata", () => {
    const value = "my value";
    const cardDetails = new MockCardDetails({ metadata: value });
    expect(cardDetails.metadata).toBe(value);
  });

  test("textureOverrideURL", () => {
    const value = "my value";
    const cardDetails = new MockCardDetails({ textureOverrideURL: value });
    expect(cardDetails.textureOverrideURL).toBe(value);
  });

  test("flipped", () => {
    const value = true;
    const cardDetails = new MockCardDetails({ flipped: value });
    expect(cardDetails.flipped).toBe(value);
  });

  test("tags", () => {
    const value = ["a", "b", "c"];
    const cardDetails = new MockCardDetails({ tags: value });
    expect(cardDetails.tags).toBe(value);
  });
});
