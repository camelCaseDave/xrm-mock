"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabMock = void 0;
var array_helper_1 = require("../../../xrm-mock-generator/helpers/array.helper");
var itemcollection_mock_1 = require("../../collection/itemcollection/itemcollection.mock");
var uicangetvisibleelement_mock_1 = require("../uicangetvisibleelement/uicangetvisibleelement.mock");
var uifocusable_mock_1 = require("../uifocusable/uifocusable.mock");
var uilabelelement_mock_1 = require("../uilabelelement/uilabelelement.mock");
var uistandardelement_mock_1 = require("../uistandardelement/uistandardelement.mock");
var TabMock = /** @class */ (function () {
    function TabMock(components) {
        var _this = this;
        this.uiStandardElement = components.uiStandardElement
            || new uistandardelement_mock_1.UiStandardElementMock(new uilabelelement_mock_1.UiLabelElementMock(components.name), new uicangetvisibleelement_mock_1.UiCanGetVisibleElementMock(true));
        this.uiFocusableElement = components.uiFocusableElement || new uifocusable_mock_1.UiFocusableMock(false);
        this.name = components.name;
        this.parent = components.parent;
        this.displayState = components.displayState || "expanded";
        this.tabStateChangeHandlers = components.tabStateChangeHandlers || [];
        this.sections = components.sections || new itemcollection_mock_1.ItemCollectionMock([]);
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
    TabMock.prototype.addTabStateChange = function (handler) {
        this.tabStateChangeHandlers.push(handler);
    };
    TabMock.prototype.removeTabStateChange = function (handler) {
        var index = array_helper_1.findIndex(this.tabStateChangeHandlers, handler);
        this.tabStateChangeHandlers.splice(index, 1);
    };
    return TabMock;
}());
exports.TabMock = TabMock;
//# sourceMappingURL=tab.mock.js.map