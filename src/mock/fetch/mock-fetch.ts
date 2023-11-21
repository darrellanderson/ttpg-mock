import { FetchOptions, FetchResponse } from "@tabletop-playground/api";
import { MockFetchResponse } from "../fetch-response/mock-fetch-response";

export function mockFetch(
  url: string,
  options?: FetchOptions
): Promise<FetchResponse> {
  return new Promise<FetchResponse>((resolve, reject) => {
    const response = new MockFetchResponse();
    return response;
  });
}
