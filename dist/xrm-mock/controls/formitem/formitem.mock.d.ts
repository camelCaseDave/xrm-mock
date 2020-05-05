/// <reference types="xrm" />
export declare class FormItemMock implements Xrm.Controls.FormItem {
    id: string;
    label: string;
    formType: XrmEnum.FormType;
    currentItem: boolean;
    constructor(components: IFormItemComponents);
    getId(): string;
    getLabel(): string;
    navigate(): void;
    getVisible(): boolean;
    setVisible(value: boolean): boolean;
}
export interface IFormItemComponents {
    id: string;
    label: string;
    formType?: XrmEnum.FormType;
    currentItem?: boolean;
}
