import { StandardControlMock } from "../standardcontrol/standardcontrol.mock";
import { UiKeyPressableMock } from "../uikeypressable/uikeypressable.mock";

export class AutoLookupControlMock implements Xrm.Page.AutoLookupControl {
    public standardControl: StandardControlMock;
    public uiKeyPressable: UiKeyPressableMock;

    constructor(standardControl: StandardControlMock, uiKeyPressable: UiKeyPressableMock) {
        this.standardControl = standardControl;
        this.uiKeyPressable = uiKeyPressable;
    }

    public getValue(): string {
        return this.standardControl.attribute.getValue();
    }

    public hideAutoComplete(): void {
        throw new Error(("hide autocomplete not implemented"));
    }

    public showAutoComplete(resultSet: Xrm.Page.AutoCompleteResultSet): void {
        throw new Error(("show autocomplete not implemented"));
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

    public getAttribute(): Xrm.Page.Attribute {
        return this.standardControl.getAttribute();
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

    public addOnKeyPress(handler: Xrm.Page.ContextSensitiveHandler): void {
        this.uiKeyPressable.addOnKeyPress(handler);
    }

    public fireOnKeyPress(): void {
        this.uiKeyPressable.fireOnKeyPress();
    }

    public removeOnKeyPress(handler: Xrm.Page.ContextSensitiveHandler): void {
        this.uiKeyPressable.removeOnKeyPress(handler);
    }
}
