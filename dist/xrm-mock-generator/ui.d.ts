/// <reference types="xrm" />
import * as XrmMock from "../xrm-mock";
export default class Ui {
    static createUi(): XrmMock.UiMock;
    static createLabelElement(label: string): XrmMock.UiLabelElementMock;
    static createCanGetVisibleElement(isVisible: boolean): XrmMock.UiCanGetVisibleElementMock;
    static createStandardElement(labelElement: Xrm.Page.UiLabelElement, visibleElement: Xrm.Page.UiCanGetVisibleElement): XrmMock.UiStandardElementMock;
}
