"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UiLabelElementMock = (function () {
    function UiLabelElementMock(label) {
        this.label = label;
    }
    UiLabelElementMock.prototype.getLabel = function () {
        return this.label;
    };
    UiLabelElementMock.prototype.setLabel = function (label) {
        this.label = label;
    };
    return UiLabelElementMock;
}());
exports.UiLabelElementMock = UiLabelElementMock;
