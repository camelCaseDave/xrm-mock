/// <reference types="xrm" />
export declare class WebApiMock implements Xrm.WebApi {
    online: Xrm.WebApiOnline;
    offline: Xrm.WebApiOffline;
    private clientContext;
    private isOffline;
    constructor(clientContext: Xrm.ClientContext, online: Xrm.WebApiOnline, offline: Xrm.WebApiOffline);
    createRecord(entityLogicalName: string, record: any): Xrm.Async.PromiseLike<Xrm.CreateResponse>;
    deleteRecord(entityLogicalName: string, id: string): Xrm.Async.PromiseLike<string>;
    retrieveRecord(entityLogicalName: string, id: string, options: string): Xrm.Async.PromiseLike<any>;
    retrieveMultipleRecords(entityLogicalName: string, options?: string, maxPageSize?: number): Xrm.Async.PromiseLike<Xrm.RetrieveMultipleResult>;
    updateRecord(entityLogicalName: string, id: string, data: any): Xrm.Async.PromiseLike<any>;
    isAvailableOffline(entityLogicalName: string): boolean;
}
