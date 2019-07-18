"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ViewSelectorMock = /** @class */ (function () {
    function ViewSelectorMock(isVisible) {
        this.visible = isVisible;
    }
    ViewSelectorMock.prototype.getCurrentView = function () {
        return this.currentView;
    };
    ViewSelectorMock.prototype.isVisible = function () {
        return this.visible;
    };
    ViewSelectorMock.prototype.setCurrentView = function (viewSelectorItem) {
        this.currentView = viewSelectorItem;
    };
    return ViewSelectorMock;
}());
exports.ViewSelectorMock = ViewSelectorMock;
//# sourceMappingURL=viewselector.mock.js.map