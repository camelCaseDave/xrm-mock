"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_helper_1 = require("../../../xrm-mock-generator/helpers/array.helper");
var itemcollection_mock_1 = require("../../collection/itemcollection/itemcollection.mock");
var AttributeMock = /** @class */ (function () {
    function AttributeMock(components) {
        this.attributeType = components.attributeType || "string";
        this.format = components.format;
        this.name = components.name;
        this.value = components.value;
        this.isDirty = components.isDirty === true ? true : false;
        this.requiredLevel = components.requiredLevel || "none";
        this.submitMode = components.submitMode || "dirty";
        this.controls = components.controls || new itemcollection_mock_1.ItemCollectionMock();
        this.eventHandlers = components.eventHandlers || [];
    }
    AttributeMock.prototype.addOnChange = function (handler) {
        this.eventHandlers.push(handler);
    };
    AttributeMock.prototype.fireOnChange = function () {
        if (this.eventHandlers.length) {
            for (var _i = 0, _a = this.eventHandlers; _i < _a.length; _i++) {
                var handler = _a[_i];
                handler.call(this);
            }
        }
    };
    AttributeMock.prototype.getAttributeType = function () {
        return this.attributeType;
    };
    AttributeMock.prototype.getFormat = function () {
        return this.format;
    };
    AttributeMock.prototype.getIsDirty = function () {
        return this.isDirty;
    };
    AttributeMock.prototype.getName = function () {
        return this.name;
    };
    AttributeMock.prototype.getParent = function () {
        throw new Error("getParent not implemented");
    };
    AttributeMock.prototype.getRequiredLevel = function () {
        return this.requiredLevel;
    };
    AttributeMock.prototype.getSubmitMode = function () {
        return this.submitMode;
    };
    AttributeMock.prototype.getUserPrivilege = function () {
        throw new Error("getUserPrivilege not implemented");
    };
    AttributeMock.prototype.removeOnChange = function (handler) {
        var index = array_helper_1.findIndex(this.eventHandlers, handler);
        this.eventHandlers.splice(index, 1);
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
//# sourceMappingURL=attribute.mock.js.map