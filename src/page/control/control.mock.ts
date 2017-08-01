export class ControlMock implements Xrm.Page.Control {
    name: string;
    controlType: Xrm.Page.ControlType;
    parent: Xrm.Page.Section;
    uiLabelElement: Xrm.Page.UiLabelElement;
    uiCanGetVisibleElement: Xrm.Page.UiCanGetVisibleElement

    constructor(components: ControlComponents) {
        this.controlType = components.controlType;
        this.uiLabelElement = components.uiLabelElement;
        this.uiCanGetVisibleElement = components.uiCanGetVisibleElement;
        this.name = components.name;
        this.parent = components.parent;
    }

    getControlType(): Xrm.Page.ControlType | string {
        return this.controlType;
    }

    getName(): string {
        return this.name;
    }

    getParent(): Xrm.Page.Section {
        return this.parent;
    }

    getLabel(): string {
        return this.uiLabelElement.getLabel();
    }

    setLabel(label: string): void {
        this.uiLabelElement.setLabel(label);
    }

    getVisible(): boolean {
        return this.uiCanGetVisibleElement.getVisible();
    }
}

export interface ControlComponents {
    name: string;
    controlType: Xrm.Page.ControlType;
    uiLabelElement?: Xrm.Page.UiLabelElement;
    uiCanGetVisibleElement?: Xrm.Page.UiCanGetVisibleElement;
    parent?: Xrm.Page.Section;
}