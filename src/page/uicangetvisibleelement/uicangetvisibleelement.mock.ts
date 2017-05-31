/// <reference path="../../../node_modules/@types/xrm/index.d.ts" />

class UiCanGetVisibleElementMock implements Xrm.Page.UiCanGetVisibleElement {
    constructor(private isVisible: boolean) { }

    getVisible(): boolean {
        return this.isVisible;
    }
}