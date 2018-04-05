import { XrmMockGenerator } from "../../src/xrm-mock-generator/index";
import { XrmStaticMock } from "../../src/xrm-mock/index";
import { StringAttributeMock } from "../../src/xrm-mock/page/stringattribute/stringattribute.mock";

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
    XrmMockGenerator.Attribute.createString("firstname", "Joe");
    expect(Xrm.Page.getAttribute("firstname").getValue()).toBe("Joe");
  });

  it("should create a string attribute and default the control", () => {
    XrmMockGenerator.Attribute.createString("firstname", "Joe");
    let count = 0;
    Xrm.Page.getAttribute("firstname").controls.forEach((c) => {
      count++;
      expect(c.getName()).toBe("firstname");
    });
    expect(count).toBe(1);
  });

  it("should create a string control with Label", () => {
    XrmMockGenerator.Control.createString(StringAttributeMock.create("firstname"), "firstname", true, false,
                                          "First Name");
    expect(Xrm.Page.getControl("firstname").getLabel()).toBe("First Name");
  });
});
