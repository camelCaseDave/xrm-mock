/// <reference types="xrm" />
export declare class NumberControlMock implements Xrm.Page.NumberControl {
    autoLookupControl: Xrm.Page.AutoLookupControl;
    constructor(autoLookupControl: Xrm.Page.AutoLookupControl);
    getValue(): string;
    hideAutoComplete(): void;
    showAutoComplete(resultSet: Xrm.Page.AutoCompleteResultSet): void;
    getAttribute(): Xrm.Page.NumberAttribute;
    clearNotification(uniqueId?: string): boolean;
    getDisabled(): boolean;
    setDisabled(disabled: boolean): void;
    setNotification(message: string, uniqueId: string): boolean;
    getControlType(): Xrm.Page.ControlType | string;
    getName(): string;
    getParent(): Xrm.Page.Section;
    setVisible(visible: boolean): void;
    getLabel(): string;
    setLabel(label: string): void;
    getVisible(): boolean;
    setFocus(): void;
    addOnKeyPress(handler: Xrm.Page.ContextSensitiveHandler): void;
    fireOnKeyPress(): void;
    removeOnKeyPress(handler: Xrm.Page.ContextSensitiveHandler): void;
}
