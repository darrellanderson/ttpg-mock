import { JSConsole } from "@tabletop-playground/api";

export class MockJSConsole implements JSConsole {
  static warn(message: string) {
    console.warn(message);
  }
  static log(message: string) {
    console.log(message);
  }
  static info(message: string) {
    console.info(message);
  }
  static error(message: string) {
    console.error(message);
  }
  static debug(message: string) {
    console.debug(message);
  }
}
