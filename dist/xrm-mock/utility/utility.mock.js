"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilityMock = void 0;
var xrm_mock_generator_1 = require("../../xrm-mock-generator/xrm-mock-generator");
var UtilityMock = /** @class */ (function () {
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
        throw new Error(("is activity type not implemented"));
    };
    UtilityMock.prototype.openQuickCreate = function (entityLogicalName, createFromEntity, parameters) {
        throw new Error(("open quick create not implemented"));
    };
    UtilityMock.prototype.openEntityForm = function (name, id, parameters, windowOptions) {
        throw new Error(("open entity form not implemented"));
    };
    UtilityMock.prototype.openWebResource = function (webResourceName, webResourceData, width, height) {
        throw new Error(("open web resource not implemented"));
    };
    UtilityMock.prototype.closeProgressIndicator = function () {
        throw new Error("Method not implemented.");
    };
    UtilityMock.prototype.getAllowedStatusTransitions = function (entityName, stateCode) {
        throw new Error("Method not implemented.");
    };
    UtilityMock.prototype.getEntityMetadata = function (entityName, attributes) {
        throw new Error("Method not implemented.");
    };
    UtilityMock.prototype.getGlobalContext = function () {
        return xrm_mock_generator_1.XrmMockGenerator.context;
    };
    UtilityMock.prototype.getResourceString = function (webResourceName, key) {
        throw new Error("Method not implemented.");
    };
    UtilityMock.prototype.invokeProcessAction = function (name, parameters) {
        throw new Error("Method not implemented.");
    };
    UtilityMock.prototype.lookupObjects = function (lookupOptions) {
        throw new Error("Method not implemented.");
    };
    UtilityMock.prototype.refreshParentGrid = function (lookupOptions) {
        throw new Error("Method not implemented.");
    };
    UtilityMock.prototype.showProgressIndicator = function (message) {
        throw new Error("Method not implemented.");
    };
    UtilityMock.prototype.getLearningPathAttributeName = function () {
        throw new Error("Method not implemented.");
    };
    UtilityMock.prototype.getPageContext = function () {
        throw new Error("Method not implemented.");
    };
    return UtilityMock;
}());
exports.UtilityMock = UtilityMock;
//# sourceMappingURL=utility.mock.js.map