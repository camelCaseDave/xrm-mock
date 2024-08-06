/// <reference types="xrm" />
import { AttributeMock, AttributeReturnType } from "../../attributes/attribute/attribute.mock";
import { ControlMock, IAttControlComponents, IControlComponents } from "../control/control.mock";
export declare class StandardControlMock<TControl extends StandardControlMock<TControl, TAttribute, TValue>, TAttribute extends AttributeMock<TControl, TAttribute, TValue>, TValue extends AttributeReturnType> extends ControlMock implements Xrm.Controls.StandardControl {
    disabled: boolean;
    attribute: TAttribute;
    protected outChangedEventHandlers: Xrm.Events.ContextSensitiveHandler[];
    protected uiStandardElement: Xrm.Controls.UiStandardElement;
    protected uiFocusable: Xrm.Controls.UiFocusable;
    protected notifications: Xrm.Controls.AddControlNotificationOptions[];
    constructor(components: IStandardControlComponents<TControl, TAttribute, TValue>);
    addNotification(notification: Xrm.Controls.AddControlNotificationOptions): void;
    /**
     * Fires the action event(s) of the first notification if it is a RECOMMENDATION notification level.
     * @returns true if it was able to apply the notification, false otherwise
     */
    applyNotification(): boolean;
    clearNotification(uniqueId?: string): boolean;
    getDisabled(): boolean;
    getNotifications(): Xrm.Controls.AddControlNotificationOptions[];
    setDisabled(disabled: boolean): void;
    setNotification(message: string, uniqueId: string): boolean;
    getAttribute(): TAttribute;
    getLabel(): string;
    setLabel(label: string): void;
    getVisible(): boolean;
    setVisible(visible: boolean): void;
    setFocus(): void;
    getOutputs(): {
        [index: string]: Xrm.Controls.FieldControlOutput;
    };
    addOnOutputChange(handler: Xrm.Events.ContextSensitiveHandler): void;
    fireOnOutputChange(): void;
    removeOnOutputChange(handler: Xrm.Events.ContextSensitiveHandler): void;
}
export interface IStandardControlComponents<TControl extends StandardControlMock<TControl, TAttribute, TValue>, TAttribute extends AttributeMock<TControl, TAttribute, TValue>, TValue extends AttributeReturnType> extends IAttStandardControlComponents<TControl, TAttribute, TValue>, IControlComponents {
    attribute: TAttribute;
    name: string;
}
export interface IAttStandardControlComponents<TControl extends StandardControlMock<TControl, TAttribute, TValue>, TAttribute extends AttributeMock<TControl, TAttribute, TValue>, TValue extends AttributeReturnType> extends IAttControlComponents {
    disabled?: boolean;
    label?: string;
    visible?: boolean;
    hasFocus?: boolean;
}
