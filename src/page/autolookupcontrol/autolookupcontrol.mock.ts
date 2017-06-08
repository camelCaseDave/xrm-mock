class AutoLookupControlMock implements Xrm.Page.AutoLookupControl {
    standardControl: Xrm.Page.StandardControl;
    uiKeyPressable: Xrm.Page.UiKeyPressable;

    constructor(standardControl: Xrm.Page.StandardControl, uiKeyPressable: Xrm.Page.UiKeyPressable) {
        this.standardControl = standardControl;
        this.uiKeyPressable = uiKeyPressable;
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

    getAttribute(): Xrm.Page.Attribute {
        return this.standardControl.getAttribute();
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

    addOnKeyPress(handler: Xrm.Page.ContextSensitiveHandler): void {
        this.uiKeyPressable.addOnKeyPress(handler);
    }

    fireOnKeyPress(): void {
        this.uiKeyPressable.fireOnKeyPress();
    }

    removeOnKeyPress(handler: Xrm.Page.ContextSensitiveHandler): void {
        this.uiKeyPressable.removeOnKeyPress(handler);
    }
}