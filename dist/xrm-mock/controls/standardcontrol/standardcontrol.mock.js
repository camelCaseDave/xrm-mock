"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.StandardControlMock = void 0;
var control_mock_1 = require("../control/control.mock");
var eventcontext_mock_1 = require("../../events/eventcontext/eventcontext.mock");
var array_helper_1 = require("../../../xrm-mock-generator/helpers/array.helper");
var uifocusable_mock_1 = require("../uifocusable/uifocusable.mock");
var uistandardelement_mock_1 = require("../uistandardelement/uistandardelement.mock");
var xrm_mock_generator_1 = require("../../../xrm-mock-generator/xrm-mock-generator");
var StandardControlMock = /** @class */ (function (_super) {
    __extends(StandardControlMock, _super);
    function StandardControlMock(components) {
        var _this = _super.call(this, components) || this;
        _this.disabled = components.disabled || false;
        _this.uiStandardElement = uistandardelement_mock_1.UiStandardElementMock.create(components.label || _this.name, components.visible);
        _this.uiFocusable = new uifocusable_mock_1.UiFocusableMock(components.hasFocus);
        _this.attribute = components.attribute;
        if (_this.attribute && _this.attribute.controls) {
            _this.attribute.controls.push(_this);
        }
        _this.notifications = [];
        _this.outChangedEventHandlers = [];
        return _this;
    }
    StandardControlMock.prototype.addNotification = function (notification) {
        this.notifications.push(notification);
    };
    /**
     * Fires the action event(s) of the first notification if it is a RECOMMENDATION notification level.
     * @returns true if it was able to apply the notification, false otherwise
     */
    StandardControlMock.prototype.applyNotification = function () {
        var _a, _b;
        if (this.notifications.length === 0) {
            return false;
        }
        var notification = this.notifications[0];
        if (((_a = notification.actions) === null || _a === void 0 ? void 0 : _a.length) > 0
            && notification.notificationLevel === "RECOMMENDATION"
            && ((_b = notification.actions[0].actions) === null || _b === void 0 ? void 0 : _b.length) > 0) {
            notification.actions[0].actions.forEach(function (action) { return action(); });
            return true;
        }
        return false;
    };
    StandardControlMock.prototype.clearNotification = function (uniqueId) {
        if (this.notifications.length === 0) {
            return false;
        }
        if (uniqueId) {
            var index = this.notifications.findIndex(function (n) { return n.uniqueId === uniqueId; });
            if (index > -1) {
                this.notifications.splice(index, 1);
            }
            return index > -1;
        }
        this.notifications.splice(0, 1);
        return true;
    };
    StandardControlMock.prototype.getDisabled = function () {
        return this.disabled;
    };
    StandardControlMock.prototype.getNotifications = function () {
        return this.notifications;
    };
    StandardControlMock.prototype.setDisabled = function (disabled) {
        this.disabled = disabled;
    };
    StandardControlMock.prototype.setNotification = function (message, uniqueId) {
        this.notifications = [];
        this.addNotification({
            notificationLevel: "ERROR",
            messages: [message],
            uniqueId: uniqueId,
        });
        return true;
    };
    StandardControlMock.prototype.getAttribute = function () {
        if (["subgrid", "iframe", "webresource"].indexOf(this.getControlType()) === -1) {
            return this.attribute;
        }
        else {
            throw new Error("control is not bound to an attribute because it is of type " + this.getControlType());
        }
    };
    StandardControlMock.prototype.getLabel = function () {
        return this.uiStandardElement.getLabel();
    };
    StandardControlMock.prototype.setLabel = function (label) {
        this.uiStandardElement.setLabel(label);
    };
    StandardControlMock.prototype.getVisible = function () {
        return this.uiStandardElement.getVisible();
    };
    StandardControlMock.prototype.setVisible = function (visible) {
        this.uiStandardElement.setVisible(visible);
    };
    StandardControlMock.prototype.setFocus = function () {
        this.uiFocusable.setFocus();
    };
    StandardControlMock.prototype.getOutputs = function () {
        throw new Error("Method not implemented.");
    };
    StandardControlMock.prototype.addOnOutputChange = function (handler) {
        this.outChangedEventHandlers.push(handler);
    };
    StandardControlMock.prototype.fireOnOutputChange = function () {
        if (this.outChangedEventHandlers.length) {
            return;
        }
        var globalContext = xrm_mock_generator_1.XrmMockGenerator.getEventContext();
        var context = new eventcontext_mock_1.EventContextMock(__assign(__assign({}, globalContext), { depth: globalContext.depth ? globalContext.depth + 1 : 1, eventSource: this }));
        for (var _i = 0, _a = this.outChangedEventHandlers; _i < _a.length; _i++) {
            var handler = _a[_i];
            handler.call(this, context);
        }
    };
    StandardControlMock.prototype.removeOnOutputChange = function (handler) {
        var index = (0, array_helper_1.findIndex)(this.outChangedEventHandlers, handler);
        this.outChangedEventHandlers.splice(index, 1);
    };
    return StandardControlMock;
}(control_mock_1.ControlMock));
exports.StandardControlMock = StandardControlMock;
//# sourceMappingURL=standardcontrol.mock.js.map