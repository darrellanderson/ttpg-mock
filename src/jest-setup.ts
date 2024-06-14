import { MockGameWorld, MockGlobalScriptingEvents, MockProcess } from ".";

export abstract class JestSetup {
    private static _enabled: boolean = false;
    private static _afterEachCount = 0;

    static get afterEachCount() {
        return JestSetup._afterEachCount;
    }

    static enableAfterEachResets() {
        if (afterEach && !JestSetup._enabled) {
            JestSetup._enabled = true;
            afterEach(() => {
                JestSetup._afterEachCount++;

                MockGameWorld.__resetSharedInstance();
                MockGlobalScriptingEvents.__resetSharedInstance();
                MockProcess.__resetSharedInstance();
            });
        }
    }
}
