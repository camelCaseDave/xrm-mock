import { AttributeMetadataMock } from "../../../src/xrm-mock/";

describe("Xrm.Metadata.AttributeMetadata Mock", () => {
  let attributeMetadata: AttributeMetadataMock;

  beforeEach(() => {
    attributeMetadata = new AttributeMetadataMock({
      AttributeType: 11,
      DefaultFormValue: 1,
      DisplayName: "Lead Source",
      EntityLogicalName: "lead",
      LogicalName: "leadsource",
      OptionSet: [],
    });
  });

  it("should exist", () => {
    expect(attributeMetadata).toBeDefined();
  });
});
