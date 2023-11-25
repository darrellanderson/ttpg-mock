import { MulticastDelegate, WebBrowser } from "@tabletop-playground/api";
import { MockWidget, MockWidgetParams } from "../mock-widget";
import { MockMulticastDelegate } from "../../multicast-delegate/mock-multicast-delegate";

export type MockWebBrowserParams = MockWidgetParams & {
  url?: string;
};

export class MockWebBrowser extends MockWidget implements WebBrowser {
  private _url: string = "";

  onURLChanged: MulticastDelegate<(browser: this, uRL: string) => void> =
    new MockMulticastDelegate<(browser: this, uRL: string) => void>();
  onLoadStarted: MulticastDelegate<(browser: this) => void> =
    new MockMulticastDelegate<(browser: this) => void>();
  onLoadFinished: MulticastDelegate<(browser: this, success: boolean) => void> =
    new MockMulticastDelegate<(browser: this, success: boolean) => void>();

  constructor(params?: MockWebBrowserParams) {
    super(params);
    if (params?.url) {
      this._url = params.url;
    }
  }

  stopLoad(): void {}
  setURL(url: string): WebBrowser {
    this._url = url;
    return this;
  }
  reload(): void {}
  isLoading(): boolean {
    return false;
  }
  goForward(): void {}
  goBack(): void {}
  getURL(): string {
    return this._url;
  }
  canGoForward(): boolean {
    return true;
  }
  canGoBack(): boolean {
    return true;
  }
}
