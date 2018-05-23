export class UiFocusableMock implements Xrm.Controls.UiFocusable {
    public constructor(public hasFocus = false) {
    }

    public setFocus(): void {
        this.hasFocus = true;
    }
}
