/// <reference types="xrm" />
export declare class ErrorCallbackObjectMock implements Xrm.Async.ErrorCallbackObject {
    errorCode: number;
    message: string;
    constructor(errorCode: number, message: string);
}
