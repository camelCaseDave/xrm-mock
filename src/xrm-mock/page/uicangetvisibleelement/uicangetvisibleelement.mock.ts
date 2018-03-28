export class UiCanGetVisibleElementMock implements Xrm.Page.UiCanGetVisibleElement {
    public isVisible: boolean;

    constructor(isVisible: boolean) {
        this.isVisible = isVisible;
     }

    public getVisible(): boolean {
        return this.isVisible;
    }
}
