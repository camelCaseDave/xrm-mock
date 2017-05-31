/// <reference path="../../../node_modules/@types/xrm/index.d.ts" />

class ControlMock implements Xrm.Page.Control {
    constructor(private uiLabelElement: Xrm.Page.UiLabelElement, private uiCanGetVisibleElement: Xrm.Page.UiCanGetVisibleElement) { }

    getControlType(): Xrm.Page.ControlType | string {
        throw ('getControlType not implemented');
    }

    getName(): string {
        throw ('getName not implemented');
    }

    getParent(): Xrm.Page.Section {
        throw ('getParent not implemented');
    }

    getLabel(): string {
        return this.uiLabelElement.getLabel();
    }

    setLabel(label: string): void {
        this.uiLabelElement.setLabel(label);
    }

    getVisible(): boolean {
        return this.uiCanGetVisibleElement.getVisible();
    }
}