export class ControlMock implements Xrm.Page.Control {
    public controlType: Xrm.Page.ControlType;
    public parent: Xrm.Page.Section;
    public uiLabelElement: Xrm.Page.UiLabelElement;
    public uiCanGetVisibleElement: Xrm.Page.UiCanGetVisibleElement;
    private name: string;

    constructor(components: IControlComponents) {
        this.controlType = components.controlType;
        this.uiLabelElement = components.uiLabelElement;
        this.uiCanGetVisibleElement = components.uiCanGetVisibleElement;
        this.name = components.name;
        this.parent = components.parent;
    }

    public getControlType(): Xrm.Page.ControlType | string {
        return this.controlType;
    }

    public getName(): string {
        return this.name;
    }

    public getParent(): Xrm.Page.Section {
        return this.parent;
    }

    public getLabel(): string {
        return this.uiLabelElement.getLabel();
    }

    public setLabel(label: string): void {
        this.uiLabelElement.setLabel(label);
    }

    public getVisible(): boolean {
        return this.uiCanGetVisibleElement.getVisible();
    }
}

export interface IControlComponents {
    name: string;
    controlType: Xrm.Page.ControlType;
    uiLabelElement?: Xrm.Page.UiLabelElement;
    uiCanGetVisibleElement?: Xrm.Page.UiCanGetVisibleElement;
    parent?: Xrm.Page.Section;
}
