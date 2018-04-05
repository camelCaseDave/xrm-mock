import { XrmMockGenerator } from "../../src/xrm-mock-generator/index";
import { LookupValueMock, XrmStaticMock } from "../../src/xrm-mock/index";
import { StringAttributeMock } from "../../src/xrm-mock/page/stringattribute/stringattribute.mock";

describe("XrmMockGenerator.Attribute", () => {
  beforeEach(() => {
    XrmMockGenerator.initialise();
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

  it("should create a boolean attribute", () => {
    XrmMockGenerator.Attribute.createBool("new_havingfun", true);
    expect(Xrm.Page.getAttribute("new_havingfun").getValue()).toEqual(true);
  });

  it("should create a date attribute without a time component", () => {
    const christmas = new Date(1960, 12, 25);
    XrmMockGenerator.Attribute.createDate("christmas", christmas);
    expect(Xrm.Page.getAttribute("christmas").getValue()).toBe(christmas);
  });

  it("should create a lookup", () => {
    XrmMockGenerator.Attribute.createLookup("primarycustomerid", new LookupValueMock("5555", "contact"));
    expect(Xrm.Page.getAttribute("primarycustomerid").getValue()[0].id).toBe("5555");
  });

  it("should create a number", () => {
    XrmMockGenerator.Attribute.createNumber("units", 3);
    expect(Xrm.Page.getAttribute("units").getValue()).toBe(3);
  });
});
