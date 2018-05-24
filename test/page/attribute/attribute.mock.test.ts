import { AttributeMock } from "../../../src/xrm-mock/attributes/attribute/attribute.mock";

describe("Xrm.Attributes.Attribute Mock", () => {
    beforeEach(() => {
        this.attributeMock = new AttributeMock({
            isDirty: false,
            name: "firstname",
            requiredLevel: "none",
            submitMode: "dirty",
            value: "Joe",
        });
    });

    it("should exist", () => {
        expect(this.attributeMock).toBeDefined();
    });

    it("has a string attribute type", () => {
        const attributeType = this.attributeMock.getAttributeType();
        expect(attributeType).toBe("string");
    });

    it("is not dirty", () => {
        const isDirty = this.attributeMock.getIsDirty();
        expect(isDirty).toBe(false);
    });

    it("should have the name firstname", () => {
        const name = this.attributeMock.getName();
        expect(name).toBe("firstname");
    });

    it("should not be required", () => {
        const required = this.attributeMock.getRequiredLevel();
        expect(required).toBe("none");
    });

    it("should have a submit mode of dirty", () => {
        const submitMode = this.attributeMock.getSubmitMode();
        expect(submitMode).toBe("dirty");
    });

    it("should set required level to mandatory", () => {
        let required = this.attributeMock.getRequiredLevel();
        expect(required).toBe("none");

        this.attributeMock.setRequiredLevel("required");
        required = this.attributeMock.getRequiredLevel();
        expect(required).toBe("required");
    });

    it("should set submit mode to always", () => {
        let submitMode = this.attributeMock.getSubmitMode();
        expect(submitMode).toBe("dirty");

        this.attributeMock.setSubmitMode("always");
        submitMode = this.attributeMock.getSubmitMode();
        expect(submitMode).toBe("always");
    });

    it("should have a value of Joe", () => {
        const value = this.attributeMock.getValue();
        expect(value).toBe("Joe");
    });

    it("should set value to Alan", () => {
        let value = this.attributeMock.getValue();
        expect(value).toBe("Joe");

        this.attributeMock.setValue("Alan");
        value = this.attributeMock.getValue();
        expect(value).toBe("Alan");

        expect(this.attributeMock.getIsDirty()).toBe(true);
    });
});
