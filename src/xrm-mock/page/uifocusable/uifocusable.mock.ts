export class UiFocusableMock implements Xrm.Page.UiFocusable {
    public constructor(public hasFocus = false) {
    }

    public setFocus(): void {
        this.hasFocus = true;
    }
}
