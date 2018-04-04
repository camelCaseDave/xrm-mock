"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var XrmMock = require("../xrm-mock/index");
var control_1 = require("./control");
var Attribute = /** @class */ (function () {
    function Attribute() {
        this.Control = new control_1.default();
    }
    Attribute.prototype.createBool = function (name, value) {
        var attribute = this.createAttribute(name, value || false);
        var boolAttribute = new XrmMock.BooleanAttributeMock(new XrmMock.EnumAttributeMock(attribute));
        this.addAttribute(boolAttribute);
        return boolAttribute;
    };
    Attribute.prototype.createDate = function (name, value, includeTime) {
        var attribute = this.createAttribute(name || "", value || false);
        var dateAttribute = new XrmMock.DateAttributeMock({
            attribute: attribute,
            dateAttributeFormat: !includeTime ? "date" : "datetime",
        });
        this.addAttribute(dateAttribute);
        return dateAttribute;
    };
    Attribute.prototype.createLookup = function (name, lookup) {
        var attribute = this.createAttribute(name || "", [new XrmMock.LookupValueMock(lookup.id, lookup.entityType, lookup.name)]);
        var lookupAttribute = new XrmMock.LookupAttributeMock(attribute, false);
        this.addAttribute(lookupAttribute);
        return lookupAttribute;
    };
    Attribute.prototype.createNumber = function (name, value, min, max, precision) {
        // TODO validate precision <5
        var attribute = this.createAttribute(name || "", value || 0);
        var numberAttribute = new XrmMock.NumberAttributeMock(attribute, null, "none", min || 0, max || 0, precision || 1);
        this.addAttribute(numberAttribute);
        return numberAttribute;
    };
    Attribute.prototype.createOptionSet = function (name, options) {
        var optionSetOptions = [];
        for (var _i = 0, options_1 = options; _i < options_1.length; _i++) {
            var option = options_1[_i];
            optionSetOptions.push(new XrmMock.OptionSetValueMock(option.text, option.value));
        }
        var attribute = this.createAttribute(name, options[0]);
        var enumAttribute = new XrmMock.EnumAttributeMock(attribute);
        var optionSetAttribute = new XrmMock.OptionSetAttributeMock(enumAttribute, optionSetOptions, "language");
        this.addAttribute(optionSetAttribute);
        return optionSetAttribute;
    };
    Attribute.prototype.createOptionSetOption = function (option) {
        return new XrmMock.OptionSetValueMock(option.text, option.value);
    };
    Attribute.prototype.createString = function (nameOrComponents, valueOrControlComponents, visible, disabled, format, maxLength, label) {
        var _this = this;
        if (valueOrControlComponents === void 0) { valueOrControlComponents = ""; }
        if (visible === void 0) { visible = true; }
        if (disabled === void 0) { disabled = false; }
        if (format === void 0) { format = "text"; }
        if (maxLength === void 0) { maxLength = 100; }
        var components;
        var controls = [];
        if (typeof (nameOrComponents) === "string") {
            components = {
                maxLength: maxLength,
                name: nameOrComponents,
                stringAttributeFormat: format,
                value: valueOrControlComponents,
            };
            controls.push({
                disabled: disabled,
                label: label || nameOrComponents,
                name: nameOrComponents,
                visible: visible,
            });
        }
        else {
            components = nameOrComponents;
            if (valueOrControlComponents) {
                controls = valueOrControlComponents instanceof Array
                    ? valueOrControlComponents
                    : [valueOrControlComponents];
            }
            else {
                controls.push({ name: components.name });
            }
        }
        var attribute = new XrmMock.StringAttributeMock(components);
        this.addAttribute(attribute);
        controls.forEach(function (c) {
            var component = c;
            component.attribute = attribute;
            _this.Control.createString(component);
        });
        return attribute;
    };
    Attribute.prototype.createAttribute = function (name, value) {
        var attribute = new XrmMock.AttributeMock({
            isDirty: false,
            name: name,
            submitMode: "dirty",
            value: value,
        });
        return attribute;
    };
    Attribute.prototype.addAttribute = function (attribute) {
        Xrm.Page.data.entity.attributes.push(attribute);
    };
    return Attribute;
}());
exports.default = Attribute;
