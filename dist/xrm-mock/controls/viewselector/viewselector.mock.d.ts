/// <reference types="xrm" />
export declare class ViewSelectorMock implements Xrm.Controls.ViewSelector {
    private visible;
    private currentView;
    constructor(isVisible: boolean);
    getCurrentView(): Xrm.Controls.ViewSelectorItem;
    isVisible(): boolean;
    setCurrentView(viewSelectorItem: Xrm.Controls.ViewSelectorItem): void;
}
