export class SectionMock implements Xrm.Page.Section {
    public name: string;
    public parent: Xrm.Page.Tab;
    public controls: Xrm.Collection.ItemCollection<Xrm.Page.Control>;
    public uiStandardElement: Xrm.Page.UiStandardElement;

    constructor(name: string, parent: Xrm.Page.Tab, uiStandardElement: Xrm.Page.UiStandardElement,
                controls?: Xrm.Collection.ItemCollection<Xrm.Page.Control>) {
        this.name = name;
        this.parent = parent;
        this.uiStandardElement = uiStandardElement;
        this.controls = controls;
    }

    public getName(): string {
        return this.name;
    }

    public getParent(): Xrm.Page.Tab {
        return this.parent;
    }

    public setVisible(visible: boolean): void {
        this.uiStandardElement.setVisible(visible);
    }

    public getVisible(): boolean {
        return this.uiStandardElement.getVisible();
    }

    public getLabel(): string {
        return this.uiStandardElement.getLabel();
    }

    public setLabel(label: string): void {
        this.uiStandardElement.setLabel(label);
    }
}
