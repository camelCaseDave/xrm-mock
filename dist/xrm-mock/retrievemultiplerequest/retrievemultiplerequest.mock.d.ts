/// <reference types="xrm" />
export declare class RetrieveMultipleRequestMock implements Xrm.RetrieveMultipleResult {
    entities: any[];
    nextLink: string;
    constructor(entities: any[], nextLink: string);
}
