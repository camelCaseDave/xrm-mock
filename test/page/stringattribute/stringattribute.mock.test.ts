import {
    IStringAttributeComponents,
    StringAttributeMock
} from "../../../src/xrm-mock";

describe("Xrm.Attributes.StringAttribute Mock", () => {
    const attribute: IStringAttributeComponents = {
        isDirty: false,
        maxLength: 20,
        name: "firstname",
        submitMode: "dirty",
        value: "Joe",
    };
    let stringAttribute: StringAttributeMock;

    beforeEach(() => {
        stringAttribute = new StringAttributeMock(attribute);
    });

    it("should instantiate", () => {
        expect(stringAttribute).toBeDefined();
    });

    it("should have a text format", () => {
        expect(stringAttribute.getFormat()).toBe("text");
    });

    it("should have a max length of 20", () => {
        expect(stringAttribute.getMaxLength()).toBe(20);
    });

    it("should have a value of Joe", () => {
        expect(stringAttribute.getValue()).toBe("Joe");
    });

    it("should set its value to Fred", () => {
        expect(stringAttribute.getValue()).toBe("Joe");
        stringAttribute.setValue("Fred");
        expect(stringAttribute.getValue()).toBe("Fred");
    });

    it("should not set its value above its max length", () => {
        expect(stringAttribute.getMaxLength()).toBe(20);
        const tooBig = "abcdefghijklmnopqrstuvwxyz";
        expect(() => { stringAttribute.setValue(tooBig); }).toThrow();
    });
});
