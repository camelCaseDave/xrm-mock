export class OfflineOperationSuccessCallbackObjectMock implements Xrm.Async.OfflineOperationSuccessCallbackObject {
    id: string;
    logicalName: string;

    constructor(id: string, logicalName: string) {
        this.id = id;
        this.logicalName = logicalName;
    }
}