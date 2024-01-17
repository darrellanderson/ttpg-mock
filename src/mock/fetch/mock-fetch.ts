import { FetchOptions, FetchResponse } from "@tabletop-playground/api";
import {
  MockFetchResponse,
  MockFetchResponseParams,
} from "../fetch-response/mock-fetch-response";

// Keep a reference to the real fetch.
const _fetch: (
  input: RequestInfo | URL,
  init?: RequestInit | undefined
) => Promise<Response> = fetch;

export function mockFetch(
  url: string,
  options?: FetchOptions
): Promise<FetchResponse> {
  return new Promise<FetchResponse>((resolve, reject) => {
    const mockFetchResponseParams: MockFetchResponseParams = { url };

    const textResolve = (text: string) => {
      mockFetchResponseParams._response = text;
      resolve(new MockFetchResponse(mockFetchResponseParams));
    };

    const blobResolve = (blob: Blob) => {
      blob.text().then(textResolve, reject);
    };

    const responseResolve = (response: Response) => {
      mockFetchResponseParams.ok = response.ok;
      mockFetchResponseParams.status = response.status;
      if (response.ok) {
        response.blob().then(blobResolve, reject);
      } else {
        reject("result not ok");
      }
    };

    _fetch(url, options).then(responseResolve, reject);
  });
}
