"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uicangetvisibleelement_mock_1 = require("../uicangetvisibleelement/uicangetvisibleelement.mock");
var uilabelelement_mock_1 = require("../uilabelelement/uilabelelement.mock");
var uistandardelement_mock_1 = require("../uistandardelement/uistandardelement.mock");
var SectionMock = /** @class */ (function () {
    // [Yagasoft | 2018-08-09 | Changed] made the parent optional, in case the user wants to build it through a single constructor
    function SectionMock(name, parent, uiStandardElement, controls) {
        this.name = name;
        this.parent = parent;
        // [Yagasoft | 2018-08-09 | Added] add section to parent
        if (this.parent && this.parent.sections.get(name) == null) {
            var sections = this.parent.sections;
            if (sections) {
                sections.push(this);
            }
        }
        // [Yagasoft | 2018-08-05 | Added] default state values
        this.uiStandardElement = uiStandardElement
            || new uistandardelement_mock_1.UiStandardElementMock(new uilabelelement_mock_1.UiLabelElementMock(name), new uicangetvisibleelement_mock_1.UiCanGetVisibleElementMock(true));
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
//# sourceMappingURL=section.mock.js.map