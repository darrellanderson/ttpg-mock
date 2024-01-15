import { GameWorld, GlobalScriptingEvents } from "@tabletop-playground/api";

/**
 * Some object methods need access to the "gameWorld", etc.
 * This leads to cranky circular imports, so here's a giant
 * hack to access the shared versions of those objects.
 */
export abstract class SharedObjects {
  private static _gameWorld: GameWorld | undefined;
  private static _globalScriptingEvents: GlobalScriptingEvents | undefined;
  private static _process: Process | undefined;

  static set gameWorld(value: GameWorld) {
    SharedObjects._gameWorld = value;
  }

  static get gameWorld(): GameWorld {
    if (!this._gameWorld) {
      throw new Error(
        "SharedObjects.gameWorld undefined, import MockGameWorld to instantiate it"
      );
    }
    return this._gameWorld;
  }

  static set globalScriptingEvents(value: GlobalScriptingEvents) {
    SharedObjects._globalScriptingEvents = value;
  }

  static get globalScriptingEvents(): GlobalScriptingEvents {
    if (!this._globalScriptingEvents) {
      throw new Error(
        "SharedObjects.globalScriptingEvents undefined, import MockGlobalScriptingEvents to instantiate it"
      );
    }
    return this._globalScriptingEvents;
  }

  static set process(value: Process) {
    SharedObjects._process = value;
  }

  static get process(): Process {
    if (!this._process) {
      throw new Error(
        "SharedObjects.process undefined, import MockProcess to instantiate it"
      );
    }
    return this._process;
  }
}
