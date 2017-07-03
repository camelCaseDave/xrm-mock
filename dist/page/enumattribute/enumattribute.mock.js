"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EnumAttributeMock = (function () {
    function EnumAttributeMock(attribute, controls) {
        this.attribute = attribute;
        this.initialValue = attribute.getValue();
    }
    EnumAttributeMock.prototype.getInitialValue = function () {
        return this.initialValue;
    };
    EnumAttributeMock.prototype.getFormat = function () {
        return this.attribute.getFormat();
    };
    EnumAttributeMock.prototype.addOnChange = function (handler) {
        this.attribute.addOnChange(handler);
    };
    EnumAttributeMock.prototype.fireOnChange = function () {
        this.attribute.fireOnChange();
    };
    EnumAttributeMock.prototype.getAttributeType = function () {
        return this.attribute.getAttributeType();
    };
    EnumAttributeMock.prototype.getIsDirty = function () {
        return this.attribute.getIsDirty();
    };
    EnumAttributeMock.prototype.getName = function () {
        return this.attribute.getName();
    };
    EnumAttributeMock.prototype.getParent = function () {
        return this.attribute.getParent();
    };
    EnumAttributeMock.prototype.getRequiredLevel = function () {
        return this.attribute.getRequiredLevel();
    };
    EnumAttributeMock.prototype.getSubmitMode = function () {
        return this.attribute.getSubmitMode();
    };
    EnumAttributeMock.prototype.getUserPrivilege = function () {
        return this.attribute.getUserPrivilege();
    };
    EnumAttributeMock.prototype.removeOnChange = function (handler) {
        this.attribute.removeOnChange(handler);
    };
    EnumAttributeMock.prototype.setRequiredLevel = function (requirementLevel) {
        this.attribute.setRequiredLevel(requirementLevel);
    };
    EnumAttributeMock.prototype.setSubmitMode = function (submitMode) {
        this.attribute.setSubmitMode(submitMode);
    };
    EnumAttributeMock.prototype.getValue = function () {
        return this.attribute.getValue();
    };
    EnumAttributeMock.prototype.setValue = function (value) {
        this.attribute.setValue(value);
    };
    return EnumAttributeMock;
}());
exports.EnumAttributeMock = EnumAttributeMock;
