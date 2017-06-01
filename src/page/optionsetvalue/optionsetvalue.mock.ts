/// <reference path="../../../node_modules/@types/xrm/index.d.ts" />

class OptionSetValueMock implements Xrm.Page.OptionSetValue {
    text: string;
    value: number;

    constructor(text: string, value: number) {
        this.text = text;
        this.value = value;
    }
}