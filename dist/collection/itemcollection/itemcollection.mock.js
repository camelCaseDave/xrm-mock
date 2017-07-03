"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ItemCollectionMock = (function () {
    function ItemCollectionMock(itemCollection) {
        this.itemCollection = itemCollection || [];
    }
    ItemCollectionMock.prototype.forEach = function (delegate) {
        this.itemCollection.forEach(function (i) { return function (i) {
            if (delegate !== undefined)
                delegate(i);
            else
                delegate(i);
        }; });
    };
    ItemCollectionMock.prototype.get = function (param) {
        if (param === undefined || param === null) {
            return this.itemCollection;
        }
        else if (param && typeof param === 'string') {
            var attrs = this.itemCollection.filter(function (item) {
                return (item.getName() === param);
            });
            return attrs[0] || undefined;
        }
        else if (typeof param === 'number') {
            return this.itemCollection[param];
        }
        else if (param && param !== undefined) {
            throw ('get itemcollection as delegate not implemented');
        }
    };
    ItemCollectionMock.prototype.getLength = function () {
        return this.itemCollection.length;
    };
    return ItemCollectionMock;
}());
exports.ItemCollectionMock = ItemCollectionMock;
