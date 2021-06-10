"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uicangetvisibleelement_mock_1 = require("../xrm-mock/controls/uicangetvisibleelement/uicangetvisibleelement.mock");
var uilabelelement_mock_1 = require("../xrm-mock/controls/uilabelelement/uilabelelement.mock");
var uistandardelement_mock_1 = require("../xrm-mock/controls/uistandardelement/uistandardelement.mock");
var XrmMock = require("../xrm-mock/index");
var control_helper_1 = require("./helpers/control.helper");
var Section = /** @class */ (function () {
    function Section() {
    }
    /**
     * Creates a section mock added to the XRM parent tab collection.
     * The section will be added to the parent tab given.
     * The section will be set as parent in the given controls.
     * Author: Yagasoft
     *
     * @param {string} [name] Logical name of the section.
     * @param {string} [label] Form label of the section.
     * @param {boolean} [isVisible] Is the section visible by default?
     * @param {Xrm.Controls.Tab} [parent] Parent tab.
     * @param {Xrm.Collection.ItemCollection<Xrm.Controls.Control>} [controls] List of controls in the section. Created by using the Mock Generator.
     * @returns {XrmMock.SectionMock} Section mock.
     * @memberof Section
     */
    Section.prototype.createSection = function (name, label, isVisible, parent, controls) {
        var section = new XrmMock.SectionMock(name, parent, new uistandardelement_mock_1.UiStandardElementMock(new uilabelelement_mock_1.UiLabelElementMock(label), new uicangetvisibleelement_mock_1.UiCanGetVisibleElementMock(isVisible)), controls);
        if (controls) {
            control_helper_1.default.setControlsParent(controls, section);
        }
        return section;
    };
    return Section;
}());
exports.default = Section;
//# sourceMappingURL=section.js.map