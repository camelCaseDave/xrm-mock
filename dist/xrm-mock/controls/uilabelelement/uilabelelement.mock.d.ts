/// <reference types="xrm" />
export declare class UiLabelElementMock implements Xrm.Controls.UiLabelElement {
    private label;
    constructor(label: string);
    getLabel(): string;
    setLabel(label: string): void;
}
