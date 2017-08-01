/// <reference types="xrm" />
export declare class FormItemMock implements Xrm.Page.FormItem {
    id: string;
    label: string;
    formType: XrmEnum.FormType;
    currentItem: boolean;
    constructor(components: FormItemComponents);
    getId(): string;
    getLabel(): string;
    navigate(): void;
}
export interface FormItemComponents {
    id: string;
    label: string;
    formType?: XrmEnum.FormType;
    currentItem?: boolean;
}
