/// <reference path="../../node_modules/@types/xrm/index.d.ts" />
/// <reference types="xrm" />
export declare class PageMock implements Xrm.Page {
    context: Xrm.Context;
    data: Xrm.Data;
    ui: Xrm.Ui;
    constructor(data?: Xrm.Data, context?: Xrm.Context, ui?: Xrm.Ui);
    getAttribute(): Xrm.Page.Attribute[];
    getAttribute<T extends Xrm.Page.Attribute>(attributeName: string): T;
    getAttribute(attributeName: string): Xrm.Page.Attribute;
    getAttribute(index: number): Xrm.Page.Attribute;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Page.Attribute>): Xrm.Page.Attribute[];
    getControl(): Xrm.Page.Control[];
    getControl<T extends Xrm.Page.Control>(controlName: string): T;
    getControl(controlName: string): Xrm.Page.Control;
    getControl<T extends Xrm.Page.Control>(index: number): T;
    getControl(index: number): Xrm.Page.Control;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Page.Control>): Xrm.Page.Control[];
}
