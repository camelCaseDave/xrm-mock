/// <reference types="xrm" />
import * as XrmMock from "../xrm-mock/index";
export default class Section {
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
    createSection(name?: string, label?: string, isVisible?: boolean, parent?: Xrm.Controls.Tab, controls?: Xrm.Collection.ItemCollection<Xrm.Controls.Control>): XrmMock.SectionMock;
}
