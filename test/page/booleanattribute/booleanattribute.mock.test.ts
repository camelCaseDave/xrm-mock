import { AttributeMock, BooleanAttributeMock, EnumAttributeMock } from "../../../src/xrm-mock";

describe("Xrm.Attributes.BooleanAttribute Mock", () => {
    let booleanAttribute: BooleanAttributeMock;

    beforeEach(() => {
        booleanAttribute = new BooleanAttributeMock(new EnumAttributeMock(new AttributeMock({
            isDirty: false,
            name: "new_isHavingFun",
            value: true,
        })));
    });

    it("should instantiate", () => {
        expect(booleanAttribute).toBeDefined();
        expect(BooleanAttributeMock.create("empty").getName()).toBe("empty");
    });

    it("should have an initial value of true", () => {
        expect(booleanAttribute.getInitialValue()).toBe(true);
    });
});
