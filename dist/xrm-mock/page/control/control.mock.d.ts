/// <reference types="xrm" />
export declare class ControlMock implements Xrm.Page.Control {
    controlType: Xrm.Page.ControlType;
    name: string;
    parent: Xrm.Page.Section;
    label: string;
    visible: boolean;
    constructor(components: IControlComponents);
    getControlType(): Xrm.Page.ControlType | string;
    getName(): string;
    getParent(): Xrm.Page.Section;
    getLabel(): string;
    setLabel(label: string): void;
    getVisible(): boolean;
}
export interface IControlComponents extends IAttControlComponents {
    name: string;
}
export interface IAttControlComponents {
    name?: string;
    controlType?: Xrm.Page.ControlType;
    label?: string;
    visible?: boolean;
    parent?: Xrm.Page.Section;
}
