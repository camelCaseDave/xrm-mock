"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TabMock = /** @class */ (function () {
    function TabMock(components) {
        this.uiStandardElement = components.uiStandardElement;
        this.uiFocusableElement = components.uiFocusableElement;
        this.name = components.name;
        this.parent = components.parent;
        this.displayState = components.displayState;
        this.sections = components.sections;
    }
    TabMock.prototype.getDisplayState = function () {
        return this.displayState;
    };
    TabMock.prototype.getName = function () {
        return this.name;
    };
    TabMock.prototype.getParent = function () {
        return this.parent;
    };
    TabMock.prototype.setDisplayState = function (displayState) {
        this.displayState = displayState;
    };
    TabMock.prototype.setVisible = function (visible) {
        return this.uiStandardElement.setVisible(visible);
    };
    TabMock.prototype.getVisible = function () {
        return this.uiStandardElement.getVisible();
    };
    TabMock.prototype.getLabel = function () {
        return this.uiStandardElement.getLabel();
    };
    TabMock.prototype.setLabel = function (label) {
        return this.uiStandardElement.setLabel(label);
    };
    TabMock.prototype.setFocus = function () {
        return this.uiFocusableElement.setFocus();
    };
    return TabMock;
}());
exports.TabMock = TabMock;
//# sourceMappingURL=tab.mock.js.map