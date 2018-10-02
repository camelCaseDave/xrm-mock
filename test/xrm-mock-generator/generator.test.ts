import { LookupValueMock } from "../../src/xrm-mock";
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

  it("should have a Tab property", () => {
    expect(XrmMockGenerator.Tab).toBeDefined();
  });

  it("should have a Section property", () => {
    expect(XrmMockGenerator.Section).toBeDefined();
  });

  it("should default an event/execution context", () => {
    expect(XrmMockGenerator.eventContext).toBeDefined();
  });

  it("should default a form context", () => {
    expect(XrmMockGenerator.formContext).toBeDefined();
  });

  it("should persist a defaulted form context", () => {
    XrmMockGenerator.initialise();
    XrmMockGenerator.Attribute.createLookup("contactid", new LookupValueMock("5555", "contact", "Joe Bloggs"));
    const expected = XrmMockGenerator.eventContext.getFormContext();

    expect(expected).toBe(XrmMockGenerator.formContext);
  });
});
