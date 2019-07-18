/// <reference types="xrm" />
export declare class SectionMock implements Xrm.Controls.Section {
    controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control>;
    parent: Xrm.Controls.Tab;
    private name;
    private uiStandardElement;
    constructor(name: string, parent?: Xrm.Controls.Tab, uiStandardElement?: Xrm.Controls.UiStandardElement, controls?: Xrm.Collection.ItemCollection<Xrm.Controls.Control>);
    getName(): string;
    getParent(): Xrm.Controls.Tab;
    setVisible(visible: boolean): void;
    getVisible(): boolean;
    getLabel(): string;
    setLabel(label: string): void;
}
