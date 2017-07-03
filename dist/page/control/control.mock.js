"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ControlMock = (function () {
    function ControlMock(name, controlType, uiLabelElement, uiCanGetVisibleElement, parent) {
        this.controlType = controlType;
        this.uiLabelElement = uiLabelElement;
        this.uiCanGetVisibleElement = uiCanGetVisibleElement;
        this.name = name;
        this.parent = parent;
    }
    ControlMock.prototype.getControlType = function () {
        return this.controlType;
    };
    ControlMock.prototype.getName = function () {
        return this.name;
    };
    ControlMock.prototype.getParent = function () {
        return this.parent;
    };
    ControlMock.prototype.getLabel = function () {
        return this.uiLabelElement.getLabel();
    };
    ControlMock.prototype.setLabel = function (label) {
        this.uiLabelElement.setLabel(label);
    };
    ControlMock.prototype.getVisible = function () {
        return this.uiCanGetVisibleElement.getVisible();
    };
    return ControlMock;
}());
exports.ControlMock = ControlMock;
