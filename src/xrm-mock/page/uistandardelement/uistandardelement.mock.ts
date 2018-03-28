export class UiStandardElementMock implements Xrm.Page.UiStandardElement {
    public uiLabelElement: Xrm.Page.UiLabelElement;
    public uiCanGetVisibleElement: Xrm.Page.UiCanGetVisibleElement;

    constructor(uiLabelElement: Xrm.Page.UiLabelElement, uiCanGetVisibleElement: Xrm.Page.UiCanGetVisibleElement) {
        this.uiLabelElement = uiLabelElement;
        this.uiCanGetVisibleElement = uiCanGetVisibleElement;
    }

    public setVisible(visible: boolean): void {
        this.uiCanGetVisibleElement.getVisible = () => visible;
    }

    public getVisible(): boolean {
        return this.uiCanGetVisibleElement.getVisible();
    }

    public getLabel(): string {
        return this.uiLabelElement.getLabel();
    }

    public setLabel(label: string): void {
        this.uiLabelElement.setLabel(label);
    }
}
