/// <reference types="xrm" />
export declare class NavigationMock implements Xrm.Controls.Navigation {
    items: Xrm.Collection.ItemCollection<Xrm.Controls.NavigationItem>;
    constructor(items: Xrm.Collection.ItemCollection<Xrm.Controls.NavigationItem>);
}
