/// <reference path="../attribute/attribute.mock.ts" />
/// <reference path="../dateattribute/dateattribute.mock.ts" />

class DateControlMock implements Xrm.Page.DateControl {
    standardControl: Xrm.Page.StandardControl;

    constructor(standardControl: Xrm.Page.StandardControl) {
        this.standardControl = standardControl;
    }

    getShowTime(): boolean {
        let attribute = this.standardControl.getAttribute() as Xrm.Page.DateAttribute;
        return attribute.getFormat() === 'datetime';
    }

    setShowTime(showTimeValue: boolean): void {
        let attribute = this.standardControl.getAttribute() as Xrm.Page.DateAttribute;
        let attributeFormat: Xrm.Page.DateAttributeFormat = showTimeValue ? 'datetime' : 'date';
        
        // TODO test
        attribute = new DateAttributeMock(attribute, attributeFormat);
    }

    clearNotification(uniqueId?: string): boolean {
        return this.standardControl.clearNotification();
    }

    getDisabled(): boolean {
        return this.standardControl.getDisabled();
    }

    setDisabled(disabled: boolean): void {
        this.standardControl.setDisabled(disabled);
    }

    setNotification(message: string, uniqueId: string): boolean {
        return this.standardControl.setNotification(message, uniqueId);
    }

    getAttribute(): Xrm.Page.DateAttribute {
        return this.standardControl.getAttribute() as Xrm.Page.DateAttribute;
    }

    getControlType(): Xrm.Page.ControlType | string {
        return this.standardControl.getControlType();
    }

    getName(): string {
        return this.standardControl.getName();
    }

    getParent(): Xrm.Page.Section {
        return this.standardControl.getParent();
    }

    setVisible(visible: boolean): void {
        this.standardControl.setVisible(visible);
    }

    getLabel(): string {
        return this.standardControl.getLabel();
    }

    setLabel(label: string): void {
        this.standardControl.setLabel(label);
    }

    getVisible(): boolean {
        return this.standardControl.getVisible();
    }

    setFocus(): void {
        this.standardControl.setFocus();
    }
}