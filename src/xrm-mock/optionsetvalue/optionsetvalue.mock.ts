export class OptionSetValueMock implements Xrm.OptionSetValue {
    public text: string;
    public value: number;

    constructor(text: string, value: number) {
        this.text = text;
        this.value = value;
    }
}
