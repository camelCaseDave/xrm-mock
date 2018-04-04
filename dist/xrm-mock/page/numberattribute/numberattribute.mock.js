"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumberAttributeMock = /** @class */ (function () {
    function NumberAttributeMock(attribute, // TODO - AttributeMock
    controls, integerAttributeFormat, min, max, precision) {
        this.attribute = attribute;
        this.controls = controls;
        this.integerAttributeFormat = integerAttributeFormat;
        this.min = min;
        this.max = max;
        this.precision = precision;
        this.attribute.attributeFormat = integerAttributeFormat;
    }
    NumberAttributeMock.prototype.getFormat = function () {
        return this.attribute.getFormat();
    };
    NumberAttributeMock.prototype.getMax = function () {
        return this.max;
    };
    NumberAttributeMock.prototype.getMin = function () {
        return this.min;
    };
    NumberAttributeMock.prototype.getPrecision = function () {
        return this.precision;
    };
    NumberAttributeMock.prototype.getValue = function () {
        return this.attribute.getValue();
    };
    NumberAttributeMock.prototype.setValue = function (value) {
        if (this.min !== null && this.min > value) {
            throw new Error(("value cannot be below the min of " + this.min));
        }
        else if (this.max && this.max < value) {
            throw new Error(("value cannot be above the max of " + this.max));
        }
        else {
            this.attribute.setValue(value);
        }
    };
    NumberAttributeMock.prototype.addOnChange = function (handler) {
        this.attribute.addOnChange(handler);
    };
    NumberAttributeMock.prototype.fireOnChange = function () {
        this.attribute.fireOnChange();
    };
    NumberAttributeMock.prototype.getAttributeType = function () {
        return this.attribute.getAttributeType();
    };
    NumberAttributeMock.prototype.getIsDirty = function () {
        return this.attribute.getIsDirty();
    };
    NumberAttributeMock.prototype.getName = function () {
        return this.attribute.getName();
    };
    NumberAttributeMock.prototype.getParent = function () {
        return this.attribute.getParent();
    };
    NumberAttributeMock.prototype.getRequiredLevel = function () {
        return this.attribute.getRequiredLevel();
    };
    NumberAttributeMock.prototype.getSubmitMode = function () {
        return this.attribute.getSubmitMode();
    };
    NumberAttributeMock.prototype.getUserPrivilege = function () {
        return this.attribute.getUserPrivilege();
    };
    NumberAttributeMock.prototype.removeOnChange = function (handler) {
        this.attribute.removeOnChange(handler);
    };
    NumberAttributeMock.prototype.setRequiredLevel = function (requirementLevel) {
        this.attribute.setRequiredLevel(requirementLevel);
    };
    NumberAttributeMock.prototype.setSubmitMode = function (submitMode) {
        this.attribute.setSubmitMode(submitMode);
    };
    return NumberAttributeMock;
}());
exports.NumberAttributeMock = NumberAttributeMock;
