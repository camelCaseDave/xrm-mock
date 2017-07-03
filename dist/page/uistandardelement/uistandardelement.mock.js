"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UiStandardElementMock = (function () {
    function UiStandardElementMock(uiLabelElement, uiCanGetVisibleElement) {
        this.uiLabelElement = uiLabelElement;
        this.uiCanGetVisibleElement = uiCanGetVisibleElement;
    }
    UiStandardElementMock.prototype.setVisible = function (visible) {
        this.uiCanGetVisibleElement.getVisible = function () { return visible; };
    };
    UiStandardElementMock.prototype.getVisible = function () {
        return this.uiCanGetVisibleElement.getVisible();
    };
    UiStandardElementMock.prototype.getLabel = function () {
        return this.uiLabelElement.getLabel();
    };
    UiStandardElementMock.prototype.setLabel = function (label) {
        this.uiLabelElement.setLabel(label);
    };
    return UiStandardElementMock;
}());
exports.UiStandardElementMock = UiStandardElementMock;
