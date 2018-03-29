"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LookupAttributeMock = /** @class */ (function () {
    function LookupAttributeMock(attribute, isPartyList, controls) {
        this.attribute = attribute;
        this.controls = controls;
        this.isPartyList = isPartyList;
    }
    LookupAttributeMock.prototype.getFormat = function () {
        return this.attribute.getFormat();
    };
    LookupAttributeMock.prototype.getIsPartyList = function () {
        return this.isPartyList;
    };
    LookupAttributeMock.prototype.getValue = function () {
        return this.attribute.getValue();
    };
    LookupAttributeMock.prototype.setValue = function (value) {
        this.attribute.setValue(value);
    };
    LookupAttributeMock.prototype.addOnChange = function (handler) {
        this.attribute.addOnChange(handler);
    };
    LookupAttributeMock.prototype.fireOnChange = function () {
        this.attribute.fireOnChange();
    };
    LookupAttributeMock.prototype.getAttributeType = function () {
        return this.attribute.getAttributeType();
    };
    LookupAttributeMock.prototype.getIsDirty = function () {
        return this.attribute.getIsDirty();
    };
    LookupAttributeMock.prototype.getName = function () {
        return this.attribute.getName();
    };
    LookupAttributeMock.prototype.getParent = function () {
        return this.attribute.getParent();
    };
    LookupAttributeMock.prototype.getRequiredLevel = function () {
        return this.attribute.getRequiredLevel();
    };
    LookupAttributeMock.prototype.getSubmitMode = function () {
        return this.attribute.getSubmitMode();
    };
    LookupAttributeMock.prototype.getUserPrivilege = function () {
        return this.attribute.getUserPrivilege();
    };
    LookupAttributeMock.prototype.removeOnChange = function (handler) {
        this.attribute.removeOnChange(handler);
    };
    LookupAttributeMock.prototype.setRequiredLevel = function (requirementLevel) {
        this.attribute.setRequiredLevel(requirementLevel);
    };
    LookupAttributeMock.prototype.setSubmitMode = function (submitMode) {
        this.attribute.setSubmitMode(submitMode);
    };
    return LookupAttributeMock;
}());
exports.LookupAttributeMock = LookupAttributeMock;
