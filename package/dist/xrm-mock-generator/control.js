"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var XrmMock = require("../xrm-mock/index");
var ui_1 = require("./ui");
var Control = /** @class */ (function () {
    function Control() {
    }
    Control.createStringControl = function (name, label, isVisible, isDisabled, attribute) {
        var stringControl = new XrmMock.StringControlMock(new XrmMock.AutoLookupControlMock(new XrmMock.StandardControlMock({
            attribute: attribute,
            control: this.createControl(name, label, isVisible, "standard"),
        }), new XrmMock.UiKeyPressableMock()));
        this.addControl(stringControl);
    };
    Control.createControl = function (name, label, isVisible, controlType) {
        var control = new XrmMock.ControlMock({
            controlType: controlType || "standard",
            name: name,
            uiCanGetVisibleElement: ui_1.default.createCanGetVisibleElement(isVisible || true),
            uiLabelElement: ui_1.default.createLabelElement(label),
        });
        return control;
    };
    Control.addControl = function (control) {
        Xrm.Page.ui.controls.push(control);
    };
    return Control;
}());
exports.default = Control;
