/// <reference types="xrm" />
export declare class SectionMock implements Xrm.Page.Section {
    name: string;
    parent: Xrm.Page.Tab;
    controls: Xrm.Collection.ItemCollection<Xrm.Page.Control>;
    uiStandardElement: Xrm.Page.UiStandardElement;
    constructor(name: string, parent: Xrm.Page.Tab, uiStandardElement: Xrm.Page.UiStandardElement, controls?: Xrm.Collection.ItemCollection<Xrm.Page.Control>);
    getName(): string;
    getParent(): Xrm.Page.Tab;
    setVisible(visible: boolean): void;
    getVisible(): boolean;
    getLabel(): string;
    setLabel(label: string): void;
}
