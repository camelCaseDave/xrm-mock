/// <reference types="xrm" />
export declare class StandardControlMock implements Xrm.Page.StandardControl {
    disabled: boolean;
    control: Xrm.Page.Control;
    uiStandardElement: Xrm.Page.UiStandardElement;
    uiFocusable: Xrm.Page.UiFocusable;
    attribute: Xrm.Page.Attribute;
    constructor(control: Xrm.Page.Control, attribute: Xrm.Page.Attribute, disabled: boolean, uiStandardElement: Xrm.Page.UiStandardElement, uiFocusable: Xrm.Page.UiFocusable);
    clearNotification(uniqueId?: string): boolean;
    getDisabled(): boolean;
    setDisabled(disabled: boolean): void;
    setNotification(message: string, uniqueId: string): boolean;
    getAttribute(): Xrm.Page.Attribute;
    getControlType(): Xrm.Page.ControlType | string;
    getName(): string;
    getParent(): Xrm.Page.Section;
    getLabel(): string;
    setLabel(label: string): void;
    getVisible(): boolean;
    setVisible(visible: boolean): void;
    setFocus(): void;
}
