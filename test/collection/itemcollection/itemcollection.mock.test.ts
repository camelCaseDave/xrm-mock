/// <reference path="../../../node_modules/@types/jasmine/index.d.ts" />
/// <reference path="../../../node_modules/@types/xrm/index.d.ts" />

/// <reference path="../../../src/collection/itemcollection/itemcollection.mock.ts" />

describe('Xrm.Collection.ItemCollection Mock', function () {
    beforeEach(function () {
        let items = ['One', 'Two', 'Three'];
        this.itemCollectionMock = new ItemCollectionMock(items);
    });

    it('should initialise', function () {
        expect(this.itemCollectionMock).toBeDefined();
    });

    it('should get One at index 0', function () {  
        expect(this.itemCollectionMock.get(0)).toBe('One');
    });

    describe('getLength', function () {
        it('should return 3', function () {
            let length = this.itemCollectionMock.getLength();
            expect(length).toBe(3);
        });
    });  
});
