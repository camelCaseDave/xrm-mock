export class StringControlMock implements Xrm.Page.StringControl {
    autoLookupControl: Xrm.Page.AutoLookupControl;

    constructor(autoLookupControl: Xrm.Page.AutoLookupControl) {
        this.autoLookupControl = autoLookupControl;
    }

    getValue(): string {
        throw ('get value not implemented');
    }

    hideAutoComplete(): void {
        throw ('hide autocomplete not implemented');
    }

    showAutoComplete(resultSet: Xrm.Page.AutoCompleteResultSet): void {
        throw ('show autocomplete not implemented');
    }

    getAttribute(): Xrm.Page.StringAttribute {
        return this.autoLookupControl.getAttribute() as Xrm.Page.StringAttribute;
    }

    clearNotification(uniqueId?: string): boolean {
        return this.autoLookupControl.clearNotification();
    }

    getDisabled(): boolean {
        return this.autoLookupControl.getDisabled();
    }

    setDisabled(disabled: boolean): void {
        this.autoLookupControl.setDisabled(disabled);
    }

    setNotification(message: string, uniqueId: string): boolean {
        return this.autoLookupControl.setNotification(message, uniqueId);
    }

    getControlType(): Xrm.Page.ControlType | string {
        return this.autoLookupControl.getControlType();
    }

    getName(): string {
        return this.autoLookupControl.getName();
    }

    getParent(): Xrm.Page.Section {
        return this.autoLookupControl.getParent();
    }

    setVisible(visible: boolean): void {
        this.autoLookupControl.setVisible(visible);
    }

    getLabel(): string {
        return this.autoLookupControl.getLabel();
    }

    setLabel(label: string): void {
        this.autoLookupControl.setLabel(label);
    }

    getVisible(): boolean {
        return this.autoLookupControl.getVisible();
    }

    setFocus(): void {
        this.autoLookupControl.setFocus();
    }

    addOnKeyPress(handler: Xrm.Page.ContextSensitiveHandler): void {
        this.autoLookupControl.addOnKeyPress(handler);
    }

    fireOnKeyPress(): void {
        this.autoLookupControl.fireOnKeyPress();
    }

    removeOnKeyPress(handler: Xrm.Page.ContextSensitiveHandler): void {
        this.autoLookupControl.removeOnKeyPress(handler);
    }
}