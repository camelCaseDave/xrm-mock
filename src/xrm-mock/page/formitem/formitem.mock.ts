export class FormItemMock implements Xrm.Page.FormItem {
    public id: string;
    public label: string;
    public formType: XrmEnum.FormType;
    public currentItem: boolean;

    constructor(components: IFormItemComponents) {
       this.id = components.id;
       this.label = components.label;
       this.formType = components.formType;
       this.currentItem = components.currentItem;
    }

    public getId(): string {
        return this.id;
    }

    public getLabel(): string {
        return this.label;
    }

    public navigate(): void {
        throw new Error(("form navigation not implemented"));
    }
}

export interface IFormItemComponents {
    id: string;
    label: string;
    formType?: XrmEnum.FormType;
    currentItem?: boolean;
}
