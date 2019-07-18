/// <reference types="xrm" />
export declare class UiFocusableMock implements Xrm.Controls.UiFocusable {
    hasFocus: boolean;
    constructor(hasFocus?: boolean);
    setFocus(): void;
}
