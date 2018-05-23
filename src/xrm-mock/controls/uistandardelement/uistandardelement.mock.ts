import { UiCanGetVisibleElementMock } from "../uicangetvisibleelement/uicangetvisibleelement.mock";
import { UiLabelElementMock } from "../uilabelelement/uilabelelement.mock";

export class UiStandardElementMock implements Xrm.Controls.UiStandardElement {
    public static create(label: string, visible: boolean = true): UiStandardElementMock {
        return new UiStandardElementMock(new UiLabelElementMock(label), new UiCanGetVisibleElementMock(visible));

    }
    public uiLabelElement: Xrm.Controls.UiLabelElement;
    public uiCanGetVisibleElement: Xrm.Page.UiCanGetVisibleElement;

    constructor(uiLabelElement: Xrm.Controls.UiLabelElement, uiCanGetVisibleElement: Xrm.Controls.UiCanGetVisibleElement) {
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
