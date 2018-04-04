"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var XrmMock = require("../xrm-mock/index");
var Control = /** @class */ (function () {
    function Control() {
    }
    Control.prototype.createString = function (attributeOrComponents, name, visible, disabled, label) {
        if (visible === void 0) { visible = true; }
        if (disabled === void 0) { disabled = false; }
        var components = attributeOrComponents instanceof XrmMock.StringAttributeMock
            ? {
                attribute: attributeOrComponents,
                disabled: disabled,
                label: label || name,
                name: name,
                visible: visible,
            }
            : attributeOrComponents;
        return this.addControl(new XrmMock.StringControlMock(components));
    };
    Control.prototype.addControl = function (control) {
        Xrm.Page.ui.controls.push(control);
        return control;
    };
    return Control;
}());
exports.default = Control;
