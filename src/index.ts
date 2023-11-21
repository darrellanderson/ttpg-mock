import {
  Card,
  CardHolder,
  Container,
  Dice,
  GameObject,
  GameWorld,
  GlobalScriptingEvents,
  MultistateObject,
} from "@tabletop-playground/api";
import { MockGameWorld, MockGlobalScriptingEvents, mockFetch } from "./mock";

// Enums.
let _GridSnapType: any;
let _GridType: any;
let _GridVisibility: any;
let _HiddenCardsType: any;
let _HorizontalAlignment: any;
let _ObjectType: any;
let _SnapPointFlipValidity: any;
let _SnapPointShape: any;
let _TextJustification: any;
let _UIPresentationStyle: any;
let _UIZoomVisibility: any;
let _VerticalAlignment: any;
let _ZonePermission: any;
let _ZoneShape: any;

// Variables.
let _globalEvents: GlobalScriptingEvents;
let _refCard: Card | undefined;
let _refContainer: Container | undefined;
let _refDice: Dice | undefined;
let _refHolder: CardHolder | undefined;
let _refMultistate: MultistateObject | undefined;
let _refObject: GameObject | undefined;
let _refPackageId: string | undefined;
let _world: GameWorld;

// Functions.
let _fetch: any;

const isTTPG =
  "platform" in process && process.platform === "TabletopPlayground";

if (isTTPG) {
  const {
    // Enums.
    GridSnapType,
    GridType,
    GridVisibility,
    HiddenCardsType,
    HorizontalAlignment,
    ObjectType,
    SnapPointFlipValidity,
    SnapPointShape,
    TextJustification,
    UIPresentationStyle,
    UIZoomVisibility,
    VerticalAlignment,
    ZonePermission,
    ZoneShape,

    // Variables.
    globalEvents,
    refCard,
    refContainer,
    refDice,
    refHolder,
    refMultistate,
    refObject,
    refPackageId,
    world,

    // Functions.
    fetch,
  } = require("@tabletop-playground/api");

  // Enums.
  _GridSnapType = GridSnapType;
  _GridType = GridType;
  _GridVisibility = GridVisibility;
  _HiddenCardsType = HiddenCardsType;
  _HorizontalAlignment = HorizontalAlignment;
  _ObjectType = ObjectType;
  _SnapPointFlipValidity = SnapPointFlipValidity;
  _SnapPointShape = SnapPointShape;
  _TextJustification = TextJustification;
  _UIPresentationStyle = UIPresentationStyle;
  _UIZoomVisibility = UIZoomVisibility;
  _VerticalAlignment = VerticalAlignment;
  _ZonePermission = ZonePermission;
  _ZoneShape = ZoneShape;

  // Variables.
  _globalEvents = globalEvents;
  _refCard = refCard;
  _refContainer = refContainer;
  _refDice = refDice;
  _refHolder = refHolder;
  _refMultistate = refMultistate;
  _refObject = refObject;
  _refPackageId = refPackageId;
  _world = world;

  // Functions.
  _fetch = fetch;
} else {
  // Enums.
  const {
    GridSnapType,
    GridType,
    GridVisibility,
    HiddenCardsType,
    HorizontalAlignment,
    ObjectType,
    SnapPointFlipValidity,
    SnapPointShape,
    TextJustification,
    UIPresentationStyle,
    UIZoomVisibility,
    VerticalAlignment,
    ZonePermission,
    ZoneShape,
  } = require("./enums");

  // Enums.
  _GridSnapType = GridSnapType;
  _GridType = GridType;
  _GridVisibility = GridVisibility;
  _HiddenCardsType = HiddenCardsType;
  _HorizontalAlignment = HorizontalAlignment;
  _ObjectType = ObjectType;
  _SnapPointFlipValidity = SnapPointFlipValidity;
  _SnapPointShape = SnapPointShape;
  _TextJustification = TextJustification;
  _UIPresentationStyle = UIPresentationStyle;
  _UIZoomVisibility = UIZoomVisibility;
  _VerticalAlignment = VerticalAlignment;
  _ZonePermission = ZonePermission;
  _ZoneShape = ZoneShape;

  // Variables.
  _globalEvents = new MockGlobalScriptingEvents();
  _world = new MockGameWorld();

  // Functions.
  _fetch = mockFetch;
}

// Enums.
export const GridSnapType = _GridSnapType;
export const GridType = _GridType;
export const GridVisibility = _GridVisibility;
export const HiddenCardsType = _HiddenCardsType;
export const HorizontalAlignment = _HorizontalAlignment;
export const ObjectType = _ObjectType;
export const SnapPointFlipValidity = _SnapPointFlipValidity;
export const SnapPointShape = _SnapPointShape;
export const TextJustification = _TextJustification;
export const UIPresentationStyle = _UIPresentationStyle;
export const UIZoomVisibility = _UIZoomVisibility;
export const VerticalAlignment = _VerticalAlignment;
export const ZonePermission = _ZonePermission;
export const ZoneShape = _ZoneShape;

export {
  // Variables.
  _globalEvents as globalEvents,
  _world as world,

  // Functions.
  _fetch as fetch,
};

// Class types.
export type * from "@tabletop-playground/api";

// Mocked classes.
export * from "./mock";

// Expose if running in TTPG.
export { isTTPG };
