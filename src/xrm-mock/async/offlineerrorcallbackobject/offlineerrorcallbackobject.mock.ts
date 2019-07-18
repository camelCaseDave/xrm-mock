export class OfflineErrorCallbackObjectMock implements Xrm.Async.OfflineErrorCallbackObject {
    public debugMessage: string;
    public errorCallbackObject: Xrm.Async.ErrorCallbackObject;
    public errorCode: number;
    public message: string;

    constructor(errorCallbackObject: Xrm.Async.ErrorCallbackObject, debugMessage: string) {
        this.errorCallbackObject = errorCallbackObject;
        this.debugMessage = debugMessage;
        this.errorCode = errorCallbackObject.errorCode;
        this.message = errorCallbackObject.message;
    }
}
