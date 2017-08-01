"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StandardControlMock = (function () {
    function StandardControlMock(components) {
        this.control = components.control;
        this.disabled = components.disabled || false;
        this.uiStandardElement = components.uiStandardElement;
        this.uiFocusable = components.uiFocusable;
        this.attribute = components.attribute;
    }
    StandardControlMock.prototype.clearNotification = function (uniqueId) {
        throw ('clear notification not implemented');
    };
    StandardControlMock.prototype.getDisabled = function () {
        return this.disabled;
    };
    StandardControlMock.prototype.setDisabled = function (disabled) {
        this.disabled = disabled;
    };
    StandardControlMock.prototype.setNotification = function (message, uniqueId) {
        throw ('set notification not implemented');
    };
    StandardControlMock.prototype.getAttribute = function () {
        if (['subgrid', 'iframe', 'webresource'].indexOf(this.control.getControlType()) === -1) {
            return this.attribute;
        }
        else {
            throw ('control is not bound to an attribute because it is of type ' + this.control.getControlType());
        }
    };
    StandardControlMock.prototype.getControlType = function () {
        this.control.controlType = "standard";
        return this.control.getControlType();
    };
    StandardControlMock.prototype.getName = function () {
        return this.control.getName();
    };
    StandardControlMock.prototype.getParent = function () {
        return this.control.getParent();
    };
    StandardControlMock.prototype.getLabel = function () {
        return this.uiStandardElement.getLabel();
    };
    StandardControlMock.prototype.setLabel = function (label) {
        this.uiStandardElement.setLabel(label);
    };
    StandardControlMock.prototype.getVisible = function () {
        return this.uiStandardElement.getVisible();
    };
    StandardControlMock.prototype.setVisible = function (visible) {
        this.uiStandardElement.setVisible(visible);
    };
    StandardControlMock.prototype.setFocus = function () {
        this.uiFocusable.setFocus();
    };
    return StandardControlMock;
}());
exports.StandardControlMock = StandardControlMock;
