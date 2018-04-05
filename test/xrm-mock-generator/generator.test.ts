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
});
