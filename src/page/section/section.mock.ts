class SectionMock implements Xrm.Page.Section {
    name: string;
    parent: Xrm.Page.Tab;
    controls: Xrm.Collection.ItemCollection<Xrm.Page.Control>;
    uiStandardElement: Xrm.Page.UiStandardElement;
    
    constructor(name: string, parent: Xrm.Page.Tab, uiStandardElement: Xrm.Page.UiStandardElement, controls?: Xrm.Collection.ItemCollection<Xrm.Page.Control>) {
        this.name = name;
        this.parent = parent;
        this.uiStandardElement = uiStandardElement;
        this.controls = controls;
    }

    getName(): string {
        return this.name;
    }

    getParent(): Xrm.Page.Tab {
        return this.parent;
    }
    
    setVisible(visible: boolean): void {
        this.uiStandardElement.setVisible(visible);
    }

    getVisible(): boolean {
        return this.uiStandardElement.getVisible();
    }

    getLabel(): string {
        return this.uiStandardElement.getLabel();
    }

    setLabel(label: string): void {
        this.uiStandardElement.setLabel(label);
    }
}