/// <reference types="xrm" />
export declare class OfflineErrorCallbackObjectMock implements Xrm.Async.OfflineErrorCallbackObject {
    debugMessage: string;
    errorCallbackObject: Xrm.Async.ErrorCallbackObject;
    errorCode: number;
    message: string;
    constructor(errorCallbackObject: Xrm.Async.ErrorCallbackObject, debugMessage: string);
}
