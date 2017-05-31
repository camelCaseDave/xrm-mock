/// <reference path="../../node_modules/@types/xrm/index.d.ts" />
/// <reference path="../../node_modules/@types/jasmine/index.d.ts" />

/// <reference path="../../src/data/data.mock.ts" />
/// <reference path="../../src/page/attribute/attribute.mock.ts" />
/// <reference path="../../src/page/page.mock.ts" />
/// <reference path="../../src/xrmstatic.mock.ts" />
/// <reference path="../../src/page/entity/entity.mock.ts" />
/// <reference path="../../src/collection/itemcollection/itemcollection.mock.ts" />

describe('Xrm.Page Mock', function () {
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

    it('should initialise', () => {
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
    });
})
