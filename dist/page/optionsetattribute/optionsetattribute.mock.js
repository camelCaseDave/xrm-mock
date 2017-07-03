"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OptionSetAttributeMock = (function () {
    function OptionSetAttributeMock(attribute, options, optionSetAttributeFormat) {
        this.attribute = attribute;
        this.options = options;
        this.optionSetAttributeFormat = optionSetAttributeFormat;
        this.selectedOption = this.getOption(attribute.getValue());
    }
    OptionSetAttributeMock.prototype.getFormat = function () {
        return this.optionSetAttributeFormat;
    };
    OptionSetAttributeMock.prototype.getInitialValue = function () {
        return this.attribute.getInitialValue();
    };
    OptionSetAttributeMock.prototype.getOption = function (param) {
        if (typeof param === 'string')
            return this.options.filter(function (o) { return o.text === param; })[0];
        else if (typeof param === 'number')
            return this.options.filter(function (o) { return o.value === param; })[0];
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
        return this.attribute.getValue();
    };
    OptionSetAttributeMock.prototype.setValue = function (value) {
        this.attribute.setValue(value);
        this.selectedOption = this.getOption(value);
    };
    OptionSetAttributeMock.prototype.addOnChange = function (handler) {
        this.attribute.addOnChange(handler);
    };
    OptionSetAttributeMock.prototype.fireOnChange = function () {
        this.attribute.fireOnChange();
    };
    OptionSetAttributeMock.prototype.getAttributeType = function () {
        return this.attribute.getAttributeType();
    };
    OptionSetAttributeMock.prototype.getIsDirty = function () {
        return this.attribute.getIsDirty();
    };
    OptionSetAttributeMock.prototype.getName = function () {
        return this.attribute.getName();
    };
    OptionSetAttributeMock.prototype.getParent = function () {
        return this.attribute.getParent();
    };
    OptionSetAttributeMock.prototype.getRequiredLevel = function () {
        return this.attribute.getRequiredLevel();
    };
    OptionSetAttributeMock.prototype.getSubmitMode = function () {
        return this.attribute.getSubmitMode();
    };
    OptionSetAttributeMock.prototype.getUserPrivilege = function () {
        return this.attribute.getUserPrivilege();
    };
    OptionSetAttributeMock.prototype.removeOnChange = function (handler) {
        this.attribute.removeOnChange(handler);
    };
    OptionSetAttributeMock.prototype.setRequiredLevel = function (requirementLevel) {
        this.attribute.setRequiredLevel(requirementLevel);
    };
    OptionSetAttributeMock.prototype.setSubmitMode = function (submitMode) {
        this.attribute.setSubmitMode(submitMode);
    };
    return OptionSetAttributeMock;
}());
exports.OptionSetAttributeMock = OptionSetAttributeMock;
