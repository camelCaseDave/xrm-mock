/// <reference path="../../../node_modules/@types/xrm/index.d.ts" />

class UiLabelElementMock implements Xrm.Page.UiLabelElement {
    constructor(private label: string) { }

    getLabel(): string {
        return this.label;
    }

    setLabel(label: string): void {
        this.label = label;
    }
}