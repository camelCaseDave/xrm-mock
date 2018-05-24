/// <reference types="xrm" />
export declare class UiStandardElementMock implements Xrm.Controls.UiStandardElement {
    static create(label: string, visible?: boolean): UiStandardElementMock;
    uiLabelElement: Xrm.Controls.UiLabelElement;
    uiCanGetVisibleElement: Xrm.Controls.UiCanGetVisibleElement;
    constructor(uiLabelElement: Xrm.Controls.UiLabelElement, uiCanGetVisibleElement: Xrm.Controls.UiCanGetVisibleElement);
    setVisible(visible: boolean): void;
    getVisible(): boolean;
    getLabel(): string;
    setLabel(label: string): void;
}
