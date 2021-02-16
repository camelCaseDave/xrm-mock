import { OptionMetadataMock } from "../../../src/xrm-mock/";

describe("Xrm.Metadata.OptionMetadata Mock", () => {
  let optionMetadata: OptionMetadataMock;

  beforeEach(() => {
    optionMetadata = new OptionMetadataMock({});
  });

  it("should exist", () => {
    expect(optionMetadata).toBeDefined();
  });
});
