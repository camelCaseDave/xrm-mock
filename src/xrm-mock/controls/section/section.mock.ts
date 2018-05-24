export class SectionMock implements Xrm.Controls.Section {
    public controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control>;
    private name: string;
    private parent: Xrm.Controls.Tab;
    private uiStandardElement: Xrm.Controls.UiStandardElement;

    constructor(name: string, parent: Xrm.Controls.Tab, uiStandardElement: Xrm.Controls.UiStandardElement,
                controls?: Xrm.Collection.ItemCollection<Xrm.Controls.Control>) {
        this.name = name;
        this.parent = parent;
        this.uiStandardElement = uiStandardElement;
        this.controls = controls;
    }

    public getName(): string {
        return this.name;
    }

    public getParent(): Xrm.Controls.Tab {
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
