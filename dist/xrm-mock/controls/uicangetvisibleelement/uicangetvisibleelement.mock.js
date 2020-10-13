"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UiCanGetVisibleElementMock = void 0;
var UiCanGetVisibleElementMock = /** @class */ (function () {
    function UiCanGetVisibleElementMock(isVisible) {
        this.isVisible = isVisible;
    }
    UiCanGetVisibleElementMock.prototype.getVisible = function () {
        return this.isVisible;
    };
    return UiCanGetVisibleElementMock;
}());
exports.UiCanGetVisibleElementMock = UiCanGetVisibleElementMock;
//# sourceMappingURL=uicangetvisibleelement.mock.js.map