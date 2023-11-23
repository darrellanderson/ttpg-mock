import { MockJSConsole } from "./mock-js-console";

it("constructor", () => {
  new MockJSConsole();
});

it("warn", () => {
  MockJSConsole.warn("warn");
});

it("log", () => {
  MockJSConsole.log("log");
});

it("info", () => {
  MockJSConsole.info("info");
});

it("error", () => {
  MockJSConsole.error("error");
});

it("debug", () => {
  MockJSConsole.debug("debug");
});
