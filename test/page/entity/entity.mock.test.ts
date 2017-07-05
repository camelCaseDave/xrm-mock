import { ItemCollectionMock } from './../../../src/collection/itemcollection/itemcollection.mock';
import { DataMock } from './../../../src/data/data.mock';
import { PageMock } from './../../../src/page/page.mock';
import { AttributeMock } from './../../../src/page/attribute/attribute.mock';
import { EntityMock } from './../../../src/page/entity/entity.mock';

describe('Xrm.Page.Entity Mock', () => {
    beforeEach(() => {
        let attributes: AttributeMock[] = [];
        attributes.push(new AttributeMock('firstname', 'Joe', false, 'none'));
        attributes.push(new AttributeMock('description', ''));
        this.lastName = new AttributeMock('lastname', 'Bloggs', false, 'recommended', 'always');
        attributes.push(this.lastName);

        this.entityMock = new EntityMock(new ItemCollectionMock<AttributeMock>(attributes));
        this.xrmPageMock = new PageMock(
            new DataMock(this.entityMock));
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
});

