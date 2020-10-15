"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UiStandardElementMock = void 0;
var uicangetvisibleelement_mock_1 = require("../uicangetvisibleelement/uicangetvisibleelement.mock");
var uilabelelement_mock_1 = require("../uilabelelement/uilabelelement.mock");
var UiStandardElementMock = /** @class */ (function () {
    function UiStandardElementMock(uiLabelElement, uiCanGetVisibleElement) {
        this.uiLabelElement = uiLabelElement;
        this.uiCanGetVisibleElement = uiCanGetVisibleElement;
    }
    UiStandardElementMock.create = function (label, visible) {
        if (visible === void 0) { visible = true; }
        return new UiStandardElementMock(new uilabelelement_mock_1.UiLabelElementMock(label), new uicangetvisibleelement_mock_1.UiCanGetVisibleElementMock(visible));
    };
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
//# sourceMappingURL=uistandardelement.mock.js.map