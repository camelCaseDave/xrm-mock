"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttributeMock = void 0;
var array_helper_1 = require("../../../xrm-mock-generator/helpers/array.helper");
var xrm_mock_generator_1 = require("../../../xrm-mock-generator/xrm-mock-generator");
var itemcollection_mock_1 = require("../../collection/itemcollection/itemcollection.mock");
var eventcontext_mock_1 = require("../../events/eventcontext/eventcontext.mock");
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
            var globalContext = xrm_mock_generator_1.XrmMockGenerator.getEventContext();
            var context = new eventcontext_mock_1.EventContextMock(__assign(__assign({}, globalContext), { depth: globalContext.depth ? globalContext.depth + 1 : 1, eventSource: this }));
            for (var _i = 0, _a = this.eventHandlers; _i < _a.length; _i++) {
                var handler = _a[_i];
                handler.call(this, context);
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
    AttributeMock.prototype.isValid = function () {
        throw new Error("isValid not implemented");
    };
    AttributeMock.prototype.setIsValid = function (valid, message) {
        throw new Error("setIsValid not implemented");
    };
    return AttributeMock;
}());
exports.AttributeMock = AttributeMock;
//# sourceMappingURL=attribute.mock.js.map