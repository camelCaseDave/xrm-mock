import { OptionMetadataMock } from "../../../src/xrm-mock/";

describe("Xrm.Metadata.OptionMetadata Mock", () => {
  beforeEach(() => {
    this.optionmetadata = new OptionMetadataMock({});
  });

  it("should exist", () => {
    expect(this.optionmetadata).toBeDefined();
  });
});
