"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var itemcollection_mock_1 = require("../collection/itemcollection/itemcollection.mock");
var DataMock = /** @class */ (function () {
    function DataMock(entity, process) {
        this.attributes = new itemcollection_mock_1.ItemCollectionMock();
        this.entity = entity;
        this.process = process;
    }
    DataMock.prototype.refresh = function (save) {
        throw new Error(("refresh not implemented"));
    };
    DataMock.prototype.save = function (saveOptions) {
        throw new Error(("save not implemented"));
    };
    return DataMock;
}());
exports.DataMock = DataMock;
//# sourceMappingURL=data.mock.js.map