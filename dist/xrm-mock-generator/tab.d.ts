/// <reference types="xrm" />
import * as XrmMock from "../xrm-mock/index";
export default class Tab {
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
    createTab(name?: string, label?: string, isVisible?: boolean, displayState?: Xrm.DisplayState, parent?: Xrm.Ui, sections?: Xrm.Collection.ItemCollection<Xrm.Controls.Section>): XrmMock.TabMock;
}
