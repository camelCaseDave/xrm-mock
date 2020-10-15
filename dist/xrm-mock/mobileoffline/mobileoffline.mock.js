"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileOfflineMock = void 0;
var MobileOfflineMock = /** @class */ (function () {
    function MobileOfflineMock() {
    }
    MobileOfflineMock.prototype.isOfflineEnabled = function (entityType) {
        throw new Error(("not implemented"));
    };
    MobileOfflineMock.prototype.createRecord = function (entityType, data) {
        throw new Error(("not implemented"));
    };
    MobileOfflineMock.prototype.retrieveRecord = function (entityType, id, options) {
        throw new Error(("not implemented"));
    };
    MobileOfflineMock.prototype.retrieveMultipleRecords = function (entityType, options, maxPageSize) {
        throw new Error(("not implemented"));
    };
    MobileOfflineMock.prototype.updateRecord = function (entityType, id, data) {
        throw new Error(("not implemented"));
    };
    MobileOfflineMock.prototype.deleteRecord = function (entityType, id) {
        throw new Error(("not implemented"));
    };
    return MobileOfflineMock;
}());
exports.MobileOfflineMock = MobileOfflineMock;
//# sourceMappingURL=mobileoffline.mock.js.map