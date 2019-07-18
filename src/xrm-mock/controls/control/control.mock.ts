export class ControlMock implements Xrm.Controls.Control {
    public controlType: Xrm.Controls.ControlType;
    public name: string;
    public parent: Xrm.Controls.Section;
    public label: string;
    public visible: boolean;

    constructor(components: IControlComponents) {
        this.controlType = components.controlType || "standard";
        this.label = components.label;
        this.visible = components.visible;
        this.name = components.name;
        this.parent = components.parent;
    }

    public getControlType(): Xrm.Controls.ControlType | string {
        return this.controlType;
    }

    public getName(): string {
        return this.name;
    }

    public getParent(): Xrm.Controls.Section {
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
    controlType?: Xrm.Controls.ControlType;
    label?: string;
    visible?: boolean;
    parent?: Xrm.Controls.Section;
}
