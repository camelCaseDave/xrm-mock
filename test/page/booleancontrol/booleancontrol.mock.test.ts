import {
    BooleanAttributeMock,
    IBooleanAttributeComponents
} from "../../../src/xrm-mock/attributes/booleanattribute/booleanattribute.mock";

describe("Xrm.Attributes.BooleanAttribute Mock", () => {
    const attribute: IBooleanAttributeComponents = {
        isDirty: false,
        name: "isapproved",
        submitMode: "dirty",
        value: true,
    };
    let booleanAttribute: BooleanAttributeMock;

    beforeEach(() => {
        booleanAttribute = new BooleanAttributeMock(attribute);
    });

    it("should instantiate", () => {
        expect(booleanAttribute).toBeDefined();
    });

    it("should have a value of true", () => {
        expect(booleanAttribute.getValue()).toBe(true);
    });

    it("should set its value to Fred", () => {
        expect(booleanAttribute.getValue()).toBe(true);
        booleanAttribute.setValue(false);
        expect(booleanAttribute.getValue()).toBe(false);
    });
});
