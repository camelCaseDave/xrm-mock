/// <reference types="xrm" />
export declare class UiStandardElementMock implements Xrm.Page.UiStandardElement {
    static create(label: string, visible?: boolean): UiStandardElementMock;
    uiLabelElement: Xrm.Page.UiLabelElement;
    uiCanGetVisibleElement: Xrm.Page.UiCanGetVisibleElement;
    constructor(uiLabelElement: Xrm.Page.UiLabelElement, uiCanGetVisibleElement: Xrm.Page.UiCanGetVisibleElement);
    setVisible(visible: boolean): void;
    getVisible(): boolean;
    getLabel(): string;
    setLabel(label: string): void;
}
