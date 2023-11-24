import {
  MockFetchResponse,
  MockFetchResponseParams,
} from "./mock-fetch-response";

it("constructor", () => {
  new MockFetchResponse();
  const params: MockFetchResponseParams = {
    ok: true,
    status: 200,
    url: "http://www.example.com",
  };
  const mockFetchResponse = new MockFetchResponse(params);
  expect(mockFetchResponse.ok).toEqual(params.ok);
  expect(mockFetchResponse.status).toEqual(params.status);
  expect(mockFetchResponse.url).toEqual(params.url);
});

it("text", () => {
  const value: string = "my-value";
  const params: MockFetchResponseParams = { _response: value };
  const mockFetchResponse = new MockFetchResponse(params);
  expect(mockFetchResponse.text()).toEqual(value);
});

it("json", () => {
  const value: object = { "my-key": "my-value" };
  const params: MockFetchResponseParams = {
    _response: JSON.stringify(value),
  };
  const mockFetchResponse = new MockFetchResponse(params);
  expect(mockFetchResponse.json()).toEqual(value);
});
