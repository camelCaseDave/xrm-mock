/// <reference types="xrm" />
export declare class ControlMock implements Xrm.Page.Control {
    controlType: Xrm.Page.ControlType;
    name: string;
    parent: Xrm.Page.Section;
    uiLabelElement: Xrm.Page.UiLabelElement;
    uiCanGetVisibleElement: Xrm.Page.UiCanGetVisibleElement;
    constructor(components: IControlComponents);
    getControlType(): Xrm.Page.ControlType | string;
    getName(): string;
    getParent(): Xrm.Page.Section;
    getLabel(): string;
    setLabel(label: string): void;
    getVisible(): boolean;
}
export interface IControlComponents {
    name: string;
    controlType?: Xrm.Page.ControlType;
    uiLabelElement?: Xrm.Page.UiLabelElement;
    uiCanGetVisibleElement?: Xrm.Page.UiCanGetVisibleElement;
    parent?: Xrm.Page.Section;
}
