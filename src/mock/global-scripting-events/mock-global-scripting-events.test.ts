import { MockGlobalScriptingEvents } from "./mock-global-scripting-events";
import { MockPlayer } from "../player/mock-player";

it("constructor", () => {
    new MockGlobalScriptingEvents();
});

it("_reset", () => {
    new MockGlobalScriptingEvents()._reset();
});

it("_chatMessageAsPlayer", () => {
    const events = new MockGlobalScriptingEvents();
    const player = new MockPlayer();
    let count = 0;
    events.onChatMessage.add(() => {
        count++;
    });
    events._chatMessageAsPlayer(player, "");
    expect(count).toEqual(1);
});

it("_customActionAsPlayer", () => {
    const events = new MockGlobalScriptingEvents();
    const player = new MockPlayer();
    let count = 0;
    events.onCustomAction.add(() => {
        count++;
    });
    events._customActionAsPlayer(player, "");
    expect(count).toEqual(1);
});

it("_diceRolledAsPlayer", () => {
    const events = new MockGlobalScriptingEvents();
    const player = new MockPlayer();
    let count = 0;
    events.onDiceRolled.add(() => {
        count++;
    });
    events._diceRolledAsPlayer(player, []);
    expect(count).toEqual(1);
});

it("_scriptButtonPressedAsPlayer", () => {
    const events = new MockGlobalScriptingEvents();
    const player = new MockPlayer();
    let count = 0;
    events.onScriptButtonPressed.add(() => {
        count++;
    });
    events._scriptButtonPressedAsPlayer(player, 1, false, false);
    expect(count).toEqual(1);
});

it("_scriptButtonReleasedAsPlayer", () => {
    const events = new MockGlobalScriptingEvents();
    const player = new MockPlayer();
    let count = 0;
    events.onScriptButtonReleased.add(() => {
        count++;
    });
    events._scriptButtonReleasedAsPlayer(player, 1);
    expect(count).toEqual(1);
});

it("_shakeAsPlayer", () => {
    const events = new MockGlobalScriptingEvents();
    const player = new MockPlayer();
    let count = 0;
    events.onShake.add(() => {
        count++;
    });
    events._shakeAsPlayer(player, []);
    expect(count).toEqual(1);
});

it("_teamChatAsPlayer", () => {
    const events = new MockGlobalScriptingEvents();
    const player = new MockPlayer();
    let count = 0;
    events.onTeamChatMessage.add(() => {
        count++;
    });
    events._teamChatAsPlayer(player, 1, "");
    expect(count).toEqual(1);
});

it("_whisperAsPlayer", () => {
    const events = new MockGlobalScriptingEvents();
    const player = new MockPlayer();
    let count = 0;
    events.onWhisper.add(() => {
        count++;
    });
    events._whisperAsPlayer(player, new MockPlayer(), "");
    expect(count).toEqual(1);
});
