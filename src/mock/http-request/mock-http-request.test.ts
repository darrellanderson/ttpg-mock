import { MockHttpRequest, MockHttpRequestParams } from "./mock-http-request";

it("constructor", () => {
  const params: MockHttpRequestParams = {
    url: "my-url",
    method: "my-method",
    headers: { "my-key": "my-value" },
    content: "my-content",
    status: "my-status",
    responseCode: 3,
    elapsedTime: 4,
  };
  const request = new MockHttpRequest(params);
  expect(request.getContent()).toBe(params.content);
  expect(request.getContentLength()).toBe(params.content?.length);
  expect(request.getElapsedTime()).toBe(params.elapsedTime);
  expect(request.getMethod()).toBe(params.method);
  expect(request.getResponseCode()).toBe(params.responseCode);
  expect(request.getStatus()).toBe(params.status);
});

it("content", () => {
  const input = "my-content";
  const request = new MockHttpRequest();
  request.setContent(input);
  const output = request.getContent();
  expect(output).toBe(input);
});

it("header", () => {
  const request = new MockHttpRequest();
  request.setHeader("header", "value");
});

it("method", () => {
  const input = "my-method";
  const request = new MockHttpRequest();
  request.setMethod(input);
  const output = request.getMethod();
  expect(output).toBe(input);
});

it("url", () => {
  const request = new MockHttpRequest();
  request.setURL("url");
});
