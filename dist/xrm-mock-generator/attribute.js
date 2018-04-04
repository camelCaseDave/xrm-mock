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
    Attribute.prototype.createOptionSet = function (nameOrComponents, valueOrControlComponents, options) {
        var _this = this;
        var components;
        var controls = [];
        if (typeof (nameOrComponents) === "string") {
            var value_1 = valueOrControlComponents;
            var num = void 0;
            if (value_1 !== null
                && value_1 !== undefined) {
                if (!options) {
                    options = [typeof value_1 === "string"
                            ? { text: value_1, value: 0 }
                            : { text: value_1.toString(), value: value_1 }];
                }
                if (typeof value_1 === "string") {
                    var option = options.filter(function (o) { return o.text === value_1; })[0];
                    num = option.value;
                }
                else {
                    num = value_1;
                }
            }
            else {
                num = undefined;
            }
            components = {
                name: name,
                options: options,
            };
            if (num || num === 0) {
                components.value = num;
            }
            controls.push({
                name: name,
                options: options,
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
            if (components.options && components.options.length > 0) {
                controls.filter(function (c) { return !c.options; })
                    .forEach(function (c) {
                    c.options = components.options;
                });
            }
        }
        var attribute = new XrmMock.OptionSetAttributeMock(components);
        this.addAttribute(attribute);
        controls.forEach(function (c) {
            var component = c;
            component.attribute = attribute;
            _this.Control.createOptionSet(component);
        });
        return attribute;
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
                format: format,
                maxLength: maxLength,
                name: nameOrComponents,
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
