import { XrmMockGenerator } from "../../src/xrm-mock-generator/index";

describe("XrmMockGenerator", () => {
  beforeEach(() => {
    XrmMockGenerator.initialise("contact");
  });

  it("should initialise Xrm globally", () => {
    expect(Xrm).toBeDefined();
  });

  it("should have an Attribute property", () => {
    expect(XrmMockGenerator.Attribute).toBeDefined();
  });

  it("should have a Control property", () => {
    expect(XrmMockGenerator.Control).toBeDefined();
  });
});
