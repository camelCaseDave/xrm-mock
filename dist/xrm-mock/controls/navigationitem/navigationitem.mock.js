"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigationItemMock = void 0;
var NavigationItemMock = /** @class */ (function () {
    function NavigationItemMock(id, standardElement, focusable) {
        this.id = id;
        this.standardElement = standardElement;
        this.focusable = focusable;
    }
    NavigationItemMock.prototype.setVisible = function (visible) {
        return this.standardElement.setVisible(visible);
    };
    NavigationItemMock.prototype.getVisible = function () {
        return this.standardElement.getVisible();
    };
    NavigationItemMock.prototype.getLabel = function () {
        return this.standardElement.getLabel();
    };
    NavigationItemMock.prototype.setLabel = function (label) {
        return this.standardElement.setLabel(label);
    };
    NavigationItemMock.prototype.setFocus = function () {
        return this.focusable.setFocus();
    };
    NavigationItemMock.prototype.getId = function () {
        return this.id;
    };
    return NavigationItemMock;
}());
exports.NavigationItemMock = NavigationItemMock;
//# sourceMappingURL=navigationitem.mock.js.map