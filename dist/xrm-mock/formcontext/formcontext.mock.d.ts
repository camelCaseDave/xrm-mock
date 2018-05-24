/// <reference types="xrm" />
export declare class FormContextMock implements Xrm.FormContext {
    data: Xrm.Data;
    ui: Xrm.Ui;
    constructor(data: Xrm.Data, ui: Xrm.Ui);
    getAttribute<T extends Xrm.Attributes.Attribute>(attributeNameOrIndex: number | string): T;
    getAttribute<T extends Xrm.Attributes.Attribute>(delegateFunction?: Xrm.Collection.MatchingDelegate<T>): T[];
    getControl<T extends Xrm.Controls.Control>(controlNameOrIndex: string | number): T;
    getControl<T extends Xrm.Controls.Control>(delegateFunction?: Xrm.Collection.MatchingDelegate<T>): T[];
}
