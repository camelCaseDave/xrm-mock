export class ErrorCallbackObjectMock implements Xrm.Async.ErrorCallbackObject {
    errorCode: number;
    message: string;

    constructor(errorCode: number, message: string) {
        this.errorCode = errorCode;
        this.message = message;
    }
}