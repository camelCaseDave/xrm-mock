"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebApiMock = void 0;
var WebApiMock = /** @class */ (function () {
    function WebApiMock(clientContext, online, offline) {
        this.online = online;
        this.offline = offline;
        this.clientContext = clientContext;
        this.isOffline = clientContext.getClientState() === "Offline";
    }
    WebApiMock.prototype.createRecord = function (entityLogicalName, record) {
        if (this.isOffline) {
            return this.offline.createRecord(entityLogicalName, record);
        }
        else {
            return this.online.createRecord(entityLogicalName, record);
        }
    };
    WebApiMock.prototype.deleteRecord = function (entityLogicalName, id) {
        if (this.isOffline) {
            return this.offline.deleteRecord(entityLogicalName, id);
        }
        else {
            return this.online.deleteRecord(entityLogicalName, id);
        }
    };
    WebApiMock.prototype.retrieveRecord = function (entityLogicalName, id, options) {
        if (this.isOffline) {
            return this.offline.retrieveRecord(entityLogicalName, id, options);
        }
        else {
            return this.online.retrieveRecord(entityLogicalName, id, options);
        }
    };
    WebApiMock.prototype.retrieveMultipleRecords = function (entityLogicalName, options, maxPageSize) {
        if (this.isOffline) {
            return this.offline.retrieveMultipleRecords(entityLogicalName, options, maxPageSize);
        }
        else {
            return this.online.retrieveMultipleRecords(entityLogicalName, options, maxPageSize);
        }
    };
    WebApiMock.prototype.updateRecord = function (entityLogicalName, id, data) {
        if (this.isOffline) {
            return this.offline.updateRecord(entityLogicalName, id, data);
        }
        else {
            return this.online.updateRecord(entityLogicalName, id, data);
        }
    };
    WebApiMock.prototype.isAvailableOffline = function (entityLogicalName) {
        throw new Error("xrm-mock doesn\'t yet implement metadata features.");
    };
    return WebApiMock;
}());
exports.WebApiMock = WebApiMock;
//# sourceMappingURL=webapi.mock.js.map