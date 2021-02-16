import { OptionSetValueMock } from "../../../src/xrm-mock/optionsetvalue/optionsetvalue.mock";

describe("Xrm.OptionSetValue Mock", () => {
    let optionSetValue: OptionSetValueMock;

    beforeEach(() => {
        optionSetValue = new OptionSetValueMock("statecode", 0);
    });

    it("should instantiate", () => {
        expect(optionSetValue).toBeDefined();
    });

    it("should have a text property of statecode", () => {
        expect(optionSetValue.text).toBe("statecode");
    });

    it("should have a value property of 0", () => {
        expect(optionSetValue.value).toBe(0);
    });
});
