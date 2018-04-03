/// <reference types="xrm" />
export declare class UiStandardElementMock implements Xrm.Page.UiStandardElement {
    uiLabelElement: Xrm.Page.UiLabelElement;
    uiCanGetVisibleElement: Xrm.Page.UiCanGetVisibleElement;
    static create(label: string, visible?: boolean): UiStandardElementMock;
    constructor(uiLabelElement: Xrm.Page.UiLabelElement, uiCanGetVisibleElement: Xrm.Page.UiCanGetVisibleElement);
    setVisible(visible: boolean): void;
    getVisible(): boolean;
    getLabel(): string;
    setLabel(label: string): void;
}
