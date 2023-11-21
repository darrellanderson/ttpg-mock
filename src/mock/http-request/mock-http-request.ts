import { Delegate, HttpRequest } from "@tabletop-playground/api";
import { MockDelegate } from "../delegate/mock-delegate";

export class MockHttpRequest implements HttpRequest {
  onComplete: Delegate<(success: boolean) => void> = new MockDelegate<
    (success: boolean) => void
  >();
  onProgress: Delegate<(sent: number, received: number) => void> =
    new MockDelegate<(sent: number, received: number) => void>();

  setURL(url: string): void {
    throw new Error("Method not implemented.");
  }
  setMethod(verb: string): void {
    throw new Error("Method not implemented.");
  }
  setHeader(headerName: string, headerValue: string): void {
    throw new Error("Method not implemented.");
  }
  setContent(contentString: string): void {
    throw new Error("Method not implemented.");
  }
  process(): void {
    throw new Error("Method not implemented.");
  }
  getStatus(): string {
    throw new Error("Method not implemented.");
  }
  getResponseCode(): number {
    throw new Error("Method not implemented.");
  }
  getMethod(): string {
    throw new Error("Method not implemented.");
  }
  getElapsedTime(): number {
    throw new Error("Method not implemented.");
  }
  getContentLength(): number {
    throw new Error("Method not implemented.");
  }
  getContent(): string {
    throw new Error("Method not implemented.");
  }
  cancel(): void {
    throw new Error("Method not implemented.");
  }
}
