"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LookupControlMock = (function () {
    function LookupControlMock(standardControl, filters, views, preSearchHandlers) {
        this.preSearchHandlers = [];
        this.standardControl = standardControl;
        this.views = views;
        this.filters = filters;
        this.preSearchHandlers = preSearchHandlers || [];
        if (views && views.length > 1) {
            var numberOfDefaultViews = 0;
            for (var i = 0; i < views.length; i++) {
                if (numberOfDefaultViews > 1) {
                    throw ('Lookup Control cannot have more than one default view.');
                }
                if (views[i].isDefault) {
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
            viewId: viewId,
            entityName: entityName,
            viewDisplayName: viewDisplayName,
            fetchXml: fetchXml,
            layoutXml: layoutXml,
            isDefault: isDefault
        });
    };
    LookupControlMock.prototype.getAttribute = function () {
        return this.standardControl.getAttribute();
    };
    LookupControlMock.prototype.getDefaultView = function () {
        for (var i = 0; i < this.views.length; i++) {
            if (this.views[i].isDefault) {
                return this.views[i].viewId;
            }
        }
    };
    LookupControlMock.prototype.removePreSearch = function (handler) {
        throw ('remove presearch not implemented');
        //if (handler && this.preSearchHandlers) {
        //    let indexToRemove = -1;
        //
        //    for (var i = 0; i < this.preSearchHandlers.length; i++) {
        //        if (handler === this.preSearchHandlers[i]) {
        //            indexToRemove = i;
        //        }
        //    }
        //
        //    if (indexToRemove > -1) {
        //        this.preSearchHandlers.splice(indexToRemove, 1);
        //    }
        //}
    };
    LookupControlMock.prototype.setDefaultView = function (viewGuid) {
        for (var i = 0; i < this.views.length; i++) {
            this.views[i].isDefault = this.views[i].viewId === viewGuid;
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
