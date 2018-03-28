import { AttributeMock } from "../../../src/xrm-mock/page/attribute/attribute.mock";
import { EnumAttributeMock } from "../../../src/xrm-mock/page/enumattribute/enumattribute.mock";

describe("Xrm.Page.EnumAttribute Mock", () => {
    beforeEach(() => {
        const attribute = new AttributeMock({
            isDirty: false,
            name: "new_havingFun",
            requiredLevel: "none",
            submitMode: "always",
            value: true,
        });
        this.enumAttribute = new EnumAttributeMock(attribute);
    });

    it("should instantiate", () => {
        expect(this.enumAttribute).toBeDefined();
    });

    it("should have an attribute", () => {
        expect(this.enumAttribute.attribute).toBeDefined();
    });

    it("should have an initial value of true", () => {
        expect(this.enumAttribute.getInitialValue()).toBe(true);
    });
});
