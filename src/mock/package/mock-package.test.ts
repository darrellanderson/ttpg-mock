import { MockPackage, MockPackageParams } from "./mock-package";

it("constructor", () => {
    new MockPackage();
    const params: MockPackageParams = {
        fontFiles: ["my-font"],
        modelFiles: ["my-model"],
        name: "my-name",
        scriptFiles: ["my-script"],
        soundFiles: ["my-sound"],
        templateIds: ["my-template-id"],
        textureFiles: ["my-texture"],
        uniqueId: "my-unique-id",
        isAllowed: false,
    };
    const pkg = new MockPackage(params);
    expect(pkg.getFontFiles()).toEqual(params.fontFiles);
    expect(pkg.getModelFiles()).toEqual(params.modelFiles);
    expect(pkg.getName()).toEqual(params.name);
    expect(pkg.getScriptFiles()).toEqual(params.scriptFiles);
    expect(pkg.getSoundFiles()).toEqual(params.soundFiles);
    expect(pkg.getTemplateIds()).toEqual(params.templateIds);
    expect(pkg.getTextureFiles()).toEqual(params.textureFiles);
    expect(pkg.getUniqueId()).toEqual(params.uniqueId);
    expect(pkg.isAllowed()).toEqual(params.isAllowed);
});

it("allow", () => {
    const pkg = new MockPackage({ isAllowed: false });
    expect(pkg.isAllowed()).toEqual(false);
    pkg.allow();
    expect(pkg.isAllowed()).toEqual(true);
});
