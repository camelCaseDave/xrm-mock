import { OptionSetAttributeMock, OptionSetValueMock } from "../../../src/xrm-mock";

describe("Xrm.Attributes.OptionSetAttribute Mock", () => {
    let optionSetAttribute: OptionSetAttributeMock;

    beforeEach(() => {
        optionSetAttribute = new OptionSetAttributeMock({
            isDirty: false,
            name: "new_leadSources",
            options: [
                new OptionSetValueMock("Phone Call", 100000),
                new OptionSetValueMock("In Person", 100001),
                new OptionSetValueMock("Email", 100002),
            ],
            requiredLevel: "recommended",
            submitMode: "dirty",
            value: 100000,
        });
    });

    it("should instantiate", () => {
        expect(optionSetAttribute).toBeDefined();
        expect(OptionSetAttributeMock.create("test").name).toBe("test");
    });

    it("should have a language format", () => {
        expect(optionSetAttribute.getFormat()).toBe("language");
    });

    it("should have an initial value of 100000", () => {
        expect(optionSetAttribute.getInitialValue()).toBe(100000);
    });

    it("should return Email when given 100002", () => {
        const email = new OptionSetValueMock("Email", 100002);
        expect(optionSetAttribute.getOption(100002)).toEqual(email);
    });

    it("should return Email when given Email", () => {
        const email = new OptionSetValueMock("Email", 100002);
        expect(optionSetAttribute.getOption("Email")).toEqual(email);
    });

    it("should have 3 options", () => {
        const options = optionSetAttribute.getOptions();
        expect(options.length).toBe(3);
    });

    it("should have the Phone Call option selected", () => {
        const phoneCall = new OptionSetValueMock("Phone Call", 100000);
        expect(optionSetAttribute.getSelectedOption()).toEqual(phoneCall);
    });

    it("should have a text of Phone Call", () => {
        expect(optionSetAttribute.getText()).toBe("Phone Call");
    });

    it("should change selected value to Email when its value is set to Email", () => {
        const email = new OptionSetValueMock("Email", 100002);
        optionSetAttribute.setValue(email.value);
        expect(optionSetAttribute.getValue()).toBe(email.value);
        expect(optionSetAttribute.getSelectedOption()).toEqual(email);
    });
});
