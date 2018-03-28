"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StringControlMock = /** @class */ (function () {
    function StringControlMock(autoLookupControl) {
        this.autoLookupControl = autoLookupControl;
    }
    StringControlMock.prototype.getValue = function () {
        return this.autoLookupControl.getValue();
    };
    StringControlMock.prototype.hideAutoComplete = function () {
        throw new Error(("hide autocomplete not implemented"));
    };
    StringControlMock.prototype.showAutoComplete = function (resultSet) {
        throw new Error(("show autocomplete not implemented"));
    };
    StringControlMock.prototype.getAttribute = function () {
        return this.autoLookupControl.getAttribute();
    };
    StringControlMock.prototype.clearNotification = function (uniqueId) {
        return this.autoLookupControl.clearNotification();
    };
    StringControlMock.prototype.getDisabled = function () {
        return this.autoLookupControl.getDisabled();
    };
    StringControlMock.prototype.setDisabled = function (disabled) {
        this.autoLookupControl.setDisabled(disabled);
    };
    StringControlMock.prototype.setNotification = function (message, uniqueId) {
        return this.autoLookupControl.setNotification(message, uniqueId);
    };
    StringControlMock.prototype.getControlType = function () {
        return this.autoLookupControl.getControlType();
    };
    StringControlMock.prototype.getName = function () {
        return this.autoLookupControl.getName();
    };
    StringControlMock.prototype.getParent = function () {
        return this.autoLookupControl.getParent();
    };
    StringControlMock.prototype.setVisible = function (visible) {
        this.autoLookupControl.setVisible(visible);
    };
    StringControlMock.prototype.getLabel = function () {
        return this.autoLookupControl.getLabel();
    };
    StringControlMock.prototype.setLabel = function (label) {
        this.autoLookupControl.setLabel(label);
    };
    StringControlMock.prototype.getVisible = function () {
        return this.autoLookupControl.getVisible();
    };
    StringControlMock.prototype.setFocus = function () {
        this.autoLookupControl.setFocus();
    };
    StringControlMock.prototype.addOnKeyPress = function (handler) {
        this.autoLookupControl.addOnKeyPress(handler);
    };
    StringControlMock.prototype.fireOnKeyPress = function () {
        this.autoLookupControl.fireOnKeyPress();
    };
    StringControlMock.prototype.removeOnKeyPress = function (handler) {
        this.autoLookupControl.removeOnKeyPress(handler);
    };
    return StringControlMock;
}());
exports.StringControlMock = StringControlMock;
