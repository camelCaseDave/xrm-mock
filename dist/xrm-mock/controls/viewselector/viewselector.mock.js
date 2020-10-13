"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewSelectorMock = void 0;
var ViewSelectorMock = /** @class */ (function () {
    function ViewSelectorMock(isVisible) {
        this.visible = isVisible;
    }
    ViewSelectorMock.prototype.getCurrentView = function () {
        return this.currentView;
    };
    ViewSelectorMock.prototype.setCurrentView = function (viewSelectorItem) {
        this.currentView = viewSelectorItem;
    };
    ViewSelectorMock.prototype.isVisible = function () {
        return this.visible;
    };
    return ViewSelectorMock;
}());
exports.ViewSelectorMock = ViewSelectorMock;
//# sourceMappingURL=viewselector.mock.js.map