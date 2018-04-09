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
            return this.itemCollection || null;
        }
        else if (typeof param === "string") {
            var attribute = void 0;
            for (var _i = 0, _a = this.itemCollection; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.getName !== undefined) {
                    if (item.getName() === param) {
                        attribute = item;
                        break;
                    }
                }
            }
            return attribute || null;
        }
        else if (typeof param === "number") {
            return this.itemCollection[param] || null;
        }
        else if (param !== undefined) {
            throw new Error("get itemcollection as delegate not implemented");
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
//# sourceMappingURL=itemcollection.mock.js.map