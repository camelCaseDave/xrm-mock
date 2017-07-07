import { ItemCollectionMock } from './../../../src/collection/itemcollection/itemcollection.mock';

describe('Xrm.Collection.ItemCollection Mock', () => {
    beforeEach(() => {
        let items = [1,2,3];
        this.itemCollectionMock = new ItemCollectionMock(items);
    });

    it('should exist', () => {
        expect(this.itemCollectionMock).toBeDefined();
    });

    it('should return 1 at index 0', () => {
        expect(this.itemCollectionMock.get(0)).toBe(1);
    });

    it('should iterate and double every element', () => {       
        expect(this.itemCollectionMock.get(0)).toBe(1);
        expect(this.itemCollectionMock.get(1)).toBe(2);
        expect(this.itemCollectionMock.get(2)).toBe(3);
        
        this.itemCollectionMock.forEach((i: any) => {
            return i * 2;
        });
        expect(this.itemCollectionMock.get(0)).toBe(2);
        expect(this.itemCollectionMock.get(1)).toBe(4);
        expect(this.itemCollectionMock.get(2)).toBe(6);
    });

    describe('getLength', () => {
        it('should return 3', () => {
            let length = this.itemCollectionMock.getLength();
            expect(length).toBe(3);
        });
    });
});
