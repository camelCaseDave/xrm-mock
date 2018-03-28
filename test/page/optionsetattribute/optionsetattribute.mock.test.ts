import { AttributeMock } from "../../../src/xrm-mock/page/attribute/attribute.mock";
import { EnumAttributeMock } from "../../../src/xrm-mock/page/enumattribute/enumattribute.mock";
import { OptionSetAttributeMock } from "../../../src/xrm-mock/page/optionsetattribute/optionsetattribute.mock";
import { OptionSetValueMock } from "../../../src/xrm-mock/page/optionsetvalue/optionsetvalue.mock";

describe("Xrm.Page.OptionSetAttribute Mock", () => {
    beforeEach(() => {
        const enumAttribute = new EnumAttributeMock(new AttributeMock({
            isDirty: false,
            name: "new_leadSources",
            requiredLevel: "recommended",
            submitMode: "dirty",
            value: 100000,
        }));
        const options: OptionSetValueMock[] = [
            new OptionSetValueMock("Phone Call", 100000),
            new OptionSetValueMock("In Person", 100001),
            new OptionSetValueMock("Email", 100002),
        ];
        this.optionSetAttribute = new OptionSetAttributeMock(enumAttribute, options, "language");
    });

    it("should instantiate", () => {
        expect(this.optionSetAttribute).toBeDefined();
    });

    it("should have a language format", () => {
        expect(this.optionSetAttribute.getFormat()).toBe("language");
    });

    it("should have an initial value of 100000", () => {
        expect(this.optionSetAttribute.getInitialValue()).toBe(100000);
    });

    it("should return Email when given 100002", () => {
        const email = new OptionSetValueMock("Email", 100002);
        expect(this.optionSetAttribute.getOption(100002)).toEqual(email);
    });

    it("should return Email when given Email", () => {
        const email = new OptionSetValueMock("Email", 100002);
        expect(this.optionSetAttribute.getOption("Email")).toEqual(email);
    });

    it("should have 3 options", () => {
        const options = this.optionSetAttribute.getOptions();
        expect(options.length).toBe(3);
    });

    it("should have the Phone Call option selected", () => {
        const phoneCall = new OptionSetValueMock("Phone Call", 100000);
        expect(this.optionSetAttribute.getSelectedOption()).toEqual(phoneCall);
    });

    it("should have a text of Phone Call", () => {
        expect(this.optionSetAttribute.getText()).toBe("Phone Call");
    });

    it("should change selected value to Email when its value is set to Email", () => {
        const email = new OptionSetValueMock("Email", 100002);
        this.optionSetAttribute.setValue(email.value);
        expect(this.optionSetAttribute.getValue()).toBe(email.value);
        expect(this.optionSetAttribute.getSelectedOption()).toEqual(email);
    });
});
