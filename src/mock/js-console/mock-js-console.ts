import { JSConsole } from "@tabletop-playground/api";

export class MockJSConsole implements JSConsole {
  static warn(message: string) {
    throw new Error("Method not implemented.");
  }
  static log(message: string) {
    throw new Error("Method not implemented.");
  }
  static info(message: string) {
    throw new Error("Method not implemented.");
  }
  static error(message: string) {
    throw new Error("Method not implemented.");
  }
  static debug(message: string) {
    throw new Error("Method not implemented.");
  }
}
