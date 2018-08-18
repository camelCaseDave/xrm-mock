"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var itemcollection_mock_1 = require("../../collection/itemcollection/itemcollection.mock");
var uicangetvisibleelement_mock_1 = require("../uicangetvisibleelement/uicangetvisibleelement.mock");
var uifocusable_mock_1 = require("../uifocusable/uifocusable.mock");
var uilabelelement_mock_1 = require("../uilabelelement/uilabelelement.mock");
var uistandardelement_mock_1 = require("../uistandardelement/uistandardelement.mock");
var TabMock = /** @class */ (function () {
    function TabMock(components) {
        var _this = this;
        // [Yagasoft | 2018-08-05 | Added] default state values
        this.uiStandardElement = components.uiStandardElement
            || new uistandardelement_mock_1.UiStandardElementMock(new uilabelelement_mock_1.UiLabelElementMock(components.name), new uicangetvisibleelement_mock_1.UiCanGetVisibleElementMock(true));
        this.uiFocusableElement = components.uiFocusableElement || new uifocusable_mock_1.UiFocusableMock(false);
        this.name = components.name;
        this.parent = components.parent;
        this.displayState = components.displayState || "expanded";
        // [Yagasoft | 2018-08-05 | Added] sections definition
        this.sections = components.sections || new itemcollection_mock_1.ItemCollectionMock([]);
        // [Yagasoft | 2018-08-09 | Added] set sections' parent
        this.sections.forEach(function (section, index) {
            var sectionMock = section;
            if (sectionMock) {
                sectionMock.parent = _this;
            }
        });
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