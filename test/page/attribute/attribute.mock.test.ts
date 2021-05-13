import { AttributeMock, ControlMock } from "../../../src/xrm-mock";

describe("Xrm.Attributes.Attribute Mock", () => {
    let attributeMock: AttributeMock<ControlMock, string>;

    beforeEach(() => {
        attributeMock = new AttributeMock({
            isDirty: false,
            name: "firstname",
            requiredLevel: "none",
            submitMode: "dirty",
            value: "Joe",
        });
    });

    it("should exist", () => {
        expect(attributeMock).toBeDefined();
    });

    it("has a string attribute type", () => {
        const attributeType = attributeMock.getAttributeType();
        expect(attributeType).toBe("string");
    });

    it("is not dirty", () => {
        const isDirty = attributeMock.getIsDirty();
        expect(isDirty).toBe(false);
    });

    it("should have the name firstname", () => {
        const name = attributeMock.getName();
        expect(name).toBe("firstname");
    });

    it("should not be required", () => {
        const required = attributeMock.getRequiredLevel();
        expect(required).toBe("none");
    });

    it("should have a submit mode of dirty", () => {
        const submitMode = attributeMock.getSubmitMode();
        expect(submitMode).toBe("dirty");
    });

    it("should set required level to mandatory", () => {
        let required = attributeMock.getRequiredLevel();
        expect(required).toBe("none");

        attributeMock.setRequiredLevel("required");
        required = attributeMock.getRequiredLevel();
        expect(required).toBe("required");
    });

    it("should set submit mode to always", () => {
        let submitMode = attributeMock.getSubmitMode();
        expect(submitMode).toBe("dirty");

        attributeMock.setSubmitMode("always");
        submitMode = attributeMock.getSubmitMode();
        expect(submitMode).toBe("always");
    });

    it("should have a value of Joe", () => {
        const value = attributeMock.getValue();
        expect(value).toBe("Joe");
    });

    it("should set value to Alan", () => {
        let value = attributeMock.getValue();
        expect(value).toBe("Joe");

        attributeMock.setValue("Alan");
        value = attributeMock.getValue();
        expect(value).toBe("Alan");

        expect(attributeMock.getIsDirty()).toBe(true);
    });
});
