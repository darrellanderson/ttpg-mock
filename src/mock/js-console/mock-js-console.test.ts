import { MockJSConsole } from "./mock-js-console";

it("constructor", () => {
    new MockJSConsole();
});

it("warn", () => {
    const mock = jest
        .spyOn(global.console, "warn")
        .mockImplementation(() => {});
    MockJSConsole.warn("msg");
    expect(mock).toHaveBeenCalled();
    mock.mockRestore();
});

it("log", () => {
    const mock = jest.spyOn(global.console, "log").mockImplementation(() => {});
    MockJSConsole.log("msg");
    expect(mock).toHaveBeenCalled();
    mock.mockRestore();
});

it("info", () => {
    const mock = jest
        .spyOn(global.console, "info")
        .mockImplementation(() => {});
    MockJSConsole.info("msg");
    expect(mock).toHaveBeenCalled();
    mock.mockRestore();
});

it("error", () => {
    const mock = jest
        .spyOn(global.console, "error")
        .mockImplementation(() => {});
    MockJSConsole.error("msg");
    expect(mock).toHaveBeenCalled();
    mock.mockRestore();
});

it("debug", () => {
    const mock = jest
        .spyOn(global.console, "debug")
        .mockImplementation(() => {});
    MockJSConsole.debug("msg");
    expect(mock).toHaveBeenCalled();
    mock.mockRestore();
});
