/// <reference types="xrm" />
import { AttributeMock, AttributeReturnType } from "../../attributes/attribute/attribute.mock";
import { IAttStandardControlComponents, IStandardControlComponents, StandardControlMock } from "../standardcontrol/standardcontrol.mock";
import { UiKeyPressableMock } from "../uikeypressable/uikeypressable.mock";
export declare class AutoLookupControlMock<TControl extends AutoLookupControlMock<TControl, TAttribute, TValue>, TAttribute extends AttributeMock<TControl, TValue>, TValue extends AttributeReturnType> extends StandardControlMock<TControl, TAttribute, TValue> implements Xrm.Controls.AutoLookupControl {
    uiKeyPressable: UiKeyPressableMock;
    /**
     * Allows for testing the value typed into the control, but not yet saved
     */
    uncommittedText: string;
    constructor(components: IAutoLookupControlComponents<TControl, TAttribute, TValue>);
    getValue(): string;
    hideAutoComplete(): void;
    showAutoComplete(resultSet: Xrm.Controls.AutoCompleteResultSet): void;
    addOnKeyPress(handler: Xrm.Events.ContextSensitiveHandler): void;
    fireOnKeyPress(): void;
    removeOnKeyPress(handler: Xrm.Events.ContextSensitiveHandler): void;
}
export interface IAutoLookupControlComponents<TControl extends AutoLookupControlMock<TControl, TAttribute, TValue>, TAttribute extends AttributeMock<TControl, TValue>, TValue extends AttributeReturnType> extends IStandardControlComponents<TControl, TAttribute, TValue>, IAttAutoLookupControlComponents<TControl, TAttribute, TValue> {
    name: string;
}
export interface IAttAutoLookupControlComponents<TControl extends AutoLookupControlMock<TControl, TAttribute, TValue>, TAttribute extends AttributeMock<TControl, TValue>, TValue extends AttributeReturnType> extends IAttStandardControlComponents<TControl, TAttribute, TValue> {
    keyPressHandlers?: Xrm.Events.ContextSensitiveHandler[];
    /**
     * Auto Lookup allows for getting the value that has currently been typed in,
     * but not necessarily saved to the attribute
     */
    uncommittedText?: string;
}
