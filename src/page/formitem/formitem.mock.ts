export class FormItemMock implements Xrm.Page.FormItem {
    id: string;
    label: string;
    formType: XrmEnum.FormType;
    currentItem: boolean;

    constructor(components: FormItemComponents) {
       this.id = components.id;
       this.label = components.label;
       this.formType = components.formType;
       this.currentItem = components.currentItem;
    }

    getId(): string {
        return this.id;
    }

    getLabel(): string {
        return this.label;
    }

    navigate(): void {
        throw ('form navigation not implemented');
    }
}

export interface FormItemComponents {
    id: string;
    label: string;
    formType?: XrmEnum.FormType;
    currentItem?: boolean;
}

