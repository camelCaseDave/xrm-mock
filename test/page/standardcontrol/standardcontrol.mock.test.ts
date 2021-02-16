import { AttributeMock } from "../../../src/xrm-mock/attributes/attribute/attribute.mock";
import { StandardControlMock } from "../../../src/xrm-mock/controls/standardcontrol/standardcontrol.mock";

describe("Xrm.Controls.StandardControl Mock", () => {
  let standardControl: StandardControlMock<any, any, any>;

  beforeEach(() => {
    standardControl = new StandardControlMock({
      attribute: new AttributeMock({
        name: "firstname",
        value: "Joe",
      }),
      disabled: false,
      name: "firstname",
    });
  });

  it("should exist", () => {
    expect(standardControl).toBeDefined();
  });

  it("should not be disabled", () => {
    expect(standardControl.getDisabled()).toBe(false);
  });

  it("should set itself to disabled", () => {
    standardControl.setDisabled(true);
    expect(standardControl.getDisabled()).toBe(true);
  });

  it("should set its label", () => {
    const expected = "First Name Changed";

    standardControl.setLabel(expected);
    expect(standardControl.getLabel()).toBe(expected);
  });
});
