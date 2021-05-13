import { NumberAttributeMock } from "../../../src/xrm-mock";

describe("Xrm.Attributes.NumberAttribute", () => {
    let numberAttribute: NumberAttributeMock;

    beforeEach(() => {
        numberAttribute = new NumberAttributeMock({
            format: "none",
            isDirty: false,
            max: 50000,
            min: 0,
            name: "new_leadcount",
            requiredLevel: "none",
            submitMode: "dirty",
            value: 1500,
        });
    });

    it("should have an integer attribute format of none", () => {
        expect(numberAttribute.getFormat()).toBe("none");
    });

    it("should have a max 50000", () => {
        expect(numberAttribute.getMax()).toBe(50000);
    });

    it("should have a min of 0", () => {
        expect(numberAttribute.getMin()).toBe(0);
    });

    it("should have a precision of 0", () => {
        expect(numberAttribute.getPrecision()).toBe(0);
    });

    it("should have a value of 1500", () => {
        expect(numberAttribute.getValue()).toBe(1500);
    });

    it("should set its value to 1600", () => {
        expect(numberAttribute.getValue()).toBe(1500);

        numberAttribute.setValue(1600);
        expect(numberAttribute.getValue()).toBe(1600);
    });

    it("should be dirty after its value is set", () => {
        expect(numberAttribute.getIsDirty()).toBe(false);
        numberAttribute.setValue(10);
        expect(numberAttribute.getIsDirty()).toBe(true);
    });

    it("should throw when setting a value above its max", () => {
        expect(numberAttribute.getMax()).toBe(50000);
        expect(() => { numberAttribute.setValue(50001); }).toThrow();
    });

    it("should throw when setting a value below its min", () => {
        expect(numberAttribute.getMin()).toBe(0);
        expect(() => { numberAttribute.setValue(-1); }).toThrow();
    });

    it("should have an attribute type of number", () => {
        expect(numberAttribute.getAttributeType()).toBe("decimal");
    });

    it("should not be dirty", () => {
        expect(numberAttribute.getIsDirty()).toBe(false);
    });

    it("should have a name of new_leadcount", () => {
        expect(numberAttribute.getName()).toBe("new_leadcount");
    });

    it("should have a requirement level of none", () => {
        expect(numberAttribute.getRequiredLevel()).toBe("none");
    });

    it("should set its requirement level to required", () => {
        expect(numberAttribute.getRequiredLevel()).toBe("none");
        numberAttribute.setRequiredLevel("required");
        expect(numberAttribute.getRequiredLevel()).toBe("required");
    });

    it("should have a submit mode of dirty", () => {
        expect(numberAttribute.getSubmitMode()).toBe("dirty");
    });

    it("should validate precision", () => {
        expect(() => { const a = new NumberAttributeMock({name: "", precision: -1}); })
            .toThrowError("precision cannot be less than 0, but was -1");
        expect(() => { const a = new NumberAttributeMock({name: "", precision: 11}); })
            .toThrowError("precision cannot be greater than 10, but was 11");
    });
});
