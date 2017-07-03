"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SectionMock = (function () {
    function SectionMock(name, parent, uiStandardElement, controls) {
        this.name = name;
        this.parent = parent;
        this.uiStandardElement = uiStandardElement;
        this.controls = controls;
    }
    SectionMock.prototype.getName = function () {
        return this.name;
    };
    SectionMock.prototype.getParent = function () {
        return this.parent;
    };
    SectionMock.prototype.setVisible = function (visible) {
        this.uiStandardElement.setVisible(visible);
    };
    SectionMock.prototype.getVisible = function () {
        return this.uiStandardElement.getVisible();
    };
    SectionMock.prototype.getLabel = function () {
        return this.uiStandardElement.getLabel();
    };
    SectionMock.prototype.setLabel = function (label) {
        this.uiStandardElement.setLabel(label);
    };
    return SectionMock;
}());
exports.SectionMock = SectionMock;
