/// <reference path="../../node_modules/@types/xrm/index.d.ts" />

class PageMock implements Xrm.Page {    
    context: Xrm.Context;
    data: Xrm.Data;
    ui: Xrm.Ui;

    constructor(data?: Xrm.Data, context?: Xrm.Context, ui?: Xrm.Ui) {
        this.context = context;
        this.data = data;
        this.ui = ui;
    }

    getAttribute(): Xrm.Page.Attribute[];
    getAttribute<T extends Xrm.Page.Attribute>(attributeName: string): T;
    getAttribute(attributeName: string): Xrm.Page.Attribute;
    getAttribute(index: number): Xrm.Page.Attribute;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Page.Attribute>): Xrm.Page.Attribute[];

    getAttribute<T extends Xrm.Page.Attribute>(param?: number | string | Xrm.Collection.MatchingDelegate<Xrm.Page.Attribute>): T | Xrm.Page.Attribute | Xrm.Page.Attribute[] {
        if (!arguments.length) {
            return this.data.entity.attributes.get();
        }
        else if (param && typeof param === 'string') {
            return this.data.entity.attributes.get(param);
            //return this.data.entity.attributes.get(item => item.getName() === param)[0];
        }
        
        else if (typeof param === 'number') {
            return this.data.entity.attributes.get()[param];
        }
        else if (<Xrm.Collection.MatchingDelegate<Xrm.Page.Attribute>>param !== undefined) {
            throw ('Xrm.Page.getAttribute(delegate) not implemented');
        }        
    }    

    getControl(): Xrm.Page.Control[];
    getControl<T extends Xrm.Page.Control>(controlName: string): T;
    getControl(controlName: string): Xrm.Page.Control;
    getControl<T extends Xrm.Page.Control>(index: number): T;
    getControl(index: number): Xrm.Page.Control;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Page.Control>): Xrm.Page.Control[];

    getControl<T extends Xrm.Page.Control>(param?: number | string | Xrm.Collection.MatchingDelegate<Xrm.Page.Control>): T | Xrm.Page.Control | Xrm.Page.Control[] {
        if (!arguments.length) {
            return this.ui.controls.get();
        }
        else if (param && typeof param === "string") {
            return this.ui.controls.get(item => item.getName() === param)[0];
        }

        else if (param && typeof param === "number") {
            return this.ui.controls.get()[param];
        }
        else if (<Xrm.Collection.MatchingDelegate<Xrm.Page.Control>>param !== undefined) {
            throw ('getControl not implemented');
        }
    }    
}
