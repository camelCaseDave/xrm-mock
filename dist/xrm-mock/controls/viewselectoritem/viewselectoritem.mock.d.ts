/// <reference types="xrm" />
export declare class ViewSelectorItemMock implements Xrm.Controls.ViewSelectorItem {
    private reference;
    constructor(reference: Xrm.LookupValue);
    getEntityReference(): Xrm.LookupValue;
}
