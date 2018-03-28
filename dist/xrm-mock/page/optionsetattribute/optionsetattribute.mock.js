"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OptionSetAttributeMock = /** @class */ (function () {
    function OptionSetAttributeMock(enumAttribute, options, optionSetAttributeFormat) {
        this.enumAttribute = enumAttribute;
        this.options = options;
        this.optionSetAttributeFormat = optionSetAttributeFormat;
        this.selectedOption = this.getOption(enumAttribute.getValue());
        this.enumAttribute.attribute.attributeFormat = optionSetAttributeFormat;
    }
    OptionSetAttributeMock.prototype.getFormat = function () {
        return this.enumAttribute.getFormat();
    };
    OptionSetAttributeMock.prototype.getInitialValue = function () {
        return this.enumAttribute.getInitialValue();
    };
    OptionSetAttributeMock.prototype.getOption = function (param) {
        if (typeof param === "string") {
            return this.options.filter(function (o) { return o.text === param; })[0];
        }
        else if (typeof param === "number") {
            return this.options.filter(function (o) { return o.value === param; })[0];
        }
    };
    OptionSetAttributeMock.prototype.getOptions = function () {
        return this.options;
    };
    OptionSetAttributeMock.prototype.getSelectedOption = function () {
        return this.selectedOption;
    };
    OptionSetAttributeMock.prototype.getText = function () {
        return this.selectedOption.text;
    };
    OptionSetAttributeMock.prototype.getValue = function () {
        return this.enumAttribute.getValue();
    };
    OptionSetAttributeMock.prototype.setValue = function (value) {
        this.enumAttribute.setValue(value);
        this.selectedOption = this.getOption(value);
    };
    OptionSetAttributeMock.prototype.addOnChange = function (handler) {
        this.enumAttribute.addOnChange(handler);
    };
    OptionSetAttributeMock.prototype.fireOnChange = function () {
        this.enumAttribute.fireOnChange();
    };
    OptionSetAttributeMock.prototype.getAttributeType = function () {
        return this.enumAttribute.getAttributeType();
    };
    OptionSetAttributeMock.prototype.getIsDirty = function () {
        return this.enumAttribute.getIsDirty();
    };
    OptionSetAttributeMock.prototype.getName = function () {
        return this.enumAttribute.getName();
    };
    OptionSetAttributeMock.prototype.getParent = function () {
        return this.enumAttribute.getParent();
    };
    OptionSetAttributeMock.prototype.getRequiredLevel = function () {
        return this.enumAttribute.getRequiredLevel();
    };
    OptionSetAttributeMock.prototype.getSubmitMode = function () {
        return this.enumAttribute.getSubmitMode();
    };
    OptionSetAttributeMock.prototype.getUserPrivilege = function () {
        return this.enumAttribute.getUserPrivilege();
    };
    OptionSetAttributeMock.prototype.removeOnChange = function (handler) {
        this.enumAttribute.removeOnChange(handler);
    };
    OptionSetAttributeMock.prototype.setRequiredLevel = function (requirementLevel) {
        this.enumAttribute.setRequiredLevel(requirementLevel);
    };
    OptionSetAttributeMock.prototype.setSubmitMode = function (submitMode) {
        this.enumAttribute.setSubmitMode(submitMode);
    };
    return OptionSetAttributeMock;
}());
exports.OptionSetAttributeMock = OptionSetAttributeMock;
