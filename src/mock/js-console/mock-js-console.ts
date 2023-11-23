import { JSConsole } from "@tabletop-playground/api";

export class MockJSConsole implements JSConsole {
  static loggingEnabled = false; // only in the mock class

  static warn(message: string) {
    if (MockJSConsole.loggingEnabled) {
      console.warn(message);
    }
  }
  static log(message: string) {
    if (MockJSConsole.loggingEnabled) {
      console.log(message);
    }
  }
  static info(message: string) {
    if (MockJSConsole.loggingEnabled) {
      console.info(message);
    }
  }
  static error(message: string) {
    if (MockJSConsole.loggingEnabled) {
      console.error(message);
    }
  }
  static debug(message: string) {
    if (MockJSConsole.loggingEnabled) {
      console.debug(message);
    }
  }
}
