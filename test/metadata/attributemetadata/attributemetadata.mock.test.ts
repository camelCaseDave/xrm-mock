import { AttributeMetadataMock } from "../../../src/xrm-mock/";

describe("Xrm.Metadata.AttributeMetadata Mock", () => {
  beforeEach(() => {
    this.attributeMetadata = new AttributeMetadataMock({
      attributeType: 11,
      defaultFormValue: 1,
      displayName: "Lead Source",
      entityLogicalName: "lead",
      logicalName: "leadsource",
      optionSet: [],
      options: [],
    });
  });

  it("should exist", () => {
    expect(this.attributeMetadata).toBeDefined();
  });
});
