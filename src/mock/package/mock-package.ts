import { Package } from "@tabletop-playground/api";

export class MockPackage implements Package {
  isAllowed(): boolean {
    throw new Error("Method not implemented.");
  }
  getUniqueId(): string {
    throw new Error("Method not implemented.");
  }
  getTextureFiles(): string[] {
    throw new Error("Method not implemented.");
  }
  getTemplateIds(): string[] {
    throw new Error("Method not implemented.");
  }
  getSoundFiles(): string[] {
    throw new Error("Method not implemented.");
  }
  getScriptFiles(): string[] {
    throw new Error("Method not implemented.");
  }
  getName(): string {
    throw new Error("Method not implemented.");
  }
  getModelFiles(): string[] {
    throw new Error("Method not implemented.");
  }
  getFontFiles(): string[] {
    throw new Error("Method not implemented.");
  }
  allow(): void {
    throw new Error("Method not implemented.");
  }
}
