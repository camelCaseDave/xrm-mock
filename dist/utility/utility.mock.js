"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UtilityMock = (function () {
    function UtilityMock() {
    }
    UtilityMock.prototype.alertDialog = function (message, onCloseCallback) {
        alert(message);
        onCloseCallback();
    };
    UtilityMock.prototype.confirmDialog = function (message, yesCloseCallback, noCloseCallback) {
        if (confirm(message)) {
            yesCloseCallback();
        }
        else {
            noCloseCallback();
        }
    };
    UtilityMock.prototype.isActivityType = function (entityType) {
        throw ('is activity type not implemented');
    };
    UtilityMock.prototype.openQuickCreate = function (entityLogicalName, createFromEntity, parameters) {
        throw ('open quick create not implemented');
    };
    UtilityMock.prototype.openEntityForm = function (name, id, parameters, windowOptions) {
        throw ('open entity form not implemented');
    };
    UtilityMock.prototype.openWebResource = function (webResourceName, webResourceData, width, height) {
        throw ('open web resource not implemented');
    };
    return UtilityMock;
}());
exports.UtilityMock = UtilityMock;
