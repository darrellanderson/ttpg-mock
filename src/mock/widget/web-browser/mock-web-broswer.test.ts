import { MockWebBrowser, MockWebBrowserParams } from "./mock-web-browser";

it("constructor", () => {
  const params: MockWebBrowserParams = { url: "my-url" };
  const browser = new MockWebBrowser(params);
  expect(browser.getURL()).toBe(params.url);
});
