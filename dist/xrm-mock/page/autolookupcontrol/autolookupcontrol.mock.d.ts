/// <reference types="xrm" />
import { AttributeMock, AttributeReturnType } from "./../attribute/attribute.mock";
import { IAttStandardControlComponents, IStandardControlComponents, StandardControlMock } from "./../standardcontrol/standardcontrol.mock";
import { UiKeyPressableMock } from "./../uikeypressable/uikeypressable.mock";
export declare class AutoLookupControlMock<TControl extends AutoLookupControlMock<TControl, TAttribute, TValue>, TAttribute extends AttributeMock<TControl, TValue>, TValue extends AttributeReturnType> extends StandardControlMock<TControl, TAttribute, TValue> implements Xrm.Page.AutoLookupControl {
    uiKeyPressable: UiKeyPressableMock;
    /**
     * Allows for testing the value typed into the control, but not yet saved
     */
    uncommittedText: string;
    constructor(components: IAutoLookupControlComponents<TControl, TAttribute, TValue>);
    getValue(): string;
    hideAutoComplete(): void;
    showAutoComplete(resultSet: Xrm.Page.AutoCompleteResultSet): void;
    addOnKeyPress(handler: Xrm.Page.ContextSensitiveHandler): void;
    fireOnKeyPress(): void;
    removeOnKeyPress(handler: Xrm.Page.ContextSensitiveHandler): void;
}
export interface IAutoLookupControlComponents<TControl extends AutoLookupControlMock<TControl, TAttribute, TValue>, TAttribute extends AttributeMock<TControl, TValue>, TValue extends AttributeReturnType> extends IStandardControlComponents<TControl, TAttribute, TValue>, IAttAutoLookupControlComponents<TControl, TAttribute, TValue> {
}
export interface IAttAutoLookupControlComponents<TControl extends AutoLookupControlMock<TControl, TAttribute, TValue>, TAttribute extends AttributeMock<TControl, TValue>, TValue extends AttributeReturnType> extends IAttStandardControlComponents<TControl, TAttribute, TValue> {
    keyPressHandlers?: Xrm.Page.ContextSensitiveHandler[];
    /**
     * Auto Lookup allows for getting the value that has currently been typed in,
     * but not necessarily saved to the attribute
     */
    uncommittedText?: string;
}
