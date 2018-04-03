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
    XrmMockGenerator.Attribute.createString("firstname", "Joe", true, false, "text", 100, "First Name");
    expect(Xrm.Page.getAttribute("firstname").getValue()).toBe("Joe");
  });

  it("should create a string control with Label", () => {
    XrmMockGenerator.Control.createString(undefined, "firstname", true, false, "First Name");
    expect(Xrm.Page.getControl("firstname").getLabel()).toBe("First Name");
  });
});
