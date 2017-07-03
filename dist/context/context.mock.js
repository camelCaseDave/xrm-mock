"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ContextMock = (function () {
    function ContextMock(clientContext) {
        this.client = clientContext;
    }
    ContextMock.prototype.getClientUrl = function () {
        throw ('get client url not implemented');
    };
    ContextMock.prototype.getCurrentTheme = function () {
        throw ('get current theme not implemented');
    };
    ContextMock.prototype.getIsAutoSaveEnabled = function () {
        throw ('get is auto save enabled not implemented');
    };
    ContextMock.prototype.getOrgLcid = function () {
        throw ('get org lcid not implemented');
    };
    ContextMock.prototype.getOrgUniqueName = function () {
        throw ('get org unique name not implemented');
    };
    ContextMock.prototype.getQueryStringParameters = function () {
        throw ('get query string parameters not implemented');
    };
    ContextMock.prototype.getTimeZoneOffsetMinutes = function () {
        throw ('get time zone offset minutes not implemented');
    };
    ContextMock.prototype.getUserId = function () {
        throw ('get user id not implemented');
    };
    ContextMock.prototype.getUserLcid = function () {
        throw ('get user lcid not implemented');
    };
    ContextMock.prototype.getUserName = function () {
        throw ('get user name not implemented');
    };
    ContextMock.prototype.getUserRoles = function () {
        throw ('get user roles not implemented');
    };
    ContextMock.prototype.getVersion = function () {
        throw ('get version not implemented');
    };
    ContextMock.prototype.prependOrgName = function (sPath) {
        throw ('prepend org name not implemented');
    };
    return ContextMock;
}());
exports.ContextMock = ContextMock;
