import { DateAttributeMock } from "../../../src/xrm-mock";

describe("Xrm.Attributes.DateAttribute Mock", () => {
    let dateAttribute: DateAttributeMock;
    beforeEach(() => {
        dateAttribute = new DateAttributeMock({
            format: "date",
            isDirty: false,
            name: "birthdate",
            value: new Date("January 1, 1990"),
        });
    });

    it("should instantiate", () => {
        expect(dateAttribute).toBeDefined();
    });

    it("should default format to date", () => {
        expect(DateAttributeMock.create("empty").getFormat()).toBe("date");
    });

    it("should have a date format", () => {
        expect(dateAttribute.getFormat()).toBe("date");
    });

    it("should have a value of January 1, 1990", () => {
        expect(dateAttribute.getValue()).toEqual(new Date("January 1, 1990"));
    });
});
