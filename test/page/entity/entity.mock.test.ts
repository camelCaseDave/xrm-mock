import { ItemCollectionMock } from "./../../../src/xrm-mock/collection/itemcollection/itemcollection.mock";
import { DataMock } from "./../../../src/xrm-mock/data/data.mock";
import { AttributeMock } from "./../../../src/xrm-mock/page/attribute/attribute.mock";
import { EntityMock } from "./../../../src/xrm-mock/page/entity/entity.mock";
import { PageMock } from "./../../../src/xrm-mock/page/page.mock";

describe("Xrm.Page.Entity Mock", () => {
    beforeEach(() => {
        this.id = "{0}";
        const attributes: AttributeMock[] = [];
        attributes.push(new AttributeMock({ name: "firstname", value: "Joe", isDirty: false, requiredLevel: "none" }));
        attributes.push(new AttributeMock({ name: "description", value: "" }));
        this.lastName = new AttributeMock({
            isDirty: false,
            name: "lastname",
            requiredLevel: "recommended",
            submitMode: "always",
            value: "Bloggs",
        });
        attributes.push(this.lastName);

        this.entityMock = new EntityMock(this.id, new ItemCollectionMock<AttributeMock>(attributes));
        this.xrmPageMock = new PageMock({
            data: new DataMock(this.entityMock),
        });
    });

    it("should exist", () => {
        expect(this.entityMock).toBeDefined();
    });

    it("should not be dirty", () => {
        expect(this.entityMock.getIsDirty()).toBe(false);
    });

    it("should be dirty when an attribute value changes", () => {
        expect(this.entityMock.getIsDirty()).toBe(false);
        this.lastName.setValue("Lasty");
        expect(this.lastName.getValue()).toBe("Lasty");
        expect(this.lastName.getIsDirty()).toBe(true);
        expect(this.entityMock.getIsDirty()).toBe(true);
    });

    it("should get an id of 0", () => {
        expect(this.entityMock.getId()).toBe(this.id);
    });
});
