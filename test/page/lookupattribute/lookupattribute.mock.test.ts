import { AttributeMock } from "../../../src/xrm-mock/page/attribute/attribute.mock";
import { LookupAttributeMock} from "../../../src/xrm-mock/page/lookupattribute/lookupattribute.mock";
import { LookupValueMock } from "../../../src/xrm-mock/page/lookupvalue/lookupvalue.mock";

describe("Xrm.Page.LookupAttribute Mock", () => {
    beforeEach(() => {
        this.lookupAttribute = new LookupAttributeMock({
            name: "parentorganisationid",
            value: [new LookupValueMock("5555", "account", "Boss")],
        });
    });

    it("should instantiate", () => {
        expect(this.lookupAttribute).toBeDefined();
    });

    it("should not be a party list", () => {
        expect(this.lookupAttribute.getIsPartyList()).toBe(false);
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
