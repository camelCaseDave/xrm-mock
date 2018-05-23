export class PageMock implements Xrm.Page {
    public context: Xrm.GlobalContext;
    public data: Xrm.Data;
    public ui: Xrm.Ui;

    constructor(context: Xrm.GlobalContext, formContext: Xrm.FormContext) {
        this.context = context;
        this.data = formContext.data;
        this.ui = formContext.ui;
    }

    public getAttribute<T extends Xrm.Page.Attribute>(attributeNameOrIndex: number | string): T;
    public getAttribute<T extends Xrm.Page.Attribute>(delegateFunction?: Xrm.Collection.MatchingDelegate<T>): T[];

    public getAttribute<T extends Xrm.Page.Attribute>(param?: number | string |
        Xrm.Collection.MatchingDelegate<T>): T | Xrm.Page.Attribute[] {
        if (!arguments.length) {
            return this.data.entity.attributes.get();
        } else if (param && typeof param === "string") {
            return this.data.entity.attributes.get<T>(param);
        } else if (typeof param === "number") {
            return this.data.entity.attributes.get(param) as T;
        } else if (typeof param === "function") {
            return this.data.entity.attributes.get(param as Xrm.Collection.MatchingDelegate<T>) as T[];
        }
        throw new Error(`Collection.Get called with unknown parameter type: ${typeof param}`);
    }

    public getControl<T extends Xrm.Page.Control>(controlNameOrIndex: string | number): T;
    public getControl<T extends Xrm.Page.Control>(delegateFunction?: Xrm.Collection.MatchingDelegate<T>): T[];

    public getControl<T extends Xrm.Page.Control>(param?: number | string |
        Xrm.Collection.MatchingDelegate<T>): T | T[] {
        if (!arguments.length || param === undefined || param === null) {
            return this.ui.controls.get() as T[];
        } else if (typeof param === "string") {
            return this.ui.controls.get<T>(param);
        } else if (typeof param === "number") {
            return this.ui.controls.get(param) as T;
        } else if (typeof param === "function") {
            return this.ui.controls.get(param as Xrm.Collection.MatchingDelegate<T>) as T[];
        }
        throw new Error(`Collection.Get called with unknown parameter type: ${typeof param}`);
    }
}
