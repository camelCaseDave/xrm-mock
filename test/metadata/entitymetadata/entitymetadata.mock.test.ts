import { EntityMetadataMock } from "../../../src/xrm-mock/";

describe("Xrm.Metadata.AttributeMetadata Mock", () => {
  beforeEach(() => {
    this.entityMetadata = new EntityMetadataMock({
      IsQuickCreateEnabled: true,
      LogicalName: "contact",
      PrimaryIdAttribute: "contactid",
    });
  });

  it("should exist", () => {
    expect(this.entityMetadata).toBeDefined();
  });
});
