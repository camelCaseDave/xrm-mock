"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uicangetvisibleelement_mock_1 = require("../xrm-mock/controls/uicangetvisibleelement/uicangetvisibleelement.mock");
var uilabelelement_mock_1 = require("../xrm-mock/controls/uilabelelement/uilabelelement.mock");
var uistandardelement_mock_1 = require("../xrm-mock/controls/uistandardelement/uistandardelement.mock");
var XrmMock = require("../xrm-mock/index");
var control_helper_1 = require("./helpers/control.helper");
var Tab = /** @class */ (function () {
    function Tab() {
    }
    /**
     * Creates a tab mock added to the XRM tabs collection.
     * The tab will be set as parent in the given sections.
     * Author: Yagasoft
     *
     * @param {string} [name] Logical name of the tab.
     * @param {string} [label] Form label of the tab.
     * @param {boolean} [isVisible] Is the tab visible by default?
     * @param {Xrm.DisplayState} [displayState] Is the tab collapsed or expanded?
     * @param {Xrm.ui} [parent] Parent UI.
     * @param {Xrm.Collection.ItemCollection<Xrm.Controls.Section>} [sections] List of sections in the tab. Created by using the Mock Generator.
     * @returns {XrmMock.TabMock} Tab mock.
     * @memberof Tab
     */
    Tab.prototype.createTab = function (name, label, isVisible, displayState, parent, sections) {
        var tabs = Xrm.Page.ui.tabs;
        if (!tabs) {
            throw new Error("Couldn't find the tabs collection in the XRM object.");
        }
        var tabComponents = {
            displayState: displayState,
            name: name,
            parent: parent || Xrm.Page.ui,
            sections: sections,
            uiStandardElement: new uistandardelement_mock_1.UiStandardElementMock(new uilabelelement_mock_1.UiLabelElementMock(label), new uicangetvisibleelement_mock_1.UiCanGetVisibleElementMock(isVisible)),
        };
        var tab = new XrmMock.TabMock(tabComponents);
        if (sections) {
            control_helper_1.default.setControlsParent(sections, tab);
        }
        tabs.push(tab);
        return tab;
    };
    return Tab;
}());
exports.default = Tab;
//# sourceMappingURL=tab.js.map