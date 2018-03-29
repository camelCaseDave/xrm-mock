import { XrmMockGenerator } from "../../src/xrm-mock-generator/index";

describe("XrmMockGenerator", () => {
  beforeEach(() => {
    XrmMockGenerator.initialise();
  });

  it("should initialise Xrm globally", () => {
    expect(Xrm).toBeDefined();
  });

  it("should have an Attribute property", () => {
    expect(XrmMockGenerator.Attribute).toBeDefined();
  });

  it("should create a string attribute", () => {
    XrmMockGenerator.Attribute.createString("firstname", "Joe", "First Name", "text", 100, true, false);
    expect(Xrm.Page.getAttribute("firstname").getValue()).toBe("Joe");
  });
});
