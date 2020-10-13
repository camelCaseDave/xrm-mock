/// <reference types="xrm" />
export declare class ViewSelectorMock implements Xrm.Controls.ViewSelector {
    private visible;
    private currentView;
    constructor(isVisible: boolean);
    getCurrentView(): Xrm.LookupValue;
    setCurrentView(viewSelectorItem: Xrm.LookupValue): void;
    isVisible(): boolean;
}
