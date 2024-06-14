import { MockGameWorld, MockGlobalScriptingEvents, MockProcess } from ".";

export abstract class JestSetup {
    private static _enabled: boolean = false;

    static enableAfterEachResets() {
        if (afterEach && !JestSetup._enabled) {
            JestSetup._enabled = true;
            afterEach(() => {
                MockGameWorld.__sharedInstance._reset();
                MockGlobalScriptingEvents.__sharedInstance._reset();
                MockProcess.__sharedInstance.flushTicks();
            });
        }
    }
}
