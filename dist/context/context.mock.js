"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ContextMock = (function () {
    function ContextMock(clientContext, clientUrl, currentTheme, isAutoSaveEnabled, orgLcid, orgUniqueName, timeZoneOffset, userId, userLcid, userName, userRoles, version) {
        this.client = clientContext;
        this.clientUrl = clientUrl;
        this.currentTheme = currentTheme;
        this.isAutoSaveEnabled = isAutoSaveEnabled;
        this.orgLcid = orgLcid;
        this.orgUniqueName = orgUniqueName;
        this.timeZoneOffset = timeZoneOffset;
        this.userId = userId;
        this.userLcid = userLcid;
        this.userName = userName;
        this.userRoles = userRoles;
        this.version = version;
    }
    ContextMock.prototype.getClientUrl = function () {
        return this.clientUrl;
    };
    ContextMock.prototype.getCurrentTheme = function () {
        return this.currentTheme;
    };
    ContextMock.prototype.getIsAutoSaveEnabled = function () {
        return this.isAutoSaveEnabled;
    };
    ContextMock.prototype.getOrgLcid = function () {
        return this.orgLcid;
    };
    ContextMock.prototype.getOrgUniqueName = function () {
        return this.orgUniqueName;
    };
    ContextMock.prototype.getQueryStringParameters = function () {
        throw ('get query string parameters not implemented');
    };
    ContextMock.prototype.getTimeZoneOffsetMinutes = function () {
        return this.timeZoneOffset;
    };
    ContextMock.prototype.getUserId = function () {
        return this.userId;
    };
    ContextMock.prototype.getUserLcid = function () {
        return this.userLcid;
    };
    ContextMock.prototype.getUserName = function () {
        return this.userName;
    };
    ContextMock.prototype.getUserRoles = function () {
        return this.userRoles;
    };
    ContextMock.prototype.getVersion = function () {
        return this.version;
    };
    ContextMock.prototype.prependOrgName = function (sPath) {
        return sPath + this.orgUniqueName;
    };
    return ContextMock;
}());
exports.ContextMock = ContextMock;
