"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var XrmMock = require("../xrm-mock/index");
var Control = /** @class */ (function () {
    function Control() {
    }
    Control.prototype.createBoolean = function (attributeOrComponents, name, visible, disabled, label) {
        if (visible === void 0) { visible = true; }
        if (disabled === void 0) { disabled = false; }
        var components = this.createStandardComponent(attributeOrComponents, name, visible, disabled, label);
        return this.addControl(new XrmMock.BooleanControlMock(components));
    };
    Control.prototype.createDate = function (attributeOrComponents, name, visible, disabled, label) {
        if (visible === void 0) { visible = true; }
        if (disabled === void 0) { disabled = false; }
        var components = this.createStandardComponent(attributeOrComponents, name, visible, disabled, label);
        return this.addControl(new XrmMock.DateControlMock(components));
    };
    Control.prototype.createGrid = function (nameOrComponents, visible, label) {
        if (visible === void 0) { visible = true; }
        var components = nameOrComponents.name
            ? nameOrComponents
            : {
                label: label,
                name: nameOrComponents,
                visible: visible
            };
        return this.addControl(new XrmMock.GridControlMock(components));
    };
    Control.prototype.createLookup = function (attributeOrComponents, name, visible, disabled, label) {
        if (visible === void 0) { visible = true; }
        if (disabled === void 0) { disabled = false; }
        var components = this.createStandardComponent(attributeOrComponents, name, visible, disabled, label);
        return this.addControl(new XrmMock.LookupControlMock(components));
    };
    Control.prototype.createNumber = function (attributeOrComponents, name, visible, disabled, label) {
        if (visible === void 0) { visible = true; }
        if (disabled === void 0) { disabled = false; }
        var components = this.createStandardComponent(attributeOrComponents, name, visible, disabled, label);
        return this.addControl(new XrmMock.NumberControlMock(components));
    };
    Control.prototype.createOptionSet = function (attributeOrComponents, name, visible, disabled, label) {
        if (visible === void 0) { visible = true; }
        if (disabled === void 0) { disabled = false; }
        var components = this.createStandardComponent(attributeOrComponents, name, visible, disabled, label);
        return this.addControl(new XrmMock.OptionSetControlMock(components));
    };
    Control.prototype.createString = function (attributeOrComponents, name, visible, disabled, label) {
        var components = this.createStandardComponent(attributeOrComponents, name, visible, disabled, label);
        return this.addControl(new XrmMock.StringControlMock(components));
    };
    Control.prototype.addControl = function (control) {
        Xrm.Page.ui.controls.push(control);
        return control;
    };
    Control.prototype.createStandardComponent = function (attributeOrComponents, name, visible, disabled, label) {
        var att = attributeOrComponents;
        return att.controls && att.eventHandlers
            ? {
                attribute: attributeOrComponents,
                disabled: disabled,
                label: label || name,
                name: name,
                visible: visible,
            }
            : attributeOrComponents;
    };
    return Control;
}());
exports.default = Control;
//# sourceMappingURL=control.js.map