"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UiMock = (function () {
    function UiMock(components) {
        this.process = components.process;
        this.controls = components.controls;
        this.formSelector = components.formSelector;
        this.navigation = components.navigation;
        this.tabs = components.tabs;
        this.quickForms = components.quickForms;
    }
    UiMock.prototype.setFormNotification = function (message, level, uniqueId) {
        var formNotificationAlreadyExists = false;
        if (this.formNotifications && this.formNotifications.length) {
            formNotificationAlreadyExists = function (notifications) {
                var matchingNotificationsById = notifications.filter(function (item) {
                    return item.uniqueId === uniqueId;
                });
                return matchingNotificationsById && matchingNotificationsById.length ? true : false;
            }(this.formNotifications);
        }
        if (formNotificationAlreadyExists) {
            return false;
        }
        else {
            if (this.formNotifications && this.formNotifications.length) {
                this.formNotifications.push({ message: message, level: level, uniqueId: uniqueId });
            }
            else {
                this.formNotifications = [{ message: message, level: level, uniqueId: uniqueId }];
            }
            return true;
        }
    };
    UiMock.prototype.clearFormNotification = function (uniqueId) {
        if (this.formNotifications && this.formNotifications.length) {
            var matchingNotificationsById = this.formNotifications.filter(function (item) {
                return item.uniqueId === uniqueId;
            });
            if (matchingNotificationsById && matchingNotificationsById.length) {
                var index = this.formNotifications.indexOf(matchingNotificationsById[0]);
                this.formNotifications.splice(index, 1);
                return true;
            }
            else {
                return false;
            }
        }
        return false;
    };
    UiMock.prototype.close = function () {
        throw ('close not implemented');
    };
    UiMock.prototype.getFormType = function () {
        if (this.formSelector) {
            var currentForm = this.formSelector.getCurrentItem();
            if (currentForm) {
                return currentForm.formType;
            }
        }
        else {
            return 0 /* Undefined */;
        }
    };
    UiMock.prototype.getViewPortHeight = function () {
        throw ('getViewPortHeight not implemented');
    };
    UiMock.prototype.getViewPortWidth = function () {
        throw ('getViewPortWidth not implemented');
    };
    UiMock.prototype.refreshRibbon = function () {
        throw ('refreshRibbon not implemented');
    };
    return UiMock;
}());
exports.UiMock = UiMock;
