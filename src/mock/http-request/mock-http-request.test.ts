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
    expect(request.getContent()).toEqual(params.content);
    expect(request.getContentLength()).toEqual(params.content?.length);
    expect(request.getElapsedTime()).toEqual(params.elapsedTime);
    expect(request.getMethod()).toEqual(params.method);
    expect(request.getResponseCode()).toEqual(params.responseCode);
    expect(request.getStatus()).toEqual(params.status);
});

it("content", () => {
    const input = "my-content";
    const request = new MockHttpRequest();
    request.setContent(input);
    const output = request.getContent();
    expect(output).toEqual(input);
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
    expect(output).toEqual(input);
});

it("url", () => {
    const request = new MockHttpRequest();
    request.setURL("url");
});
