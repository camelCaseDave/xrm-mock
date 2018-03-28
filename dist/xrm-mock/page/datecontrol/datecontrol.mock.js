"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DateControlMock = /** @class */ (function () {
    function DateControlMock(standardControl) {
        this.standardControl = standardControl;
    }
    DateControlMock.prototype.getShowTime = function () {
        var attribute = this.standardControl.getAttribute();
        return attribute.getFormat() === "datetime";
    };
    DateControlMock.prototype.setShowTime = function (showTimeValue) {
        var attribute = this.standardControl.getAttribute();
        var attributeFormat = showTimeValue ? "datetime" : "date";
        // TODO test
        // attribute = new DateAttributeMock(attribute, attributeFormat);
    };
    DateControlMock.prototype.clearNotification = function (uniqueId) {
        return this.standardControl.clearNotification();
    };
    DateControlMock.prototype.getDisabled = function () {
        return this.standardControl.getDisabled();
    };
    DateControlMock.prototype.setDisabled = function (disabled) {
        this.standardControl.setDisabled(disabled);
    };
    DateControlMock.prototype.setNotification = function (message, uniqueId) {
        return this.standardControl.setNotification(message, uniqueId);
    };
    DateControlMock.prototype.getAttribute = function () {
        return this.standardControl.getAttribute();
    };
    DateControlMock.prototype.getControlType = function () {
        return this.standardControl.getControlType();
    };
    DateControlMock.prototype.getName = function () {
        return this.standardControl.getName();
    };
    DateControlMock.prototype.getParent = function () {
        return this.standardControl.getParent();
    };
    DateControlMock.prototype.setVisible = function (visible) {
        this.standardControl.setVisible(visible);
    };
    DateControlMock.prototype.getLabel = function () {
        return this.standardControl.getLabel();
    };
    DateControlMock.prototype.setLabel = function (label) {
        this.standardControl.setLabel(label);
    };
    DateControlMock.prototype.getVisible = function () {
        return this.standardControl.getVisible();
    };
    DateControlMock.prototype.setFocus = function () {
        this.standardControl.setFocus();
    };
    return DateControlMock;
}());
exports.DateControlMock = DateControlMock;
