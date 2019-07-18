import { AttributeMock } from "../../src/xrm-mock/attributes/attribute/attribute.mock";
import { ItemCollectionMock } from "../../src/xrm-mock/collection/itemcollection/itemcollection.mock";
import { DataMock } from "../../src/xrm-mock/data/data.mock";
import { EntityMock } from "../../src/xrm-mock/entity/entity.mock";

describe("Xrm.Data Mock", () => {
    beforeEach(() => {
        const attributes = [];
        attributes.push(new AttributeMock({ name: "firstname", value: "Joe", isDirty: false, requiredLevel: "none" }));
        attributes.push(new AttributeMock({ name: "description", value: "" }));

        this.entityMock = new EntityMock({
            attributes: new ItemCollectionMock(attributes),
            id: this.id,
        });
        this.dataMock = new DataMock(this.entityMock);
    });

    it("should initialise", () => {
        expect(this.dataMock).toBeDefined();
    });
});
