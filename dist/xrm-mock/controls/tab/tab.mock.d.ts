/// <reference types="xrm" />
export declare class TabMock implements Xrm.Controls.Tab {
    sections: Xrm.Collection.ItemCollection<Xrm.Controls.Section>;
    tabStateChangeHandlers: Xrm.Events.ContextSensitiveHandler[];
    private uiStandardElement;
    private uiFocusableElement;
    private name;
    private parent;
    private displayState;
    constructor(components: ITabComponents);
    getDisplayState(): Xrm.DisplayState;
    getName(): string;
    getParent(): Xrm.Ui;
    setDisplayState(displayState: Xrm.DisplayState): void;
    setVisible(visible: boolean): void;
    getVisible(): boolean;
    getLabel(): string;
    setLabel(label: string): void;
    setFocus(): void;
    addTabStateChange(handler: (context: Xrm.Events.EventContext) => void): void;
    removeTabStateChange(handler: (context: Xrm.Events.EventContext) => void): void;
}
export interface ITabComponents {
    uiStandardElement?: Xrm.Controls.UiStandardElement;
    uiFocusableElement?: Xrm.Controls.UiFocusable;
    name?: string;
    parent?: Xrm.Ui;
    displayState?: Xrm.DisplayState;
    sections?: Xrm.Collection.ItemCollection<Xrm.Controls.Section>;
    tabStateChangeHandlers?: Xrm.Events.ContextSensitiveHandler[];
}
