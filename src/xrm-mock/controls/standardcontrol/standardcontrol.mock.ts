import { AttributeMock, AttributeReturnType } from "../../attributes/attribute/attribute.mock";
import { ControlMock, IAttControlComponents, IControlComponents } from "../control/control.mock";
import { EventContextMock } from "../../events/eventcontext/eventcontext.mock";
import { findIndex } from "../../../xrm-mock-generator/helpers/array.helper";
import { UiFocusableMock } from "../uifocusable/uifocusable.mock";
import { UiStandardElementMock } from "../uistandardelement/uistandardelement.mock";
import { XrmMockGenerator } from "../../../xrm-mock-generator/xrm-mock-generator";

export class StandardControlMock<TControl extends StandardControlMock<TControl, TAttribute, TValue>,
    TAttribute extends AttributeMock<TControl, TAttribute, TValue>,
    TValue extends AttributeReturnType>
    extends ControlMock
    implements Xrm.Controls.StandardControl {
    public disabled: boolean;
    public attribute: TAttribute;
    protected outChangedEventHandlers: Xrm.Events.ContextSensitiveHandler[];
    protected uiStandardElement: Xrm.Controls.UiStandardElement;
    protected uiFocusable: Xrm.Controls.UiFocusable;
    protected notifications: Xrm.Controls.AddControlNotificationOptions[];


    constructor(components: IStandardControlComponents<TControl, TAttribute, TValue>) {
        super(components);
        this.disabled = components.disabled || false;
        this.uiStandardElement = UiStandardElementMock.create(components.label || this.name, components.visible);
        this.uiFocusable = new UiFocusableMock(components.hasFocus);
        this.attribute = components.attribute;
        if (this.attribute && this.attribute.controls) {
            this.attribute.controls.push(this as any);
        }
        this.notifications = [];
        this.outChangedEventHandlers = [];
    }

    public addNotification(notification: Xrm.Controls.AddControlNotificationOptions): void {
        this.notifications.push(notification);
    }

    /**
     * Fires the action event(s) of the first notification if it is a RECOMMENDATION notification level.
     * @returns true if it was able to apply the notification, false otherwise
     */
    public applyNotification(): boolean {
        if (this.notifications.length === 0){
            return false;
        }

        const notification = this.notifications[0];
        if (notification.actions?.length > 0
            && notification.notificationLevel === "RECOMMENDATION"
            && notification.actions[0].actions?.length > 0){
            notification.actions[0].actions.forEach((action) => action());
            return true;
        }
        return false;
    }

    public clearNotification(uniqueId?: string): boolean {
        if (this.notifications.length === 0){
            return false;
        }

        if (uniqueId){
            const index = this.notifications.findIndex((n) => n.uniqueId === uniqueId);
            if (index > -1){
                this.notifications.splice(index, 1);
            }
            return index > -1;
        }

        this.notifications.splice(0, 1);
        return true;
    }

    public getDisabled(): boolean {
        return this.disabled;
    }

    public getNotifications(): Xrm.Controls.AddControlNotificationOptions[] {
        return this.notifications;
    }

    public setDisabled(disabled: boolean): void {
        this.disabled = disabled;
    }

    public setNotification(message: string, uniqueId: string): boolean {
        this.notifications = [];
        this.addNotification({
            notificationLevel: "ERROR",
            messages: [message],
            uniqueId,
        });
        return true;
    }

    public getAttribute(): TAttribute {
        if (["subgrid", "iframe", "webresource"].indexOf(this.getControlType()) === -1) {
            return this.attribute;
        } else {
            throw new Error(
                "control is not bound to an attribute because it is of type " + this.getControlType());
        }
    }

    public getLabel(): string {
        return this.uiStandardElement.getLabel();
    }

    public setLabel(label: string): void {
        this.uiStandardElement.setLabel(label);
    }

    public getVisible(): boolean {
        return this.uiStandardElement.getVisible();
    }

    public setVisible(visible: boolean): void {
        this.uiStandardElement.setVisible(visible);
    }

    public setFocus(): void {
        this.uiFocusable.setFocus();
    }

    getOutputs(): { [index: string]: Xrm.Controls.FieldControlOutput; } {
        throw new Error("Method not implemented.");
    }

    addOnOutputChange(handler: Xrm.Events.ContextSensitiveHandler): void {
        this.outChangedEventHandlers.push(handler);
    }

    fireOnOutputChange(): void {
        if (this.outChangedEventHandlers.length) {
            return;
        }
        const globalContext = XrmMockGenerator.getEventContext();
        const context = new EventContextMock({
            ...globalContext,
            depth: globalContext.depth ? globalContext.depth + 1 : 1,
            eventSource: this,
        });
        for (const handler of this.outChangedEventHandlers) {
            handler.call(this, context);
        }
    }

    removeOnOutputChange(handler: Xrm.Events.ContextSensitiveHandler): void {
        const index: number = findIndex(this.outChangedEventHandlers, handler);
        this.outChangedEventHandlers.splice(index, 1);
    }
}

export interface IStandardControlComponents<TControl extends StandardControlMock<TControl, TAttribute, TValue>,
    TAttribute extends AttributeMock<TControl, TAttribute, TValue>,
    TValue extends AttributeReturnType>
    extends IAttStandardControlComponents<TControl, TAttribute, TValue>,
    IControlComponents {
    attribute: TAttribute;
    name: string;
}

export interface IAttStandardControlComponents<TControl extends StandardControlMock<TControl, TAttribute, TValue>,
    TAttribute extends AttributeMock<TControl, TAttribute, TValue>,
    TValue extends AttributeReturnType>
    extends IAttControlComponents {
    disabled?: boolean;
    label?: string;
    visible?: boolean;
    hasFocus?: boolean;
}
