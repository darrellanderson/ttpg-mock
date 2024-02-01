/* eslint-disable no-unused-vars */

/** The object type used in {@link GameObject.getObjectType} and {@link GameObject.setObjectType}*/
export enum ObjectType {
    /** Standard object behavior: physics stay activated (if locked physics is not enabled), collides with other regular and ground objects */
    Regular = 0,
    /** Physics get locked when object is at rest, collides with all object types */
    Ground = 1,
    /** Physics stay activated as for regular objects, does not collide with other penetrable or regular objects */
    Penetrable = 2,
    /** Physics are locked, players cannot interact with the object at all: it behaves like a table */
    NonInteractive = 3,
}

/** The zone shape used in {@link Zone.getShape} and {@link Zone.setShape}*/
export enum ZoneShape {
    Box = 0,
    Cylinder = 1,
    Hexagon = 2,
}

/** The zone permission types used in {@link Zone}*/
export enum ZonePermission {
    Everybody = 0,
    OwnersOnly = 1,
    Nobody = 2,
}

/** Justification (alignment) used in {@link Text}*/
export enum TextJustification {
    Left = 0,
    Center = 1,
    Right = 2,
}

/** Widget alignment used in {@link LayoutBox} and {@link Panel}*/
export enum HorizontalAlignment {
    Fill = 0,
    Left = 1,
    Center = 2,
    Right = 3,
}

/** Widget alignment used in {@link LayoutBox} and {@link Panel}*/
export enum VerticalAlignment {
    Fill = 0,
    Top = 1,
    Center = 2,
    Bottom = 3,
}

/** Behavior for hidden cards used in {@link CardHolder}*/
export enum HiddenCardsType {
    GreyBlur = 0,
    Back = 1,
    Front = 2,
}

/** Shape of snap points used in {@link SnapPoint}*/
export enum SnapPointShape {
    Sphere = 0,
    Cylinder = 1,
    Box = 2,
}

/** Type of snap point rotation used in {@link SnapPoint}*/
export enum SnapPointShape {
    NoChange = 0,
    NoFlip = 1,
    RotateNoFlip = 2,
    RotateUpright = 3,
    RotateUpsideDown = 4,
}

/** When a snap point is valid depending on whether its object is flipped, used in {@link SnapPoint}*/
export enum SnapPointFlipValidity {
    Always = 0,
    Upright = 1,
    UpsideDown = 2,
}

/** Presentation style for UI elements, used for {@link UIElement.presentationStyle} */
export enum UIPresentationStyle {
    /** The UI element is shown in 3D space, as defined by its position, rotation, and scale. */
    Regular = 0,
    /** The UI element is shown at its position and with its scale. Rotation is not used and instead the UI is always facing the camera */
    ViewAligned = 1,
    /** The UI element is shown in 2D on the screen at its position. Rotation and scale are not used, the size on screen corresponds to the
            size of the UI element. {@link UIElement.useTransparency} does not have an effect, screen UIs can always be partly transparent.
            Screen presentation is not possible in VR, and the UI will fall back to {@link ViewAligned} for VR players, so make sure to
            set an appropriate scale even when using screen mode. */
    Screen = 2,
}

/** Visibility of UI elements depending on whether the object is zoomed, used for {@link UIElement.zoomVisibility} */
export enum UIZoomVisibility {
    /** The UI element is only shown for the regular object. */
    Regular = 0,
    /** The UI element is only shown for a zoomed object (in object zoom) */
    ZoomedOnly = 1,
    /** The UI element is shown for both the regular and the zoomed object */
    Both = 2,
}

/** Type of the snap grid, used in {@link GlobalGrid}*/
export enum GridType {
    Rectangular = 0,
    Hexagonal = 1,
}

/** Where objects snap on the grid, used in {@link GlobalGrid}*/
export enum GridSnapType {
    None = 0,
    Center = 1,
    Corners = 2,
    Both = 3,
}

/** If and where the snap grid is visible, used in {@link GlobalGrid}*/
export enum GridVisibility {
    None = 0,
    Table = 1,
    TableAndGround = 2,
}
