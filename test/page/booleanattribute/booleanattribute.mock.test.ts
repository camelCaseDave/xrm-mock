import { AttributeMock } from "../../../src/xrm-mock/attributes/attribute/attribute.mock";
import { BooleanAttributeMock } from "../../../src/xrm-mock/attributes/booleanattribute/booleanattribute.mock";
import { EnumAttributeMock } from "../../../src/xrm-mock/attributes/enumattribute/enumattribute.mock";

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
