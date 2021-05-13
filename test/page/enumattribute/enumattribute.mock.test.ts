import { ControlMock, EnumAttributeMock } from "../../../src/xrm-mock";

describe("Xrm.Attributes.EnumAttribute Mock", () => {
    let enumAttribute: EnumAttributeMock<ControlMock, boolean>;

    beforeEach(() => {
        enumAttribute = new EnumAttributeMock({
            isDirty: false,
            name: "new_havingFun",
            requiredLevel: "none",
            submitMode: "always",
            value: true,
        });
    });

    it("should instantiate", () => {
        expect(enumAttribute).toBeDefined();
    });

    it("should have an initial value of true", () => {
        expect(enumAttribute.getInitialValue()).toBe(true);
    });
});
