"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BooleanAttributeMock = (function () {
    function BooleanAttributeMock(attribute, controls) {
        this.attribute = attribute;
        this.initialValue = attribute.getValue();
    }
    BooleanAttributeMock.prototype.getInitialValue = function () {
        return this.initialValue;
    };
    BooleanAttributeMock.prototype.getValue = function () {
        return this.attribute.getValue();
    };
    BooleanAttributeMock.prototype.setValue = function (value) {
        this.attribute.setValue(value);
    };
    BooleanAttributeMock.prototype.getFormat = function () {
        return this.attribute.getFormat();
    };
    BooleanAttributeMock.prototype.addOnChange = function (handler) {
        this.attribute.addOnChange(handler);
    };
    BooleanAttributeMock.prototype.fireOnChange = function () {
        this.attribute.fireOnChange();
    };
    BooleanAttributeMock.prototype.getAttributeType = function () {
        return this.attribute.getAttributeType();
    };
    BooleanAttributeMock.prototype.getIsDirty = function () {
        return this.attribute.getIsDirty();
    };
    BooleanAttributeMock.prototype.getName = function () {
        return this.attribute.getName();
    };
    BooleanAttributeMock.prototype.getParent = function () {
        return this.attribute.getParent();
    };
    BooleanAttributeMock.prototype.getRequiredLevel = function () {
        return this.attribute.getRequiredLevel();
    };
    BooleanAttributeMock.prototype.getSubmitMode = function () {
        return this.attribute.getSubmitMode();
    };
    BooleanAttributeMock.prototype.getUserPrivilege = function () {
        return this.attribute.getUserPrivilege();
    };
    BooleanAttributeMock.prototype.removeOnChange = function (handler) {
        this.attribute.removeOnChange(handler);
    };
    BooleanAttributeMock.prototype.setRequiredLevel = function (requirementLevel) {
        this.attribute.setRequiredLevel(requirementLevel);
    };
    BooleanAttributeMock.prototype.setSubmitMode = function (submitMode) {
        this.attribute.setSubmitMode(submitMode);
    };
    return BooleanAttributeMock;
}());
exports.BooleanAttributeMock = BooleanAttributeMock;
