import { JestSetup } from "./jest-setup";
import { clickAll } from "./click-all/click-all";
import {
    MockGameWorld,
    MockGlobalScriptingEvents,
    MockProcess,
    mockFetch,
} from "./mock";

// Unittest helpers.
export { clickAll };

// Enums.
export * from "./enums";

// Classes.
export {
    MockBorder as Border,
    MockButton as Button,
    MockCanvas as Canvas,
    MockCard as Card,
    MockCardDetails as CardDetails,
    MockCardHolder as CardHolder,
    MockCheckBox as CheckBox,
    MockColor as Color,
    MockContainer as Container,
    MockContentButton as ContentButton,
    MockDelegate as Delegate,
    MockDice as Dice,
    MockDrawingLine as DrawingLine,
    MockFetchResponse as FetchResponse,
    MockGameObject as GameObject,
    MockGameWorld as GameWorld,
    MockGlobalGrid as GlobalGrid,
    MockGlobalScriptingEvents as GlobalScriptingEvents,
    MockHorizontalBox as HorizontalBox,
    MockHttpRequest as HttpRequest,
    MockImageButton as ImageButton,
    MockImageWidget as ImageWidget,
    MockJSConsole as JSConsole,
    MockLabel as Label,
    MockLayoutBox as LayoutBox,
    MockLightingSettings as LightingSettings,
    MockMulticastDelegate as MulticastDelegate,
    MockMultilineTextBox as MultilineTextBox,
    MockMultistateObject as MultistateObject,
    MockPackage as Package,
    MockPanel as Panel,
    MockPhaseDetails as PhaseDetails,
    MockPlayer as Player,
    MockPlayerPermission as PlayerPermission,
    MockProcess as Process,
    MockProgressBar as ProgressBar,
    MockRichText as RichText,
    MockRotator as Rotator,
    MockScreenUIElement as ScreenUIElement,
    MockSelectionBox as SelectionBox,
    MockSlider as Slider,
    MockSnapPoint as SnapPoint,
    MockSound as Sound,
    MockStaticObject as StaticObject,
    MockText as Text,
    MockTextBox as TextBox,
    MockTextWidgetBase as TextWidgetBase,
    MockTraceHit as TraceHit,
    MockTurnSystem as TurnSystem,
    MockUIElement as UIElement,
    MockVector as Vector,
    MockVerticalBox as VerticalBox,
    MockWebBrowser as WebBrowser,
    MockWidget as Widget,
    MockWidgetSwitcher as WidgetSwitcher,
    MockZone as Zone,
} from "./mock";

// Export mock class names too.
export * from "./mock";

// Variables.
const globalEvents = MockGlobalScriptingEvents.__sharedInstance;
const world = MockGameWorld.__sharedInstance;
export { globalEvents, world };

// Also expose variables with a mock name.
export { globalEvents as mockGlobalEvents, world as mockWorld };

// Functions.
const fetch = mockFetch;
export { fetch };

// Globals.
globalThis.process = MockProcess.__sharedInstance;

// ref.
export const refPackageId: string = "ttpg-mock-package-id";

// Tell jest to scrub everything after each test.
JestSetup.enableAfterEachResets();
