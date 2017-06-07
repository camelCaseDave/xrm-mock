class UiFocusableMock implements Xrm.Page.UiFocusable {
    isFocussed: boolean;

    setFocus(): void {        
        this.isFocussed = true;
    }
}