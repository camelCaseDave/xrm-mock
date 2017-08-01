/// <reference types="xrm" />
import { StandardControlMock } from '../../../dist/page/standardcontrol/standardcontrol.mock';
export declare class AutoLookupControlMock implements Xrm.Page.AutoLookupControl {
    standardControl: StandardControlMock;
    uiKeyPressable: Xrm.Page.UiKeyPressable;
    constructor(standardControl: StandardControlMock, uiKeyPressable: Xrm.Page.UiKeyPressable);
    getValue(): string;
    hideAutoComplete(): void;
    showAutoComplete(resultSet: Xrm.Page.AutoCompleteResultSet): void;
    clearNotification(uniqueId?: string): boolean;
    getDisabled(): boolean;
    setDisabled(disabled: boolean): void;
    setNotification(message: string, uniqueId: string): boolean;
    getAttribute(): Xrm.Page.Attribute;
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
