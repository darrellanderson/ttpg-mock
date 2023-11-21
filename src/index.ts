import { MockGameWorld, MockGlobalScriptingEvents, mockFetch } from "./mock";

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

// Variables.
const globalEvents = new MockGlobalScriptingEvents();
const world = new MockGameWorld();
export { globalEvents, world };

// Functions.
const fetch = mockFetch;
export { fetch };

const isTTPG =
  "platform" in process && process.platform === "TabletopPlayground";
