export class UiCanGetVisibleElementMock implements Xrm.Page.UiCanGetVisibleElement {
    isVisible: boolean;

    constructor(isVisible: boolean) {
        this.isVisible = isVisible;
     }

    getVisible(): boolean {
        return this.isVisible;
    }
}