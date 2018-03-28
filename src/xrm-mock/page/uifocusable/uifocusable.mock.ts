export class UiFocusableMock implements Xrm.Page.UiFocusable {
    public isFocussed: boolean;

    public setFocus(): void {
        this.isFocussed = true;
    }
}
