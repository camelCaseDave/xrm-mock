import { ControlMock } from './../control/control.mock';

export class StandardControlMock implements Xrm.Page.StandardControl {
    disabled: boolean;
    control: ControlMock;
    uiStandardElement: Xrm.Page.UiStandardElement;
    uiFocusable: Xrm.Page.UiFocusable;
    attribute: Xrm.Page.Attribute;

    constructor(components: StandardControlComponents) {
        this.control = components.control;
        this.disabled = components.disabled;
        this.uiStandardElement = components.uiStandardElement;
        this.uiFocusable = components.uiFocusable;
        this.attribute = components.attribute;
    }

    clearNotification(uniqueId?: string): boolean {
        throw ('clear notification not implemented');
    }

    getDisabled(): boolean {
        return this.disabled;
    }

    setDisabled(disabled: boolean): void {
        this.disabled = disabled;
    }

    setNotification(message: string, uniqueId: string): boolean {
        throw ('set notification not implemented');
    }

    getAttribute(): Xrm.Page.Attribute {
        if (['subgrid', 'iframe', 'webresource'].indexOf(this.control.getControlType()) === -1) {
            return this.attribute;
        } else {
            throw ('control is not bound to an attribute because it is of type ' + this.control.getControlType());
        }
    }

    getControlType(): Xrm.Page.ControlType | string {
        this.control.controlType = "standard";
        return this.control.getControlType();
    }

    getName(): string {
        return this.control.getName();
    }

    getParent(): Xrm.Page.Section {
        return this.control.getParent();
    }

    getLabel(): string {
        return this.uiStandardElement.getLabel();
    }

    setLabel(label: string): void {
        this.uiStandardElement.setLabel(label);
    }

    getVisible(): boolean {
        return this.uiStandardElement.getVisible();
    }

    setVisible(visible: boolean): void {
        this.uiStandardElement.setVisible(visible);
    }

    setFocus(): void {
        this.uiFocusable.setFocus();
    }
}

export interface StandardControlComponents {
    control: ControlMock;
    attribute: Xrm.Page.Attribute;
    disabled?: boolean;
    uiStandardElement?: Xrm.Page.UiStandardElement;
    uiFocusable?: Xrm.Page.UiFocusable;
}