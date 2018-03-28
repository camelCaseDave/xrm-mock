export class XrmPromiseMock<TSuccessCallback, TErrorCallback>
    implements Xrm.Async.XrmPromise<TSuccessCallback, TErrorCallback> {

    public then(successCallback: TSuccessCallback, errorCallback: TErrorCallback): void {
        throw new Error("not implemented");
    }
}
