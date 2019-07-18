export class XrmPromiseMock<TSuccessCallback, TErrorCallback> implements Xrm.Async.PromiseLike<TSuccessCallback> {
    public then<U>(onFulfilled?: (value: TSuccessCallback) => U | Xrm.Async.PromiseLike<U>,
                   onRejected?: (error: any) => U | Xrm.Async.PromiseLike<U> | void): Xrm.Async.PromiseLike<U> {
        throw new Error("Method not implemented.");
    }

    public fail<U>(onRejected?: (reason: Xrm.ErrorResponse) => U | Xrm.Async.PromiseLike<U>): Xrm.Async.PromiseLike<U> {
        throw new Error("Method not implemented.");
    }

    public always<U>(alwaysCallback: () => U | Xrm.Async.PromiseLike<U>): Xrm.Async.PromiseLike<U> {
        throw new Error("Method not implemented.");
    }

    public catch<U>(onRejected?: (reason: Xrm.ErrorResponse) => U | Xrm.Async.PromiseLike<U>): Xrm.Async.PromiseLike<U> {
        throw new Error("Method not implemented.");
    }

    public finally<U>(finallyCallback: () => U | Xrm.Async.PromiseLike<U>): Xrm.Async.PromiseLike<U> {
        throw new Error("Method not implemented.");
    }
}
