export class OfflineOperationSuccessCallbackObjectMock implements Xrm.Async.OfflineOperationSuccessCallbackObject {
    public id: string;
    public logicalName: string;

    constructor(id: string, logicalName: string) {
        this.id = id;
        this.logicalName = logicalName;
    }
}
