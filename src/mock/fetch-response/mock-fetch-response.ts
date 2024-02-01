import { FetchResponse } from "@tabletop-playground/api";

export type MockFetchResponseParams = {
    status?: number;
    ok?: boolean;
    url?: string;
    _response?: string;
};

export class MockFetchResponse implements FetchResponse {
    status: number = 0;
    ok: boolean = false;
    url: string = "";
    private _response: string = "";

    constructor(params?: MockFetchResponseParams) {
        if (params?.status !== undefined) {
            this.status = params.status;
        }
        if (params?.ok !== undefined) {
            this.ok = params.ok;
        }
        if (params?.url) {
            this.url = params.url;
        }
        if (params?._response) {
            this._response = params._response;
        }
    }

    json(): object {
        return JSON.parse(this._response);
    }

    text(): string {
        return this._response;
    }
}
