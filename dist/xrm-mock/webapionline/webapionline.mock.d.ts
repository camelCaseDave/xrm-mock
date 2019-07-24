/// <reference types="xrm" />
export declare class WebApiOnlineMock implements Xrm.WebApiOnline {
    private offline;
    private notImplementedError;
    constructor(offlineCapabilities: Xrm.WebApiOffline);
    execute(request: any): Xrm.Async.PromiseLike<Xrm.ExecuteResponse>;
    executeMultiple(request: any[]): Xrm.Async.PromiseLike<Xrm.ExecuteResponse[]>;
    createRecord(entityLogicalName: string, record: any): Xrm.Async.PromiseLike<Xrm.CreateResponse>;
    deleteRecord(entityLogicalName: string, id: string): Xrm.Async.PromiseLike<string>;
    retrieveRecord(entityLogicalName: string, id: string, options: string): Xrm.Async.PromiseLike<any>;
    retrieveMultipleRecords(entityLogicalName: string, options?: string, maxPageSize?: number): Xrm.Async.PromiseLike<Xrm.RetrieveMultipleResult>;
    updateRecord(entityLogicalName: string, id: string, data: any): Xrm.Async.PromiseLike<any>;
}
