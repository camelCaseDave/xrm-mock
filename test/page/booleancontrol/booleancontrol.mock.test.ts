import { BooleanAttributeMock,
         IBooleanAttributeComponents } from "../../../src/xrm-mock/attributes/booleanattribute/booleanattribute.mock";

describe("Xrm.Attributes.BooleanAttribute Mock", () => {
    beforeEach(() => {
        const attribute: IBooleanAttributeComponents = {
            isDirty: false,
            name: "isapproved",
            submitMode: "dirty",
            value: true,
        };
        this.booleanAttribute = new BooleanAttributeMock(attribute);
    });

    it("should instantiate", () => {
        expect(this.booleanAttribute).toBeDefined();
    });

    it("should have a value of true", () => {
        expect(this.booleanAttribute.getValue()).toBe(true);
    });

    it("should set its value to Fred", () => {
        expect(this.booleanAttribute.getValue()).toBe(true);
        this.booleanAttribute.setValue(false);
        expect(this.booleanAttribute.getValue()).toBe(false);
    });
});
