import {
  MockFetchResponse,
  MockFetchResponseParams,
} from "./mock-fetch-response";

it("constructor", () => {
  const params: MockFetchResponseParams = {
    ok: true,
    status: 200,
    url: "http://www.example.com",
  };
  const mockFetchResponse = new MockFetchResponse(params);
  expect(mockFetchResponse.ok).toBe(params.ok);
  expect(mockFetchResponse.status).toBe(params.status);
  expect(mockFetchResponse.url).toBe(params.url);
});

it("text", () => {
  const value: string = "my-value";
  const params: MockFetchResponseParams = { _response: value };
  const mockFetchResponse = new MockFetchResponse(params);
  expect(mockFetchResponse.text()).toBe(value);
});

it("json", () => {
  const value: object = { "my-key": "my-value" };
  const params: MockFetchResponseParams = {
    _response: JSON.stringify(value),
  };
  const mockFetchResponse = new MockFetchResponse(params);
  expect(mockFetchResponse.json()).toEqual(value);
});
