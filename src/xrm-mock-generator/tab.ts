import * as XrmMock from "../xrm-mock/index";
import ControlHelpers from "./helpers/control.helper";
import { ITabComponents } from "../xrm-mock/controls/tab/tab.mock";
import { ItemCollectionMock } from "../xrm-mock/collection/itemcollection/itemcollection.mock";
import { UiCanGetVisibleElementMock } from "../xrm-mock/controls/uicangetvisibleelement/uicangetvisibleelement.mock";
import { UiLabelElementMock } from "../xrm-mock/controls/uilabelelement/uilabelelement.mock";
import { UiStandardElementMock } from "../xrm-mock/controls/uistandardelement/uistandardelement.mock";

export default class Tab {
    /**
     * Creates a tab mock added to the XRM tabs collection.
     *  The tab will be set as parent in the given sections.
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
    public createTab(name?: string, label?: string, isVisible?: boolean, displayState?: Xrm.DisplayState, parent?: Xrm.Ui,
        			 sections?: Xrm.Collection.ItemCollection<Xrm.Controls.Section>): XrmMock.TabMock {
        const tabs = Xrm.Page.ui.tabs as ItemCollectionMock<Xrm.Controls.Tab>;

        if (!tabs) {
            throw new Error(`Couldn't find the tabs collection in the XRM object.`);
        }

		const tab = new XrmMock.TabMock({
				name: name,
				sections: sections,
				displayState: displayState,
				uiStandardElement: new UiStandardElementMock(new UiLabelElementMock(label),
					new UiCanGetVisibleElementMock(isVisible)),
				parent: parent || Xrm.Page.ui
			} as ITabComponents);

        if (sections) {
			ControlHelpers.setControlsParent(sections, tab);
        }

        tabs.push(tab);
        return tab;
    }
}
