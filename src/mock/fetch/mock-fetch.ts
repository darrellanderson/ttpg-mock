import { FetchOptions, FetchResponse } from "@tabletop-playground/api";
import {
  MockFetchResponse,
  MockFetchResponseParams,
} from "../fetch-response/mock-fetch-response";

// Always fail.
export function mockFetch(
  url: string,
  options?: FetchOptions
): Promise<FetchResponse> {
  const params: MockFetchResponseParams = {
    url,
    ok: false,
    status: 500, // internal server error
  };
  const response: FetchResponse = new MockFetchResponse(params);
  return new Promise<FetchResponse>((resolve, reject) => {
    return response;
  });
}
