"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MobileOfflineMock = (function () {
    function MobileOfflineMock() {
    }
    MobileOfflineMock.prototype.isOfflineEnabled = function (entityType) {
        throw ('not implemented');
    };
    MobileOfflineMock.prototype.createRecord = function (entityType, data) {
        throw ('not implemented');
    };
    MobileOfflineMock.prototype.retrieveRecord = function (entityType, id, options) {
        throw ('not implemented');
    };
    MobileOfflineMock.prototype.retrieveMultipleRecords = function (entityType, options, maxPageSize) {
        throw ('not implemented');
    };
    MobileOfflineMock.prototype.updateRecord = function (entityType, id, data) {
        throw ('not implemented');
    };
    MobileOfflineMock.prototype.deleteRecord = function (entityType, id) {
        throw ('not implemented');
    };
    return MobileOfflineMock;
}());
exports.MobileOfflineMock = MobileOfflineMock;
