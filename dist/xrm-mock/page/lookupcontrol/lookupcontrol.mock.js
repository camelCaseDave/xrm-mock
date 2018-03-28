"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LookupControlMock = /** @class */ (function () {
    function LookupControlMock(standardControl, filters, views, preSearchHandlers) {
        this.preSearchHandlers = [];
        this.standardControl = standardControl;
        this.views = views;
        this.filters = filters;
        this.preSearchHandlers = preSearchHandlers || [];
        if (views && views.length > 1) {
            var numberOfDefaultViews = 0;
            for (var _i = 0, views_1 = views; _i < views_1.length; _i++) {
                var view = views_1[_i];
                if (numberOfDefaultViews > 1) {
                    throw new Error(("Lookup Control cannot have more than one default view."));
                }
                if (view.isDefault) {
                    numberOfDefaultViews++;
                }
            }
        }
    }
    LookupControlMock.prototype.addPreSearch = function (handler) {
        this.preSearchHandlers.push(handler);
    };
    LookupControlMock.prototype.addCustomFilter = function (filter, entityLogicalName) {
        this.filters.push({ filter: filter, entityLogicalName: entityLogicalName });
    };
    LookupControlMock.prototype.addCustomView = function (viewId, entityName, viewDisplayName, fetchXml, layoutXml, isDefault) {
        // TODO check if default view already exists.
        this.views.push({
            entityName: entityName,
            fetchXml: fetchXml,
            isDefault: isDefault,
            layoutXml: layoutXml,
            viewDisplayName: viewDisplayName,
            viewId: viewId,
        });
    };
    LookupControlMock.prototype.getAttribute = function () {
        return this.standardControl.getAttribute();
    };
    LookupControlMock.prototype.getDefaultView = function () {
        for (var _i = 0, _a = this.views; _i < _a.length; _i++) {
            var view = _a[_i];
            if (view.isDefault) {
                return view.viewId;
            }
        }
    };
    LookupControlMock.prototype.removePreSearch = function (handler) {
        throw new Error("remove presearch not implemented");
    };
    LookupControlMock.prototype.setDefaultView = function (viewGuid) {
        for (var _i = 0, _a = this.views; _i < _a.length; _i++) {
            var view = _a[_i];
            view.isDefault = view.viewId === viewGuid;
        }
    };
    LookupControlMock.prototype.clearNotification = function (uniqueId) {
        return this.standardControl.clearNotification(uniqueId);
    };
    LookupControlMock.prototype.getDisabled = function () {
        return this.standardControl.getDisabled();
    };
    LookupControlMock.prototype.setDisabled = function (disabled) {
        this.standardControl.setDisabled(disabled);
    };
    LookupControlMock.prototype.setNotification = function (message, uniqueId) {
        return this.standardControl.setNotification(message, uniqueId);
    };
    LookupControlMock.prototype.getControlType = function () {
        return this.standardControl.getControlType();
    };
    LookupControlMock.prototype.getName = function () {
        return this.standardControl.getName();
    };
    LookupControlMock.prototype.getParent = function () {
        return this.standardControl.getParent();
    };
    LookupControlMock.prototype.getLabel = function () {
        return this.standardControl.getLabel();
    };
    LookupControlMock.prototype.setLabel = function (label) {
        this.standardControl.setLabel(label);
    };
    LookupControlMock.prototype.getVisible = function () {
        return this.standardControl.getVisible();
    };
    LookupControlMock.prototype.setVisible = function (visible) {
        this.standardControl.setVisible(visible);
    };
    LookupControlMock.prototype.setFocus = function () {
        this.standardControl.setFocus();
    };
    return LookupControlMock;
}());
exports.LookupControlMock = LookupControlMock;
