"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var XrmMock = require("../xrm-mock/index");
var ui_1 = require("./ui");
var Control = /** @class */ (function () {
    function Control() {
    }
    Control.prototype.createString = function (attribute, name, isVisible, isDisabled, label) {
        if (isVisible === void 0) { isVisible = true; }
        if (isDisabled === void 0) { isDisabled = false; }
        var stringControl = new XrmMock.StringControlMock(new XrmMock.AutoLookupControlMock(new XrmMock.StandardControlMock({
            attribute: attribute.attribute,
            control: this.createControl(name, label, isVisible),
            uiStandardElement: XrmMock.UiStandardElementMock.create(label, isVisible),
        })));
        this.addControl(stringControl);
        return stringControl;
    };
    Control.prototype.createControl = function (name, label, isVisible, controlType) {
        if (controlType === void 0) { controlType = "standard"; }
        var control = new XrmMock.ControlMock({
            controlType: controlType || "standard",
            name: name,
            uiCanGetVisibleElement: ui_1.default.createCanGetVisibleElement(isVisible || true),
            uiLabelElement: ui_1.default.createLabelElement(label || name),
        });
        return control;
    };
    Control.prototype.addControl = function (control) {
        Xrm.Page.ui.controls.push(control);
    };
    return Control;
}());
exports.default = Control;
