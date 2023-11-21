import { MulticastDelegate, WebBrowser } from "@tabletop-playground/api";
import { MockWidget } from "../mock-widget";
import { MockMulticastDelegate } from "../../multicast-delegate/mock-multicast-delegate";

export class MockWebBrowser extends MockWidget implements WebBrowser {
  onURLChanged: MulticastDelegate<(browser: this, uRL: string) => void> =
    new MockMulticastDelegate<(browser: this, uRL: string) => void>();
  onLoadStarted: MulticastDelegate<(browser: this) => void> =
    new MockMulticastDelegate<(browser: this) => void>();
  onLoadFinished: MulticastDelegate<(browser: this, success: boolean) => void> =
    new MockMulticastDelegate<(browser: this, success: boolean) => void>();

  stopLoad(): void {
    throw new Error("Method not implemented.");
  }
  setURL(url: string): WebBrowser {
    throw new Error("Method not implemented.");
  }
  reload(): void {
    throw new Error("Method not implemented.");
  }
  isLoading(): boolean {
    throw new Error("Method not implemented.");
  }
  goForward(): void {
    throw new Error("Method not implemented.");
  }
  goBack(): void {
    throw new Error("Method not implemented.");
  }
  getURL(): string {
    throw new Error("Method not implemented.");
  }
  canGoForward(): boolean {
    throw new Error("Method not implemented.");
  }
  canGoBack(): boolean {
    throw new Error("Method not implemented.");
  }
}
