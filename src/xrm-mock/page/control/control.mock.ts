export class ControlMock implements Xrm.Page.Control {
    public controlType: Xrm.Page.ControlType;
    public name: string;
    public parent: Xrm.Page.Section;
    public label: string;
    public visible: boolean;

    constructor(components: IControlComponents) {
        this.controlType = components.controlType || "standard";
        this.label = components.label;
        this.visible = components.visible;
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
        return this.label;
    }

    public setLabel(label: string): void {
        this.label = label;
    }

    public getVisible(): boolean {
        return this.visible;
    }
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
