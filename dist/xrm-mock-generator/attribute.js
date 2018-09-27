"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var XrmMock = require("../xrm-mock/index");
var control_1 = require("./control");
var Attribute = /** @class */ (function () {
    function Attribute() {
        this.Control = new control_1.default();
    }
    Attribute.prototype.createBoolean = function (nameOrComponents, valueOrControlComponents) {
        if (typeof (nameOrComponents) === "string") {
            var components = { name: nameOrComponents, value: valueOrControlComponents };
            var controls = [{ name: nameOrComponents }];
            return this.associateAttribute(new XrmMock.BooleanAttributeMock(components), controls, "createBoolean");
        }
        else {
            return this.associateAttribute(new XrmMock.BooleanAttributeMock(nameOrComponents), this.arrayify(valueOrControlComponents), "createBoolean");
        }
    };
    Attribute.prototype.createDate = function (nameOrComponents, valueOrControlComponents) {
        if (typeof (nameOrComponents) === "string") {
            var components = { name: nameOrComponents, value: valueOrControlComponents };
            var controls = [{ name: nameOrComponents }];
            return this.associateAttribute(new XrmMock.DateAttributeMock(components), controls, "createDate");
        }
        else {
            return this.associateAttribute(new XrmMock.DateAttributeMock(nameOrComponents), this.arrayify(valueOrControlComponents), "createDate");
        }
    };
    Attribute.prototype.createLookup = function (nameOrComponents, valueOrControlComponents) {
        if (typeof (nameOrComponents) === "string") {
            var components = {
                isPartyList: valueOrControlComponents && Array.isArray(valueOrControlComponents),
                name: nameOrComponents,
                value: this.arrayify(valueOrControlComponents)
            };
            var controls = [{ name: nameOrComponents }];
            return this.associateAttribute(new XrmMock.LookupAttributeMock(components), controls, "createLookup");
        }
        else {
            return this.associateAttribute(new XrmMock.LookupAttributeMock(nameOrComponents), this.arrayify(valueOrControlComponents), "createLookup");
        }
    };
    Attribute.prototype.createNumber = function (nameOrComponents, valueOrControlComponents) {
        if (typeof (nameOrComponents) === "string") {
            var components = { name: nameOrComponents, value: valueOrControlComponents };
            var controls = [{ name: nameOrComponents }];
            return this.associateAttribute(new XrmMock.NumberAttributeMock(components), controls, "createNumber");
        }
        else {
            return this.associateAttribute(new XrmMock.NumberAttributeMock(nameOrComponents), this.arrayify(valueOrControlComponents), "createNumber");
        }
    };
    Attribute.prototype.createOptionSet = function (nameOrComponents, valueOrControlComponents, options) {
        return typeof (nameOrComponents) === "string"
            ? this.createOptionSetFromParameters(nameOrComponents, valueOrControlComponents, options)
            : this.createOptionSetFromComponents(nameOrComponents, this.arrayify(valueOrControlComponents));
    };
    Attribute.prototype.createString = function (nameOrComponents, valueOrControlComponents) {
        if (valueOrControlComponents === void 0) { valueOrControlComponents = ""; }
        if (typeof (nameOrComponents) === "string") {
            var components = { name: nameOrComponents, value: valueOrControlComponents };
            var controls = [{ name: nameOrComponents }];
            return this.associateAttribute(new XrmMock.StringAttributeMock(components), controls, "createString");
        }
        else {
            return this.associateAttribute(new XrmMock.StringAttributeMock(nameOrComponents), this.arrayify(valueOrControlComponents), "createString");
        }
    };
    Attribute.prototype.createOptionSetFromParameters = function (name, value, options) {
        var num;
        if (value !== null
            && value !== undefined) {
            if (!options) {
                options = [typeof value === "string"
                        ? { text: value, value: 0 }
                        : { text: value.toString(), value: value }];
            }
            if (typeof value === "string") {
                var option = options.filter(function (o) { return o.text === value; })[0];
                num = option.value;
            }
            else {
                num = value;
            }
        }
        else {
            num = undefined;
        }
        var components = {
            name: name,
            options: options,
        };
        if (num || num === 0) {
            components.value = num;
        }
        var controls = [{ name: name, options: options }];
        return this.associateAttribute(new XrmMock.OptionSetAttributeMock(components), controls, "createOptionSet");
    };
    Attribute.prototype.createOptionSetFromComponents = function (components, controls) {
        if (components.options && components.options.length > 0) {
            controls.filter(function (c) { return !c.options; })
                .forEach(function (c) {
                c.options = components.options;
            });
        }
        return this.associateAttribute(new XrmMock.OptionSetAttributeMock(components), controls, "createOptionSet");
    };
    Attribute.prototype.createStringFromParameters = function (name, value) {
        var components = { name: name, value: value };
        var controls = [{ name: name }];
        return this.associateAttribute(new XrmMock.StringAttributeMock(components), controls, "createString");
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
    /**
     * Creates the given attribute, as well as the controls for the attribute defined by the components
     * @param attribute The newly created attribute to be added to the page colleciton of attributes
     * @param controls Array of Control Components to create controls for the given attribute
     * @param controlCreateFunction the name of the Control function to call to create the correct type of control
     */
    Attribute.prototype.associateAttribute = function (attribute, controls, controlCreateFunction) {
        var _this = this;
        this.addAttribute(attribute);
        controls.forEach(function (c) {
            c.attribute = attribute;
            _this.defaultName(c, attribute);
            _this.Control[controlCreateFunction](c);
        });
        return attribute;
    };
    Attribute.prototype.defaultName = function (control, attribute) {
        var names = [];
        attribute.controls.forEach(function (c) {
            names.push(c.getName());
        });
        if (!control.name) {
            control.name = attribute.getName();
        }
        else if (names.indexOf(control.name) >= 0) {
            throw new Error("Name " + control.name + " has already been defined for a control for attribute " + attribute.getName());
        }
        var i = 1;
        while (names.indexOf(control.name) >= 0) {
            control.name = attribute.getName() + i++;
        }
    };
    Attribute.prototype.arrayify = function (possibleArray) {
        if (!possibleArray) {
            return [];
        }
        else if (possibleArray instanceof Array) {
            return possibleArray;
        }
        else {
            return [possibleArray];
        }
    };
    return Attribute;
}());
exports.default = Attribute;
//# sourceMappingURL=attribute.js.map