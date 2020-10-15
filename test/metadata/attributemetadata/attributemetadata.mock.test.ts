import { AttributeMetadataMock } from "../../../src/xrm-mock/";

describe("Xrm.Metadata.AttributeMetadata Mock", () => {
  beforeEach(() => {
    this.attributeMetadata = new AttributeMetadataMock({
      AttributeType: 11,
      DefaultFormValue: 1,
      DisplayName: "Lead Source",
      EntityLogicalName: "lead",
      LogicalName: "leadsource",
      OptionSet: [],
    });
  });

  it("should exist", () => {
    expect(this.attributeMetadata).toBeDefined();
  });
});
