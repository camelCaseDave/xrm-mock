import { LookupValueMock } from "../../../src/xrm-mock/lookupvalue/lookupvalue.mock";

describe("Xrm.LookupValue Mock", () => {
    let lookupValue: LookupValueMock;

    beforeEach(() => {
        lookupValue = new LookupValueMock("5555", "account", "Parent Account");
    });

    it("should instantiate", () => {
        expect(lookupValue).toBeDefined();
    });

    it("should have an id of 5555", () => {
        expect(lookupValue.id).toBe("5555");
    });

    it("should have an entityType of account", () => {
        expect(lookupValue.entityType).toBe("account");
    });

    it("should have a name of Parent Account", () => {
        expect(lookupValue.name).toBe("Parent Account");
    });
});
