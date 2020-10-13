"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataMock = void 0;
var itemcollection_mock_1 = require("../collection/itemcollection/itemcollection.mock");
var DataMock = /** @class */ (function () {
    function DataMock(entity, process) {
        this.attributes = new itemcollection_mock_1.ItemCollectionMock();
        this.entity = entity;
        this.process = process;
        this.loadEventHandlers = [];
    }
    DataMock.prototype.refresh = function (save) {
        throw new Error(("refresh not implemented"));
    };
    DataMock.prototype.save = function (saveOptions) {
        throw new Error(("save not implemented"));
    };
    DataMock.prototype.isValid = function () {
        throw new Error(("isValid not implemented"));
    };
    DataMock.prototype.getIsDirty = function () {
        throw new Error(("getIsDirty not implemented"));
    };
    DataMock.prototype.addOnLoad = function (handler) {
        this.loadEventHandlers.push(handler);
    };
    DataMock.prototype.removeOnLoad = function (handler) {
        var index = this.loadEventHandlers.indexOf(handler);
        this.loadEventHandlers.splice(index);
    };
    return DataMock;
}());
exports.DataMock = DataMock;
//# sourceMappingURL=data.mock.js.map