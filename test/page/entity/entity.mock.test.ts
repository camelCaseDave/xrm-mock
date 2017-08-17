import { ItemCollectionMock } from './../../../src/collection/itemcollection/itemcollection.mock';
import { DataMock } from './../../../src/data/data.mock';
import { PageMock } from './../../../src/page/page.mock';
import { AttributeMock } from './../../../src/page/attribute/attribute.mock';
import { EntityMock } from './../../../src/page/entity/entity.mock';

describe('Xrm.Page.Entity Mock', () => {
    beforeEach(() => {
        this.id = "{0}";
        let attributes: AttributeMock[] = [];
        attributes.push(new AttributeMock({ name: 'firstname', value: 'Joe', isDirty: false, requiredLevel: 'none' }));
        attributes.push(new AttributeMock({ name: 'description', value: '' }));
        this.lastName = new AttributeMock({ name: 'lastname', value: 'Bloggs', isDirty: false, requiredLevel: 'recommended', submitMode: 'always' });
        attributes.push(this.lastName);

        this.entityMock = new EntityMock(this.id, new ItemCollectionMock<AttributeMock>(attributes));
        this.xrmPageMock = new PageMock({
            data: new DataMock(this.entityMock)
        });
    });

    it('should exist', () => {
        expect(this.entityMock).toBeDefined();
    });

    it('should not be dirty', () => {
        expect(this.entityMock.getIsDirty()).toBe(false);
    });

    it('should be dirty when an attribute value changes', () => {
        expect(this.entityMock.getIsDirty()).toBe(false);
        this.lastName.setValue('Lasty');
        expect(this.lastName.getValue()).toBe('Lasty');
        expect(this.lastName.getIsDirty()).toBe(true);
        expect(this.entityMock.getIsDirty()).toBe(true);
    });

    it('should get an id of 0', () => {
        expect(this.entityMock.getId()).toBe(this.id);
    });
});

