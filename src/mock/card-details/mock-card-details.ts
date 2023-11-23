import { CardDetails } from "@tabletop-playground/api";

export type MockCardDetailsParams = {
  index?: number;
  stackIndex?: number;
  templateId?: string;
  name?: string;
  metadata?: string;
  textureOverrideURL?: string;
  flipped?: boolean;
  tags?: string[];
};

export class MockCardDetails implements CardDetails {
  index: number = 0;
  stackIndex: number = 0;
  templateId: string = "";
  name: string = "";
  metadata: string = "";
  textureOverrideURL: string = "";
  flipped: boolean = false;
  tags: string[] = [];

  constructor(params?: MockCardDetailsParams) {
    if (params?.index !== undefined) {
      this.index = params.index;
    }
    if (params?.stackIndex !== undefined) {
      this.stackIndex = params.stackIndex;
    }
    if (params?.templateId) {
      this.templateId = params.templateId;
    }
    if (params?.name) {
      this.name = params.name;
    }
    if (params?.metadata) {
      this.metadata = params.metadata;
    }
    if (params?.textureOverrideURL) {
      this.textureOverrideURL = params.textureOverrideURL;
    }
    if (params?.flipped !== undefined) {
      this.flipped = params.flipped;
    }
    if (params?.tags) {
      this.tags = params.tags;
    }
  }
}
