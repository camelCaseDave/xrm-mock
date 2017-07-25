export declare class XrmPromiseMock<TSuccessCallback, TErrorCallback> implements Xrm.Async.XrmPromise<TSuccessCallback, TErrorCallback> {
    constructor();
    then(successCallback: TSuccessCallback, errorCallback: TErrorCallback): void;
}
