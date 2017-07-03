"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AttributeMock = (function () {
    function AttributeMock(name, value, isDirty, requiredLevel, submitMode, controls) {
        this.name = name;
        this.value = value;
        this.isDirty = isDirty;
        this.requiredLevel = requiredLevel;
        this.submitMode = submitMode;
        this.controls = controls;
    }
    AttributeMock.prototype.addOnChange = function (handler) {
        throw ('addOnChange not implemented');
    };
    AttributeMock.prototype.fireOnChange = function () {
        throw ('fireOnChange not implemented');
    };
    AttributeMock.prototype.getAttributeType = function () {
        return typeof this.value;
    };
    AttributeMock.prototype.getFormat = function () {
        throw ('getFormat not implemented');
    };
    AttributeMock.prototype.getIsDirty = function () {
        return this.isDirty;
    };
    AttributeMock.prototype.getName = function () {
        return this.name;
    };
    AttributeMock.prototype.getParent = function () {
        throw ('getParent not implemented');
    };
    AttributeMock.prototype.getRequiredLevel = function () {
        return this.requiredLevel;
    };
    AttributeMock.prototype.getSubmitMode = function () {
        return this.submitMode;
    };
    AttributeMock.prototype.getUserPrivilege = function () {
        throw ('getUserPrivilege not implemented');
    };
    AttributeMock.prototype.removeOnChange = function (handler) {
        throw ('removeOnChange not implemented');
    };
    AttributeMock.prototype.setRequiredLevel = function (requirementLevel) {
        this.requiredLevel = requirementLevel;
    };
    AttributeMock.prototype.setSubmitMode = function (submitMode) {
        this.submitMode = submitMode;
    };
    AttributeMock.prototype.getValue = function () {
        return this.value;
    };
    AttributeMock.prototype.setValue = function (value) {
        this.value = value;
        this.isDirty = true;
    };
    return AttributeMock;
}());
exports.AttributeMock = AttributeMock;
