import { AttributeMock, StandardControlMock } from "../../../src/xrm-mock";

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
