import { ControlMock } from "./../control/control.mock";

export class StandardControlMock implements Xrm.Page.StandardControl {
    public disabled: boolean;
    public control: ControlMock;
    public uiStandardElement: Xrm.Page.UiStandardElement;
    public uiFocusable: Xrm.Page.UiFocusable;
    public attribute: Xrm.Page.Attribute;

    constructor(components: IStandardControlComponents) {
        this.control = components.control;
        this.disabled = components.disabled || false;
        this.uiStandardElement = components.uiStandardElement;
        this.uiFocusable = components.uiFocusable;
        this.attribute = components.attribute;
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

    public getAttribute(): Xrm.Page.Attribute {
        if (["subgrid", "iframe", "webresource"].indexOf(this.control.getControlType()) === -1) {
            return this.attribute;
        } else {
            throw new Error(
                "control is not bound to an attribute because it is of type " + this.control.getControlType());
        }
    }

    public getControlType(): Xrm.Page.ControlType | string {
        this.control.controlType = "standard";
        return this.control.getControlType();
    }

    public getName(): string {
        return this.control.getName();
    }

    public getParent(): Xrm.Page.Section {
        return this.control.getParent();
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

export interface IStandardControlComponents {
    control: ControlMock;
    attribute: Xrm.Page.Attribute;
    disabled?: boolean;
    uiStandardElement?: Xrm.Page.UiStandardElement;
    uiFocusable?: Xrm.Page.UiFocusable;
}
