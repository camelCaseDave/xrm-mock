/// <reference types="xrm" />
export declare class LookupOptionsMock implements Xrm.LookupOptions {
    allowMultiSelect?: boolean;
    defaultEntityType?: string;
    defaultViewId?: string;
    entityTypes?: string[];
    showBarcodeScanner?: boolean;
    viewIds?: string[];
    constructor(components: ILookupOptionsComponents);
}
export interface ILookupOptionsComponents {
    allowMultiSelect?: boolean;
    defaultEntityType?: string;
    defaultViewId?: string;
    entityTypes?: string[];
    showBarcodeScanner?: boolean;
    viewIds?: string[];
}
