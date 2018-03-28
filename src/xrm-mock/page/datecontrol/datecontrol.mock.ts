import {DateAttributeMock } from "../dateattribute/dateattribute.mock";

export class DateControlMock implements Xrm.Page.DateControl {
    public standardControl: Xrm.Page.StandardControl;

    constructor(standardControl: Xrm.Page.StandardControl) {
        this.standardControl = standardControl;
    }

    public getShowTime(): boolean {
        const attribute = this.standardControl.getAttribute() as Xrm.Page.DateAttribute;
        return attribute.getFormat() === "datetime";
    }

    public setShowTime(showTimeValue: boolean): void {
        const attribute = this.standardControl.getAttribute() as Xrm.Page.DateAttribute;
        const attributeFormat: Xrm.Page.DateAttributeFormat = showTimeValue ? "datetime" : "date";

        // TODO test
        // attribute = new DateAttributeMock(attribute, attributeFormat);
    }

    public clearNotification(uniqueId?: string): boolean {
        return this.standardControl.clearNotification();
    }

    public getDisabled(): boolean {
        return this.standardControl.getDisabled();
    }

    public setDisabled(disabled: boolean): void {
        this.standardControl.setDisabled(disabled);
    }

    public setNotification(message: string, uniqueId: string): boolean {
        return this.standardControl.setNotification(message, uniqueId);
    }

    public getAttribute(): Xrm.Page.DateAttribute {
        return this.standardControl.getAttribute() as Xrm.Page.DateAttribute;
    }

    public getControlType(): Xrm.Page.ControlType | string {
        return this.standardControl.getControlType();
    }

    public getName(): string {
        return this.standardControl.getName();
    }

    public getParent(): Xrm.Page.Section {
        return this.standardControl.getParent();
    }

    public setVisible(visible: boolean): void {
        this.standardControl.setVisible(visible);
    }

    public getLabel(): string {
        return this.standardControl.getLabel();
    }

    public setLabel(label: string): void {
        this.standardControl.setLabel(label);
    }

    public getVisible(): boolean {
        return this.standardControl.getVisible();
    }

    public setFocus(): void {
        this.standardControl.setFocus();
    }
}
