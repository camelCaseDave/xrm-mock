"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionMock = void 0;
var itemcollection_mock_1 = require("../../collection/itemcollection/itemcollection.mock");
var uicangetvisibleelement_mock_1 = require("../uicangetvisibleelement/uicangetvisibleelement.mock");
var uilabelelement_mock_1 = require("../uilabelelement/uilabelelement.mock");
var uistandardelement_mock_1 = require("../uistandardelement/uistandardelement.mock");
var SectionMock = /** @class */ (function () {
    function SectionMock(name, parent, uiStandardElement, controls) {
        this.name = name;
        this.parent = parent;
        if (this.parent && this.parent.sections.get(name) == null) {
            var sections = this.parent.sections;
            if (sections) {
                sections.push(this);
            }
        }
        this.uiStandardElement = uiStandardElement
            || new uistandardelement_mock_1.UiStandardElementMock(new uilabelelement_mock_1.UiLabelElementMock(name), new uicangetvisibleelement_mock_1.UiCanGetVisibleElementMock(true));
        this.controls = controls || new itemcollection_mock_1.ItemCollectionMock();
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
//# sourceMappingURL=section.mock.js.map