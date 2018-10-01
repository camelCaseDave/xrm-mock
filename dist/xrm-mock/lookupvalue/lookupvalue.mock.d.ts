/// <reference types="xrm" />
export declare class LookupValueMock implements Xrm.LookupValue {
    id: string;
    name?: string;
    entityType: string;
    constructor(id: string, entityType: string, name?: string);
}
