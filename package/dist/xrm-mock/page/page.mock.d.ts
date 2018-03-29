/// <reference types="xrm" />
export declare class PageMock implements Xrm.Page {
    context: Xrm.Context;
    data: Xrm.Data;
    ui: Xrm.Ui;
    constructor(components: IPageComponents);
    getAttribute<T extends Xrm.Page.Attribute>(attributeName: string): T;
    getAttribute(param: string | number): Xrm.Page.Attribute;
    getAttribute(delegateFunction?: Xrm.Collection.MatchingDelegate<Xrm.Page.Attribute>): Xrm.Page.Attribute[];
    getControl<T extends Xrm.Page.Control>(param: string | number): T;
    getControl(param: string | number): Xrm.Page.Control;
    getControl(delegateFunction?: Xrm.Collection.MatchingDelegate<Xrm.Page.Control>): Xrm.Page.Control[];
}
export interface IPageComponents {
    data?: Xrm.Data;
    context?: Xrm.Context;
    ui?: Xrm.Ui;
}
