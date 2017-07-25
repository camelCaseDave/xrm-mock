/// <reference types="xrm" />
export declare class MobileOfflineMock implements Xrm.MobileOffline {
    constructor();
    isOfflineEnabled(entityType: string): boolean;
    createRecord(entityType: string, data: {
        [attributeName: string]: any;
    }): Xrm.Async.XrmPromise<Xrm.Async.OfflineOperationSuccessCallbackDelegate, Xrm.Async.ErrorCallbackDelegate>;
    retrieveRecord(entityType: string, id: string, options: string): Xrm.Async.XrmPromise<Xrm.Async.OfflineOperationSuccessCallbackDelegate, Xrm.Async.ErrorCallbackDelegate>;
    retrieveMultipleRecords(entityType: string, options: string, maxPageSize: number): Xrm.Async.XrmPromise<Xrm.Async.OfflineRetrieveMultipleSuccessCallbackDelegate, Xrm.Async.ErrorCallbackDelegate>;
    updateRecord(entityType: string, id: string, data: {
        [attributeName: string]: any;
    }): Xrm.Async.XrmPromise<Xrm.Async.OfflineOperationSuccessCallbackDelegate, Xrm.Async.ErrorCallbackDelegate>;
    deleteRecord(entityType: string, id: string): Xrm.Async.XrmPromise<Xrm.Async.OfflineOperationSuccessCallbackDelegate, Xrm.Async.ErrorCallbackDelegate>;
}
