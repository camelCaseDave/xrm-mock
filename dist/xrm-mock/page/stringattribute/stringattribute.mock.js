"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StringAttributeMock = /** @class */ (function () {
    function StringAttributeMock(attribute, stringAttributeFormat, maxLength, controls) {
        this.attribute = attribute;
        this.stringAttributeFormat = stringAttributeFormat;
        this.maxLength = maxLength;
        this.controls = controls;
        attribute.attributeFormat = stringAttributeFormat;
    }
    StringAttributeMock.prototype.getFormat = function () {
        return this.attribute.getFormat();
    };
    StringAttributeMock.prototype.getMaxLength = function () {
        return this.maxLength;
    };
    StringAttributeMock.prototype.getValue = function () {
        return this.attribute.getValue();
    };
    StringAttributeMock.prototype.setValue = function (value) {
        if (this.maxLength && value.length > this.maxLength) {
            throw new Error(("value cannot be greater than " + this.maxLength));
        }
        else {
            this.attribute.setValue(value);
        }
    };
    StringAttributeMock.prototype.addOnChange = function (handler) {
        this.attribute.addOnChange(handler);
    };
    StringAttributeMock.prototype.fireOnChange = function () {
        this.attribute.fireOnChange();
    };
    StringAttributeMock.prototype.getAttributeType = function () {
        return this.attribute.getAttributeType();
    };
    StringAttributeMock.prototype.getIsDirty = function () {
        return this.attribute.getIsDirty();
    };
    StringAttributeMock.prototype.getName = function () {
        return this.attribute.getName();
    };
    StringAttributeMock.prototype.getParent = function () {
        return this.attribute.getParent();
    };
    StringAttributeMock.prototype.getRequiredLevel = function () {
        return this.attribute.getRequiredLevel();
    };
    StringAttributeMock.prototype.getSubmitMode = function () {
        return this.attribute.getSubmitMode();
    };
    StringAttributeMock.prototype.getUserPrivilege = function () {
        return this.attribute.getUserPrivilege();
    };
    StringAttributeMock.prototype.removeOnChange = function (handler) {
        this.attribute.removeOnChange(handler);
    };
    StringAttributeMock.prototype.setRequiredLevel = function (requirementLevel) {
        this.attribute.setRequiredLevel(requirementLevel);
    };
    StringAttributeMock.prototype.setSubmitMode = function (submitMode) {
        this.attribute.setSubmitMode(submitMode);
    };
    return StringAttributeMock;
}());
exports.StringAttributeMock = StringAttributeMock;
