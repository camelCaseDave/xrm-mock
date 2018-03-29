/// <reference types="xrm" />
export declare class DataMock implements Xrm.Data {
    entity: Xrm.Page.Entity;
    process: Xrm.Page.data.ProcessManager;
    constructor(entity: Xrm.Page.Entity, process?: Xrm.Page.data.ProcessManager);
    refresh(save: boolean): Xrm.Async.XrmPromise<Xrm.Async.SuccessCallbackDelegate, Xrm.Async.ErrorCallbackDelegate>;
    save(): Xrm.Async.XrmPromise<Xrm.Async.SuccessCallbackDelegate, Xrm.Async.ErrorCallbackDelegate>;
    save(saveOptions: Xrm.SaveOptions): Xrm.Async.XrmPromise<Xrm.Async.SuccessCallbackDelegate, Xrm.Async.ErrorCallbackDelegate>;
}
