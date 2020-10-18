"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UiMock = void 0;
var itemcollection_mock_1 = require("../collection/itemcollection/itemcollection.mock");
var UiMock = /** @class */ (function () {
    function UiMock(components) {
        this.process = components.process;
        this.controls = components.controls || new itemcollection_mock_1.ItemCollectionMock([]);
        this.formSelector = components.formSelector;
        this.navigation = components.navigation;
        this.tabs = components.tabs || new itemcollection_mock_1.ItemCollectionMock([]);
        this.quickForms = components.quickForms || new itemcollection_mock_1.ItemCollectionMock([]);
    }
    UiMock.prototype.setFormNotification = function (message, level, uniqueId) {
        var formNotificationAlreadyExists = false;
        if (this.formNotifications && this.formNotifications.length) {
            formNotificationAlreadyExists = this._getFormNotificationExists(this.formNotifications, uniqueId);
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
        throw new Error(("close not implemented"));
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
        throw new Error(("getViewPortHeight not implemented"));
    };
    UiMock.prototype.getViewPortWidth = function () {
        throw new Error(("getViewPortWidth not implemented"));
    };
    UiMock.prototype.refreshRibbon = function () {
        throw new Error(("refreshRibbon not implemented"));
    };
    UiMock.prototype.setFormEntityName = function (arg) {
        throw new Error(("setFormEntityName not implemented"));
    };
    UiMock.prototype.addOnLoad = function (handler) {
        throw new Error(("addOnLoad not implemented"));
    };
    UiMock.prototype.removeOnLoad = function (handler) {
        throw new Error(("removeOnLoad not implemented"));
    };
    UiMock.prototype._getFormNotificationExists = function (notifications, uniqueId) {
        var matchingNotificationsById = notifications.filter(function (item) {
            return item.uniqueId === uniqueId;
        });
        return matchingNotificationsById && matchingNotificationsById.length ? true : false;
    };
    return UiMock;
}());
exports.UiMock = UiMock;
//# sourceMappingURL=ui.mock.js.map