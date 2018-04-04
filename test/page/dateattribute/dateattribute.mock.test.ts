import { AttributeMock } from "../../../src/xrm-mock/page/attribute/attribute.mock";
import { DateAttributeMock } from "../../../src/xrm-mock/page/dateattribute/dateattribute.mock";

describe("Xrm.Page.DateAttribute Mock", () => {
    beforeEach(() => {
        this.dateAttribute = new DateAttributeMock({
            attribute: new AttributeMock({
                format: "date",
                isDirty: false,
                name: "birthdate",
                value: new Date("January 1, 1990"),
            }),
            dateAttributeFormat: "date",
        });
    });

    it("should instantiate", () => {
        expect(this.dateAttribute).toBeDefined();
    });

    it("should have a date format", () => {
        expect(this.dateAttribute.getFormat()).toBe("date");
    });

    it("should have a value of January 1, 1990", () => {
        expect(this.dateAttribute.getValue()).toEqual(new Date("January 1, 1990"));
    });
});
