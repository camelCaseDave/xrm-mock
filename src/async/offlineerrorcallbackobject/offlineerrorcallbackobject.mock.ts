export class OfflineErrorCallbackObjectMock implements Xrm.Async.OfflineErrorCallbackObject {
    debugMessage: string;
    errorCallbackObject: Xrm.Async.ErrorCallbackObject;
    errorCode: number;
    message: string;

    constructor(errorCallbackObject: Xrm.Async.ErrorCallbackObject, debugMessage: string) {
        this.errorCallbackObject = errorCallbackObject;
        this.debugMessage = debugMessage;
        this.errorCode = errorCallbackObject.errorCode;
        this.message = errorCallbackObject.message;
    }
}