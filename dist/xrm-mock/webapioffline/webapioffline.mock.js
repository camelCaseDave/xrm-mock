"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebApiOfflineMock = void 0;
var WebApiOfflineMock = /** @class */ (function () {
    function WebApiOfflineMock() {
        this.notImplementedError = "WebApi methods not implemented. Consider faking API calls using a tool such as Sinon.JS";
    }
    WebApiOfflineMock.prototype.createRecord = function (entityLogicalName, record) {
        throw new Error(this.notImplementedError);
    };
    WebApiOfflineMock.prototype.deleteRecord = function (entityLogicalName, id) {
        throw new Error(this.notImplementedError);
    };
    WebApiOfflineMock.prototype.retrieveRecord = function (entityLogicalName, id, options) {
        throw new Error(this.notImplementedError);
    };
    WebApiOfflineMock.prototype.retrieveMultipleRecords = function (entityLogicalName, options, maxPageSize) {
        throw new Error(this.notImplementedError);
    };
    WebApiOfflineMock.prototype.updateRecord = function (entityLogicalName, id, data) {
        throw new Error(this.notImplementedError);
    };
    return WebApiOfflineMock;
}());
exports.WebApiOfflineMock = WebApiOfflineMock;
//# sourceMappingURL=webapioffline.mock.js.map