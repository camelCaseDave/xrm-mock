"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AutoLookupControlMock = /** @class */ (function () {
    function AutoLookupControlMock(standardControl, uiKeyPressable) {
        this.standardControl = standardControl;
        this.uiKeyPressable = uiKeyPressable;
    }
    AutoLookupControlMock.prototype.getValue = function () {
        return this.standardControl.attribute.getValue();
    };
    AutoLookupControlMock.prototype.hideAutoComplete = function () {
        throw new Error(("hide autocomplete not implemented"));
    };
    AutoLookupControlMock.prototype.showAutoComplete = function (resultSet) {
        throw new Error(("show autocomplete not implemented"));
    };
    AutoLookupControlMock.prototype.clearNotification = function (uniqueId) {
        return this.standardControl.clearNotification();
    };
    AutoLookupControlMock.prototype.getDisabled = function () {
        return this.standardControl.getDisabled();
    };
    AutoLookupControlMock.prototype.setDisabled = function (disabled) {
        this.standardControl.setDisabled(disabled);
    };
    AutoLookupControlMock.prototype.setNotification = function (message, uniqueId) {
        return this.standardControl.setNotification(message, uniqueId);
    };
    AutoLookupControlMock.prototype.getAttribute = function () {
        return this.standardControl.getAttribute();
    };
    AutoLookupControlMock.prototype.getControlType = function () {
        return this.standardControl.getControlType();
    };
    AutoLookupControlMock.prototype.getName = function () {
        return this.standardControl.getName();
    };
    AutoLookupControlMock.prototype.getParent = function () {
        return this.standardControl.getParent();
    };
    AutoLookupControlMock.prototype.setVisible = function (visible) {
        this.standardControl.setVisible(visible);
    };
    AutoLookupControlMock.prototype.getLabel = function () {
        return this.standardControl.getLabel();
    };
    AutoLookupControlMock.prototype.setLabel = function (label) {
        this.standardControl.setLabel(label);
    };
    AutoLookupControlMock.prototype.getVisible = function () {
        return this.standardControl.getVisible();
    };
    AutoLookupControlMock.prototype.setFocus = function () {
        this.standardControl.setFocus();
    };
    AutoLookupControlMock.prototype.addOnKeyPress = function (handler) {
        this.uiKeyPressable.addOnKeyPress(handler);
    };
    AutoLookupControlMock.prototype.fireOnKeyPress = function () {
        this.uiKeyPressable.fireOnKeyPress();
    };
    AutoLookupControlMock.prototype.removeOnKeyPress = function (handler) {
        this.uiKeyPressable.removeOnKeyPress(handler);
    };
    return AutoLookupControlMock;
}());
exports.AutoLookupControlMock = AutoLookupControlMock;
