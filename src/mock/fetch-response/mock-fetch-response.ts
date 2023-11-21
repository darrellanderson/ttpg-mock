import { FetchResponse } from "@tabletop-playground/api";

export class MockFetchResponse implements FetchResponse {
  status: number = -1;
  ok: boolean = false;
  url: string = "";

  text(): string {
    throw new Error("Method not implemented.");
  }
  json(): object {
    throw new Error("Method not implemented.");
  }
}
