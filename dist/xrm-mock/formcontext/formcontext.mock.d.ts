/// <reference types="xrm" />
export declare class FormContextMock implements Xrm.FormContext {
    data: Xrm.Data;
    ui: Xrm.Ui;
    constructor(data: Xrm.Data, ui: Xrm.Ui);
    getAttribute<T extends Xrm.Page.Attribute>(attributeNameOrIndex: number | string): T;
    getAttribute<T extends Xrm.Page.Attribute>(delegateFunction?: Xrm.Collection.MatchingDelegate<T>): T[];
    getControl<T extends Xrm.Page.Control>(controlNameOrIndex: string | number): T;
    getControl<T extends Xrm.Page.Control>(delegateFunction?: Xrm.Collection.MatchingDelegate<T>): T[];
}
