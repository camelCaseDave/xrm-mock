import { LookupAttributeMock, LookupValueMock } from "../../../src/xrm-mock";

describe("Xrm.Attributes.LookupAttribute Mock", () => {
    let lookupAttribute: LookupAttributeMock;

    beforeEach(() => {
        lookupAttribute = new LookupAttributeMock({
            name: "parentorganisationid",
            value: [new LookupValueMock("5555", "account", "Boss")],
        });
    });

    it("should instantiate", () => {
        expect(lookupAttribute).toBeDefined();
    });

    it("should be a lookupType", () => {
        expect(lookupAttribute.getAttributeType()).toBe("lookup");
    });

    it("should not be a party list", () => {
        expect(lookupAttribute.getIsPartyList()).toBe(false);
    });

    it("should accept being a party list", () => {
        const att = new LookupAttributeMock({
            isPartyList: true,
            name: "parentorganisationid",
            value: [new LookupValueMock("5555", "account", "Boss")],
        });

        expect(att.getIsPartyList()).toBe(true);
    });
});
