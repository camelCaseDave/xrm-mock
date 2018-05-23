import { AttributeMock } from "../../../src/xrm-mock/attributes/attribute/attribute.mock";
import { StandardControlMock } from "../../../src/xrm-mock/page/standardcontrol/standardcontrol.mock";

describe("Xrm.Page.StandardControl Mock", () => {
    beforeEach(() => {
      this.standardControl = new StandardControlMock({
        attribute: new AttributeMock({
          name: "firstname",
          value: "Joe",
        }),
        disabled: false,
        name: "firstname",
      });
    });

    it("should exist", () => {
        expect(this.standardControl).toBeDefined();
    });

    it("should not be disabled", () => {
      expect(this.standardControl.getDisabled()).toBe(false);
    });

    it("should set itself to disabled", () => {
      this.standardControl.setDisabled(true);
      expect(this.standardControl.getDisabled()).toBe(true);
    });

    it("should set its label", () => {
      const expected = "First Name Changed";

      this.standardControl.setLabel(expected);
      expect(this.standardControl.getLabel()).toBe(expected);
    });
});
