"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ControlMock = /** @class */ (function () {
    function ControlMock(components) {
        this.controlType = components.controlType || "standard";
        this.uiLabelElement = components.uiLabelElement;
        this.uiCanGetVisibleElement = components.uiCanGetVisibleElement;
        this.name = components.name;
        this.parent = components.parent;
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
