/// <reference types="xrm" />
export declare class XrmPromiseMock<TSuccessCallback, TErrorCallback> implements Xrm.Async.PromiseLike<TSuccessCallback> {
    then<U>(onFulfilled?: (value: TSuccessCallback) => U | Xrm.Async.PromiseLike<U>, onRejected?: (error: any) => U | Xrm.Async.PromiseLike<U> | void): Xrm.Async.PromiseLike<U>;
    fail<U>(onRejected?: (reason: Xrm.ErrorResponse) => U | Xrm.Async.PromiseLike<U>): Xrm.Async.PromiseLike<U>;
    always<U>(alwaysCallback: () => U | Xrm.Async.PromiseLike<U>): Xrm.Async.PromiseLike<U>;
    catch<U>(onRejected?: (reason: Xrm.ErrorResponse) => U | Xrm.Async.PromiseLike<U>): Xrm.Async.PromiseLike<U>;
    finally<U>(finallyCallback: () => U | Xrm.Async.PromiseLike<U>): Xrm.Async.PromiseLike<U>;
}
