export class ErrorCallbackObjectMock implements Xrm.Async.ErrorCallbackObject {
    public errorCode: number;
    public message: string;

    constructor(errorCode: number, message: string) {
        this.errorCode = errorCode;
        this.message = message;
    }
}
