/// <reference types="xrm" />
export declare class DateControlMock implements Xrm.Page.DateControl {
    standardControl: Xrm.Page.StandardControl;
    constructor(standardControl: Xrm.Page.StandardControl);
    getShowTime(): boolean;
    setShowTime(showTimeValue: boolean): void;
    clearNotification(uniqueId?: string): boolean;
    getDisabled(): boolean;
    setDisabled(disabled: boolean): void;
    setNotification(message: string, uniqueId: string): boolean;
    getAttribute(): Xrm.Page.DateAttribute;
    getControlType(): Xrm.Page.ControlType | string;
    getName(): string;
    getParent(): Xrm.Page.Section;
    setVisible(visible: boolean): void;
    getLabel(): string;
    setLabel(label: string): void;
    getVisible(): boolean;
    setFocus(): void;
}
