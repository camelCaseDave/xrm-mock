"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebApiOnlineMock = void 0;
var WebApiOnlineMock = /** @class */ (function () {
    function WebApiOnlineMock(offlineCapabilities) {
        this.notImplementedError = "WebApi methods not implemented. Consider faking API calls using a tool such as Sinon.JS";
        this.offline = offlineCapabilities;
    }
    WebApiOnlineMock.prototype.execute = function (request) {
        throw new Error(this.notImplementedError);
    };
    WebApiOnlineMock.prototype.executeMultiple = function (request) {
        throw new Error(this.notImplementedError);
    };
    WebApiOnlineMock.prototype.createRecord = function (entityLogicalName, record) {
        return this.offline.createRecord(entityLogicalName, record);
    };
    WebApiOnlineMock.prototype.deleteRecord = function (entityLogicalName, id) {
        return this.offline.deleteRecord(entityLogicalName, id);
    };
    WebApiOnlineMock.prototype.retrieveRecord = function (entityLogicalName, id, options) {
        return this.offline.retrieveRecord(entityLogicalName, id, options);
    };
    WebApiOnlineMock.prototype.retrieveMultipleRecords = function (entityLogicalName, options, maxPageSize) {
        return this.offline.retrieveMultipleRecords(entityLogicalName, options, maxPageSize);
    };
    WebApiOnlineMock.prototype.updateRecord = function (entityLogicalName, id, data) {
        return this.offline.updateRecord(entityLogicalName, id, data);
    };
    return WebApiOnlineMock;
}());
exports.WebApiOnlineMock = WebApiOnlineMock;
//# sourceMappingURL=webapionline.mock.js.map