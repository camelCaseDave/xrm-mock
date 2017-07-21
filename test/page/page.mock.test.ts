/// <reference path="../../node_modules/@types/xrm/index.d.ts" />
/// <reference path="../../node_modules/@types/jasmine/index.d.ts" />

import { XrmStaticMock } from '../../src/xrmstatic.mock';
import { EntityMock } from '../../src/page/entity/entity.mock';
import { DataMock } from '../../src/data/data.mock';
import { AttributeMock } from '../../src/page/attribute/attribute.mock';
import { ItemCollectionMock} from '../../src/collection/itemcollection/itemcollection.mock';
import { PageMock } from '../../src/page/page.mock';

describe('Xrm.Page Mock', () => {
    beforeEach(() => {
        let attributes: AttributeMock[] = [];
        attributes.push(new AttributeMock('firstname', 'Joe', false, 'none'));
        attributes.push(new AttributeMock('description', ''));
        this.lastName = new AttributeMock('lastname', 'Bloggs', true, 'recommended', 'always');
        attributes.push(this.lastName);
        
        this.xrmPageMock = new PageMock(
            new DataMock(
                new EntityMock(
                    new ItemCollectionMock<AttributeMock>(attributes))));
    });

    it('should instantiate', () => {
        expect(this.xrmPageMock).toBeDefined();
    });

    describe('getAttribute', () => {
        it('should be defined', () => {
            expect(this.xrmPageMock).toBeDefined();
        });

        it('by string should return Bloggs for lastname', () => {
            expect(this.xrmPageMock.getAttribute('lastname')).toBe(this.lastName);       
        });

        it('by index should return Bloggs for 2', () => {
            expect(this.xrmPageMock.getAttribute(2)).toBe(this.lastName);
        });

        it('should get attribute and value in one line', () => {
            expect(this.xrmPageMock.getAttribute('firstname').getValue()).toBe('Joe');
        });
    });
})
