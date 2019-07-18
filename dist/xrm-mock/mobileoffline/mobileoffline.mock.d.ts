/// <reference types="xrm" />
export declare class MobileOfflineMock implements Xrm.MobileOffline {
    isOfflineEnabled(entityType: string): boolean;
    createRecord(entityType: string, data: {
        [attributeName: string]: any;
    }): Xrm.Async.PromiseLike<Xrm.Async.OfflineOperationSuccessCallbackObject>;
    retrieveRecord(entityType: string, id: string, options: string): Xrm.Async.PromiseLike<Xrm.Async.OfflineOperationSuccessCallbackObject>;
    retrieveMultipleRecords(entityType: string, options: string, maxPageSize: number): Xrm.Async.PromiseLike<Array<{
        [key: string]: any;
    }>>;
    updateRecord(entityType: string, id: string, data: {
        [attributeName: string]: any;
    }): Xrm.Async.PromiseLike<Xrm.Async.OfflineOperationSuccessCallbackObject>;
    deleteRecord(entityType: string, id: string): Xrm.Async.PromiseLike<Xrm.Async.OfflineOperationSuccessCallbackObject>;
}
