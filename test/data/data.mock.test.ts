import { ItemCollectionMock } from "../../src/xrm-mock/collection/itemcollection/itemcollection.mock";
import { DataMock } from "../../src/xrm-mock/data/data.mock";
import { AttributeMock } from "../../src/xrm-mock/page/attribute/attribute.mock";
import { EntityMock } from "../../src/xrm-mock/page/entity/entity.mock";

describe("Xrm.Data Mock", () => {
    beforeEach(() => {
        const attributes: AttributeMock[] = [];
        attributes.push(new AttributeMock({ name: "firstname", value: "Joe", isDirty: false, requiredLevel: "none" }));
        attributes.push(new AttributeMock({ name: "description", value: "" }));

        this.entityMock = new EntityMock(this.id, new ItemCollectionMock<AttributeMock>(attributes));
        this.dataMock = new DataMock(this.entityMock);
    });

    it("should initialise", () => {
        expect(this.dataMock).toBeDefined();
    });
});
