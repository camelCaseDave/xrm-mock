/// <reference path="../../../node_modules/@types/jasmine/index.d.ts" />
/// <reference path="../../../node_modules/@types/xrm/index.d.ts" />

/// <reference path="../../../src/collection/itemcollection/itemcollection.mock.ts" />

describe('Xrm.Collection.ItemCollection Mock', () => {
    beforeEach(() => {
        let items = ['One', 'Two', 'Three'];
        this.itemCollectionMock = new ItemCollectionMock(items);
    });

    it('should initialise', () => {
        expect(this.itemCollectionMock).toBeDefined();
    });

    it('should return One at index 0', () => {
        expect(this.itemCollectionMock.get(0)).toBe('One');
    });

    describe('getLength', () => {
        it('should return 3', () => {
            let length = this.itemCollectionMock.getLength();
            expect(length).toBe(3);
        });
    });
});
