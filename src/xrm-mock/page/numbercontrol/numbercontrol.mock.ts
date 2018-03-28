export class NumberControlMock implements Xrm.Page.NumberControl {
     public autoLookupControl: Xrm.Page.AutoLookupControl;

     constructor(autoLookupControl: Xrm.Page.AutoLookupControl) {
        this.autoLookupControl = autoLookupControl;
    }

     public getValue(): string {
        throw new Error(("get value not implemented"));
    }

     public hideAutoComplete(): void {
        throw new Error(("hide autocomplete not implemented"));
    }

     public showAutoComplete(resultSet: Xrm.Page.AutoCompleteResultSet): void {
        throw new Error(("show autocomplete not implemented"));
    }

     public getAttribute(): Xrm.Page.NumberAttribute {
        return this.autoLookupControl.getAttribute() as Xrm.Page.NumberAttribute;
    }

     public clearNotification(uniqueId?: string): boolean {
        return this.autoLookupControl.clearNotification();
    }

     public getDisabled(): boolean {
        return this.autoLookupControl.getDisabled();
    }

     public setDisabled(disabled: boolean): void {
        this.autoLookupControl.setDisabled(disabled);
    }

     public setNotification(message: string, uniqueId: string): boolean {
        return this.autoLookupControl.setNotification(message, uniqueId);
    }

     public getControlType(): Xrm.Page.ControlType | string {
        return this.autoLookupControl.getControlType();
    }

     public getName(): string {
        return this.autoLookupControl.getName();
    }

     public getParent(): Xrm.Page.Section {
        return this.autoLookupControl.getParent();
    }

     public setVisible(visible: boolean): void {
        this.autoLookupControl.setVisible(visible);
    }

     public getLabel(): string {
        return this.autoLookupControl.getLabel();
    }

     public setLabel(label: string): void {
        this.autoLookupControl.setLabel(label);
    }

     public getVisible(): boolean {
        return this.autoLookupControl.getVisible();
    }

     public setFocus(): void {
        this.autoLookupControl.setFocus();
    }

     public addOnKeyPress(handler: Xrm.Page.ContextSensitiveHandler): void {
        this.autoLookupControl.addOnKeyPress(handler);
    }

     public fireOnKeyPress(): void {
        this.autoLookupControl.fireOnKeyPress();
    }

     public removeOnKeyPress(handler: Xrm.Page.ContextSensitiveHandler): void {
        this.autoLookupControl.removeOnKeyPress(handler);
    }
}
