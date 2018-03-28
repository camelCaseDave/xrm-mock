import { LookupValueMock} from "../../../src/xrm-mock/page/lookupvalue/lookupvalue.mock";

describe("Xrm.Page.LookupValue Mock", () => {
    beforeEach(() => {
        this.lookupValue = new LookupValueMock("5555", "account", "Parent Account");
    });

    it("should instantiate", () => {
        expect(this.lookupValue).toBeDefined();
    });

    it("should have an id of 5555", () => {
        expect(this.lookupValue.id).toBe("5555");
    });

    it("should have an entityType of account", () => {
        expect(this.lookupValue.entityType).toBe("account");
    });

    it("should have a name of Parent Account", () => {
        expect(this.lookupValue.name).toBe("Parent Account");
    });
});
