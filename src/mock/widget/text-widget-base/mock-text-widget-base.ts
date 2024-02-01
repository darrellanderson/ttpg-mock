import { Color, TextWidgetBase } from "@tabletop-playground/api";
import { MockWidget, MockWidgetParams } from "../mock-widget";
import { MockColor } from "../../color/mock-color";

export type MockTextWidgetBaseParams = MockWidgetParams & {
    fontFilename?: string;
    fontPackageId?: string;
    fontSize?: number;
    textColor?: Color | [r: number, g: number, b: number, a: number];
    isBold?: boolean;
    isItalic?: boolean;
};

export class MockTextWidgetBase extends MockWidget implements TextWidgetBase {
    private _fontFilename: string = "";
    private _fontPackageId: string = "";
    private _fontSize: number = 0;
    private _textColor: Color = new MockColor(0, 0, 0, 1);
    private _isBold: boolean = false;
    private _isItalic: boolean = false;

    constructor(params?: MockTextWidgetBaseParams) {
        super(params);
        if (params?.fontFilename !== undefined) {
            this._fontFilename = params.fontFilename;
        }
        if (params?.fontPackageId !== undefined) {
            this._fontPackageId = params.fontPackageId;
        }
        if (params?.fontSize !== undefined) {
            this._fontSize = params.fontSize;
        }
        if (params?.textColor !== undefined) {
            this._textColor = MockColor._from(params.textColor);
        }
        if (params?.isBold !== undefined) {
            this._isBold = params.isBold;
        }
        if (params?.isItalic !== undefined) {
            this._isItalic = params.isItalic;
        }
    }

    getFontFileName(): string {
        return this._fontFilename;
    }
    getFontPackageId(): string {
        return this._fontPackageId;
    }
    getFontSize(): number {
        return this._fontSize;
    }
    getTextColor(): Color {
        return this._textColor.clone();
    }
    isBold(): boolean {
        return this._isBold;
    }
    isItalic(): boolean {
        return this._isItalic;
    }
    setBold(bold: boolean): this {
        this._isBold = bold;
        return this;
    }
    setFont(fontFilename: string, packageId?: string | undefined): this {
        this._fontFilename = fontFilename;
        this._fontPackageId = packageId ? packageId : "";
        return this;
    }
    setFontSize(size: number): this {
        this._fontSize = size;
        return this;
    }
    setItalic(italic: boolean): this {
        this._isItalic = italic;
        return this;
    }
    setTextColor(
        color: Color | [r: number, g: number, b: number, a: number]
    ): this {
        this._textColor = MockColor._from(color);
        return this;
    }
}
