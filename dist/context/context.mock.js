"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ContextMock = (function () {
    function ContextMock(components) {
        this.client = components.clientContext;
        this.clientUrl = components.clientUrl;
        this.currentTheme = components.currentTheme;
        this.isAutoSaveEnabled = components.isAutoSaveEnabled;
        this.orgLcid = components.orgLcid;
        this.orgUniqueName = components.orgUniqueName;
        this.timeZoneOffset = components.timeZoneOffset;
        this.userId = components.userId;
        this.userLcid = components.userLcid;
        this.userName = components.userName;
        this.userRoles = components.userRoles;
        this.version = components.version;
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
