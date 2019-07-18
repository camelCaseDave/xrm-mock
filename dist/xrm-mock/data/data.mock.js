"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DataMock = /** @class */ (function () {
    function DataMock(entity, process) {
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