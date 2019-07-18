/// <reference types="xrm" />
export declare class NavigationItemMock implements Xrm.Controls.NavigationItem {
    private id;
    private standardElement;
    private focusable;
    constructor(id: string, standardElement: Xrm.Controls.UiStandardElement, focusable: Xrm.Controls.UiFocusable);
    setVisible(visible: boolean): void;
    getVisible(): boolean;
    getLabel(): string;
    setLabel(label: string): void;
    setFocus(): void;
    getId(): string;
}
