import { EntityMetadataMock } from "../../../src/xrm-mock/";

describe("Xrm.Metadata.AttributeMetadata Mock", () => {
  let entityMetadata: EntityMetadataMock;

  beforeEach(() => {
    entityMetadata = new EntityMetadataMock({
      IsQuickCreateEnabled: true,
      LogicalName: "contact",
      PrimaryIdAttribute: "contactid",
    });
  });

  it("should exist", () => {
    expect(entityMetadata).toBeDefined();
  });
});
