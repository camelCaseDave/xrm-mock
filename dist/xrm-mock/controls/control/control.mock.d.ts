/// <reference types="xrm" />
export declare class ControlMock implements Xrm.Controls.Control {
    controlType: Xrm.Controls.ControlType;
    name: string;
    parent: Xrm.Controls.Section;
    label: string;
    visible: boolean;
    constructor(components: IControlComponents);
    getControlType(): Xrm.Controls.ControlType | string;
    getName(): string;
    getParent(): Xrm.Controls.Section;
    getLabel(): string;
    setLabel(label: string): void;
    getVisible(): boolean;
}
export interface IControlComponents extends IAttControlComponents {
    name: string;
}
export interface IAttControlComponents {
    name?: string;
    controlType?: Xrm.Controls.ControlType;
    label?: string;
    visible?: boolean;
    parent?: Xrm.Controls.Section;
}
