export class UiStandardElementMock implements Xrm.Page.UiStandardElement {
    uiLabelElement: Xrm.Page.UiLabelElement;
    uiCanGetVisibleElement: Xrm.Page.UiCanGetVisibleElement;

    constructor(uiLabelElement: Xrm.Page.UiLabelElement, uiCanGetVisibleElement: Xrm.Page.UiCanGetVisibleElement) {
        this.uiLabelElement = uiLabelElement;
        this.uiCanGetVisibleElement = uiCanGetVisibleElement;
    }

    setVisible(visible: boolean): void {
        this.uiCanGetVisibleElement.getVisible = () => { return visible; };
    }

    getVisible(): boolean {
        return this.uiCanGetVisibleElement.getVisible();
    }

    getLabel(): string {
        return this.uiLabelElement.getLabel();
    }

    setLabel(label: string): void {
        this.uiLabelElement.setLabel(label);
    }
}