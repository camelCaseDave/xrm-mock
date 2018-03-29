"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumberControlMock = /** @class */ (function () {
    function NumberControlMock(autoLookupControl) {
        this.autoLookupControl = autoLookupControl;
    }
    NumberControlMock.prototype.getValue = function () {
        throw new Error(("get value not implemented"));
    };
    NumberControlMock.prototype.hideAutoComplete = function () {
        throw new Error(("hide autocomplete not implemented"));
    };
    NumberControlMock.prototype.showAutoComplete = function (resultSet) {
        throw new Error(("show autocomplete not implemented"));
    };
    NumberControlMock.prototype.getAttribute = function () {
        return this.autoLookupControl.getAttribute();
    };
    NumberControlMock.prototype.clearNotification = function (uniqueId) {
        return this.autoLookupControl.clearNotification();
    };
    NumberControlMock.prototype.getDisabled = function () {
        return this.autoLookupControl.getDisabled();
    };
    NumberControlMock.prototype.setDisabled = function (disabled) {
        this.autoLookupControl.setDisabled(disabled);
    };
    NumberControlMock.prototype.setNotification = function (message, uniqueId) {
        return this.autoLookupControl.setNotification(message, uniqueId);
    };
    NumberControlMock.prototype.getControlType = function () {
        return this.autoLookupControl.getControlType();
    };
    NumberControlMock.prototype.getName = function () {
        return this.autoLookupControl.getName();
    };
    NumberControlMock.prototype.getParent = function () {
        return this.autoLookupControl.getParent();
    };
    NumberControlMock.prototype.setVisible = function (visible) {
        this.autoLookupControl.setVisible(visible);
    };
    NumberControlMock.prototype.getLabel = function () {
        return this.autoLookupControl.getLabel();
    };
    NumberControlMock.prototype.setLabel = function (label) {
        this.autoLookupControl.setLabel(label);
    };
    NumberControlMock.prototype.getVisible = function () {
        return this.autoLookupControl.getVisible();
    };
    NumberControlMock.prototype.setFocus = function () {
        this.autoLookupControl.setFocus();
    };
    NumberControlMock.prototype.addOnKeyPress = function (handler) {
        this.autoLookupControl.addOnKeyPress(handler);
    };
    NumberControlMock.prototype.fireOnKeyPress = function () {
        this.autoLookupControl.fireOnKeyPress();
    };
    NumberControlMock.prototype.removeOnKeyPress = function (handler) {
        this.autoLookupControl.removeOnKeyPress(handler);
    };
    return NumberControlMock;
}());
exports.NumberControlMock = NumberControlMock;
