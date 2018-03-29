/// <reference types="xrm" />
import { ControlMock } from "./../control/control.mock";
export declare class StandardControlMock implements Xrm.Page.StandardControl {
    disabled: boolean;
    control: ControlMock;
    uiStandardElement: Xrm.Page.UiStandardElement;
    uiFocusable: Xrm.Page.UiFocusable;
    attribute: Xrm.Page.Attribute;
    constructor(components: IStandardControlComponents);
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
export interface IStandardControlComponents {
    control: ControlMock;
    attribute: Xrm.Page.Attribute;
    disabled?: boolean;
    uiStandardElement?: Xrm.Page.UiStandardElement;
    uiFocusable?: Xrm.Page.UiFocusable;
}
