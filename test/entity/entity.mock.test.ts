import { EntityMock } from "../../src/xrm-mock/index";

describe("Xrm.Entity Mock", () => {
    beforeEach(() => {
        this.entity = new EntityMock();
    });

    it("should exist", () => {
        expect(this.entity).toBeDefined();
    });

    it("should return a default id", () => {
        const id = this.entity.getId();
        expect(id).toContain("{");
    });

    it("should return a defaulted LookupValue from getEntityReference", () => {
        const entityReference = this.entity.getEntityReference();
        expect(entityReference.entityType).toBe("contact");
    });
});
