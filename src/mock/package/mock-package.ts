import { Package } from "@tabletop-playground/api";

export type MockPackageParams = {
    isAllowed?: boolean;
    fontFiles?: string[];
    modelFiles?: string[];
    name?: string;
    scriptFiles?: string[];
    soundFiles?: string[];
    templateIds?: string[];
    textureFiles?: string[];
    uniqueId?: string;
};

export class MockPackage implements Package {
    private static __nextIndex = 0;

    private _isAllowed: boolean = true;
    private _fontFiles: string[] = [];
    private _modelFiles: string[] = [];
    private _name: string = "";
    private _scriptFiles: string[] = [];
    private _soundFiles: string[] = [];
    private _templateIds: string[] = [];
    private _textureFiles: string[] = [];
    private readonly _uniqueId: string = `__package_${MockPackage.__nextIndex++}__`;

    constructor(params?: MockPackageParams) {
        if (params?.isAllowed !== undefined) {
            this._isAllowed = params.isAllowed;
        }
        if (params?.fontFiles) {
            this._fontFiles = params.fontFiles;
        }
        if (params?.modelFiles) {
            this._modelFiles = params.modelFiles;
        }
        if (params?.name) {
            this._name = params.name;
        }
        if (params?.scriptFiles) {
            this._scriptFiles = params.scriptFiles;
        }
        if (params?.soundFiles) {
            this._soundFiles = params.soundFiles;
        }
        if (params?.templateIds) {
            this._templateIds = params.templateIds;
        }
        if (params?.textureFiles) {
            this._textureFiles = params.textureFiles;
        }
        if (params?.uniqueId) {
            this._uniqueId = params.uniqueId;
        }
    }

    allow(): void {
        this._isAllowed = true;
    }

    getUniqueId(): string {
        return this._uniqueId;
    }

    isAllowed(): boolean {
        return this._isAllowed;
    }

    getFontFiles(): string[] {
        return this._fontFiles;
    }

    getModelFiles(): string[] {
        return this._modelFiles;
    }

    getName(): string {
        return this._name;
    }

    getScriptFiles(): string[] {
        return this._scriptFiles;
    }

    getSoundFiles(): string[] {
        return this._soundFiles;
    }

    getTemplateIds(): string[] {
        return this._templateIds;
    }

    getTextureFiles(): string[] {
        return this._textureFiles;
    }
}
