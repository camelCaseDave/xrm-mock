export class MobileOfflineMock implements Xrm.MobileOffline {
    constructor() { }

    isOfflineEnabled(entityType: string): boolean {
        throw ('not implemented');
    }

    createRecord(entityType: string, data: { [attributeName: string]: any }): Xrm.Async.XrmPromise<Xrm.Async.OfflineOperationSuccessCallbackDelegate, Xrm.Async.ErrorCallbackDelegate> {
        throw ('not implemented');
    }

    retrieveRecord(entityType: string, id: string, options: string): Xrm.Async.XrmPromise<Xrm.Async.OfflineOperationSuccessCallbackDelegate, Xrm.Async.ErrorCallbackDelegate> {
        throw ('not implemented');
    }

    retrieveMultipleRecords(entityType: string, options: string, maxPageSize: number): Xrm.Async.XrmPromise<Xrm.Async.OfflineRetrieveMultipleSuccessCallbackDelegate, Xrm.Async.ErrorCallbackDelegate> {
        throw ('not implemented');
    }

    updateRecord(entityType: string, id: string, data: { [attributeName: string]: any }): Xrm.Async.XrmPromise<Xrm.Async.OfflineOperationSuccessCallbackDelegate, Xrm.Async.ErrorCallbackDelegate> {
        throw ('not implemented');
    }

    deleteRecord(entityType: string, id: string): Xrm.Async.XrmPromise<Xrm.Async.OfflineOperationSuccessCallbackDelegate, Xrm.Async.ErrorCallbackDelegate> {
        throw ('not implemented');
    }
}