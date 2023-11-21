import { mockFetch } from "./mock-fetch";

it("fetch", () => {
  const url = "http://www.example.com";
  const options = {};
  const result = mockFetch(url, options);
});
