"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlMock = void 0;
var ControlMock = /** @class */ (function () {
    function ControlMock(components) {
        this.controlType = components.controlType || "standard";
        this.label = components.label;
        this.visible = components.visible;
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
        return this.label;
    };
    ControlMock.prototype.setLabel = function (label) {
        this.label = label;
    };
    ControlMock.prototype.getVisible = function () {
        return this.visible;
    };
    return ControlMock;
}());
exports.ControlMock = ControlMock;
//# sourceMappingURL=control.mock.js.map