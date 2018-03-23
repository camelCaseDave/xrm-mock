"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ItemCollectionMock = /** @class */ (function () {
    function ItemCollectionMock(itemCollection) {
        this.itemCollection = itemCollection || [];
    }
    ItemCollectionMock.prototype.forEach = function (delegate) {
        var modifiedCollection = this.itemCollection.map(delegate);
        this.itemCollection = modifiedCollection;
    };
    ItemCollectionMock.prototype.get = function (param) {
        if (param === undefined || param === null) {
            return this.itemCollection;
        }
        else if (typeof param === 'string') {
            var attribute;
            for (var i in this.itemCollection) {
                var item = this.itemCollection[i];
                if (item.getName !== undefined) {
                    if (item.getName() === param) {
                        attribute = item;
                        break;
                    }
                }
            }
            return attribute;
        }
        else if (typeof param === 'number') {
            return this.itemCollection[param];
        }
        else if (param !== undefined) {
            throw ('get itemcollection as delegate not implemented');
        }
    };
    ItemCollectionMock.prototype.getLength = function () {
        return this.itemCollection.length;
    };
    ItemCollectionMock.prototype.push = function (item) {
        this.itemCollection.push(item);
    };
    return ItemCollectionMock;
}());
exports.ItemCollectionMock = ItemCollectionMock;
