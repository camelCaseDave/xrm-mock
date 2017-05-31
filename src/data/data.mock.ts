/// <reference path="../../node_modules/@types/xrm/index.d.ts" />

class DataMock implements Xrm.Data {
    entity: Xrm.Page.Entity;
    process: Xrm.Page.data.ProcessManager;

    constructor(entity: Xrm.Page.Entity, process?: Xrm.Page.data.ProcessManager) {
        this.entity = entity;
        this.process = process;
    }

    refresh(save: boolean): Xrm.Async.XrmPromise<Xrm.Async.SuccessCallbackDelegate, Xrm.Async.ErrorCallbackDelegate> {
        throw ('refresh not implemented');
    }

    save(): Xrm.Async.XrmPromise<Xrm.Async.SuccessCallbackDelegate, Xrm.Async.ErrorCallbackDelegate>;
    save(saveOptions: Xrm.SaveOptions): Xrm.Async.XrmPromise<Xrm.Async.SuccessCallbackDelegate, Xrm.Async.ErrorCallbackDelegate>;

    save(saveOptions?: Xrm.SaveOptions): Xrm.Async.XrmPromise<Xrm.Async.SuccessCallbackDelegate, Xrm.Async.ErrorCallbackDelegate> {     
        throw ('save not implemented');
    }
}
