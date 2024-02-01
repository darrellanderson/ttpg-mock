import { Delegate, HttpRequest } from "@tabletop-playground/api";
import { MockDelegate } from "../delegate/mock-delegate";

export type MockHttpRequestParams = {
    url?: string;
    method?: string;
    headers?: { [key: string]: string };
    content?: string;
    status?: string;
    responseCode?: number;
    elapsedTime?: number;
};

export class MockHttpRequest implements HttpRequest {
    private _url: string = "";
    private _method: string = "";
    private _headers: { [key: string]: string } = {};
    private _content: string = "";
    private _status: string = "";
    private _responseCode: number = 0;
    private _elapsedTime: number = 0;

    onComplete: Delegate<(success: boolean) => void> = new MockDelegate<
        (success: boolean) => void
    >();
    onProgress: Delegate<(sent: number, received: number) => void> =
        new MockDelegate<(sent: number, received: number) => void>();

    constructor(params?: MockHttpRequestParams) {
        if (params?.url) {
            this._url = params.url;
        }
        if (params?.method) {
            this._method = params.method;
        }
        if (params?.headers) {
            this._headers = params.headers;
        }
        if (params?.content) {
            this._content = params.content;
        }
        if (params?.status) {
            this._status = params.status;
        }
        if (params?.responseCode !== undefined) {
            this._responseCode = params.responseCode;
        }
        if (params?.elapsedTime !== undefined) {
            this._elapsedTime = params.elapsedTime;
        }
    }

    cancel(): void {}

    getContent(): string {
        return this._content;
    }

    getContentLength(): number {
        return this._content.length;
    }

    getElapsedTime(): number {
        return this._elapsedTime;
    }

    getMethod(): string {
        return this._method;
    }

    getResponseCode(): number {
        return this._responseCode;
    }

    getStatus(): string {
        return this._status;
    }

    process(): void {}

    setContent(contentString: string): void {
        this._content = contentString;
    }

    setHeader(headerName: string, headerValue: string): void {
        this._headers[headerName] = headerValue;
    }

    setMethod(verb: string): void {
        this._method = verb;
    }

    setURL(url: string): void {
        this._url = url;
    }
}
