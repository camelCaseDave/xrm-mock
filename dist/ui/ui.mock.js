"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UiMock = (function () {
    function UiMock(process, controls, formSelector, navigation, tabs, quickForms) {
        this.process = process;
        this.controls = controls;
        this.formSelector = formSelector;
        this.navigation = navigation;
        this.tabs = tabs;
        this.quickForms = quickForms;
    }
    UiMock.prototype.setFormNotification = function (message, level, uniqueId) {
        throw ('setFormNotification not implemented');
    };
    UiMock.prototype.clearFormNotification = function (uniqueId) {
        throw ('clearFormNotification not implemented');
    };
    UiMock.prototype.close = function () {
    };
    UiMock.prototype.getFormType = function () {
        throw ('getFormType not implemented');
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
