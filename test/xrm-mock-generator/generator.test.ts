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

  it("should have a Control property", () => {
    expect(XrmMockGenerator.Control).toBeDefined();
  });

    // [Yagasoft | 2018-08-05 | Added] tab and section tests
    it("should have a Tab property", () => {
        expect(XrmMockGenerator.Tab).toBeDefined();
    });

    it("should have a Section property", () => {
        expect(XrmMockGenerator.Section).toBeDefined();
    });
});
