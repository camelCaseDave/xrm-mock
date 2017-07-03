"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DataMock = (function () {
    function DataMock(entity, process) {
        this.entity = entity;
        this.process = process;
    }
    DataMock.prototype.refresh = function (save) {
        throw ('refresh not implemented');
    };
    DataMock.prototype.save = function (saveOptions) {
        throw ('save not implemented');
    };
    return DataMock;
}());
exports.DataMock = DataMock;
