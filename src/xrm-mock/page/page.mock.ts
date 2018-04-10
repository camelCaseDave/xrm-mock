export class PageMock implements Xrm.Page {
    public context: Xrm.GlobalContext;
    public data: Xrm.Data;
    public ui: Xrm.Ui;

    constructor(components: IPageComponents) {
        this.context = components.context;
        this.data = components.data;
        this.ui = components.ui;
    }

    public getAttribute<T extends Xrm.Page.Attribute>(attributeName: string): T;
    public getAttribute(param: string | number): Xrm.Page.Attribute;
    public getAttribute(delegateFunction?: Xrm.Collection.MatchingDelegate<Xrm.Page.Attribute>): Xrm.Page.Attribute[];

    public getAttribute<T extends Xrm.Page.Attribute>(param?: number | string |
        Xrm.Collection.MatchingDelegate<Xrm.Page.Attribute>): T | Xrm.Page.Attribute | Xrm.Page.Attribute[] {
        if (!arguments.length) {
            return this.data.entity.attributes.get();
        } else if (param && typeof param === "string") {
            return this.data.entity.attributes.get(param);
        } else if (typeof param === "number") {
            return this.data.entity.attributes.get()[param];
        } else if (param as Xrm.Collection.MatchingDelegate<Xrm.Page.Attribute> !== undefined) {
            throw new Error(("Xrm.Page.getAttribute(delegate) not implemented"));
        }
    }

    public getControl<T extends Xrm.Page.Control>(param: string | number): T;
    public getControl(param: string | number): Xrm.Page.Control;
    public getControl(delegateFunction?: Xrm.Collection.MatchingDelegate<Xrm.Page.Control>): Xrm.Page.Control[];

    public getControl<T extends Xrm.Page.Control>(param?: number | string |
        Xrm.Collection.MatchingDelegate<Xrm.Page.Control>): T | Xrm.Page.Control | Xrm.Page.Control[] {
        if (!arguments.length) {
            return this.ui.controls.get();
        } else if (typeof param === "string") {
            return this.ui.controls.get(param);
        } else if (typeof param === "number") {
            return this.ui.controls.get()[param];
        } else if (param as Xrm.Collection.MatchingDelegate<Xrm.Page.Control> !== undefined) {
            throw new Error(("getControl as delegate not implemented"));
        }
    }
}

export interface IPageComponents {
    data?: Xrm.Data;
    context?: Xrm.GlobalContext;
    ui?: Xrm.Ui;
}
