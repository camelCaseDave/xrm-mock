import { AttributeMock, AttributeReturnType } from "../../attributes/attribute/attribute.mock";
import { ControlMock, IAttControlComponents, IControlComponents } from "../control/control.mock";
import { UiFocusableMock } from "../uifocusable/uifocusable.mock";
import { UiStandardElementMock } from "../uistandardelement/uistandardelement.mock";

export class StandardControlMock<TControl extends StandardControlMock<TControl, TAttribute, TValue>,
    TAttribute extends AttributeMock<TControl, TValue>,
    TValue extends AttributeReturnType>
    extends ControlMock
    implements Xrm.Controls.StandardControl {
    public disabled: boolean;
    public attribute: TAttribute;
    protected uiStandardElement: Xrm.Controls.UiStandardElement;
    protected uiFocusable: Xrm.Controls.UiFocusable;

    constructor(components: IStandardControlComponents<TControl, TAttribute, TValue>) {
        super(components);
        this.disabled = components.disabled || false;
        this.uiStandardElement = UiStandardElementMock.create(components.label || this.name, components.visible);
        this.uiFocusable = new UiFocusableMock(components.hasFocus);
        this.attribute = components.attribute;
        if (this.attribute && this.attribute.controls) {
            this.attribute.controls.push(this as any);
        }
    }

    public addNotification(notification: Xrm.Controls.AddControlNotificationOptions): void {
        throw new Error("Method not implemented.");
    }

    public clearNotification(uniqueId?: string): boolean {
        throw new Error(("clear notification not implemented"));
    }

    public getDisabled(): boolean {
        return this.disabled;
    }

    public setDisabled(disabled: boolean): void {
        this.disabled = disabled;
    }

    public setNotification(message: string, uniqueId: string): boolean {
        throw new Error(("set notification not implemented"));
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
}

export interface IStandardControlComponents<TControl extends StandardControlMock<TControl, TAttribute, TValue>,
    TAttribute extends AttributeMock<TControl, TValue>,
    TValue extends AttributeReturnType>
    extends IAttStandardControlComponents<TControl, TAttribute, TValue>,
    IControlComponents {
    attribute: TAttribute;
    name: string;
}

export interface IAttStandardControlComponents<TControl extends StandardControlMock<TControl, TAttribute, TValue>,
    TAttribute extends AttributeMock<TControl, TValue>,
    TValue extends AttributeReturnType>
    extends IAttControlComponents {
    disabled?: boolean;
    label?: string;
    visible?: boolean;
    hasFocus?: boolean;
}
