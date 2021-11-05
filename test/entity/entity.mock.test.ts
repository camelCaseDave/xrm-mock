import { EntityMock } from "../../src/xrm-mock/index";

describe("Xrm.Entity Mock", () => {
    let entity: EntityMock;

    beforeEach(() => {
        entity = new EntityMock();
    });

    it("should exist", () => {
        expect(entity).toBeDefined();
    });

    it("should return a default id", () => {
        const id = entity.getId();
        expect(id).toContain("{");
    });

    it("should return a defaulted LookupValue from getEntityReference", () => {
        const entityReference = entity.getEntityReference();
        expect(entityReference.entityType).toBe("contact");
    });

    it('should allow additional save modes', () => {
        let saveMode: number;
        entity.addOnSave((context: Xrm.Events.SaveEventContext) => {
            saveMode = context.getEventArgs().getSaveMode();
        });

        const qualify = 16;
        entity.save(qualify as any);
        expect(saveMode).toBe(16);
    })
});
