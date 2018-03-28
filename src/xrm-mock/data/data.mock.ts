export class DataMock implements Xrm.Data {
    public entity: Xrm.Page.Entity;
    public process: Xrm.Page.data.ProcessManager;

    constructor(entity: Xrm.Page.Entity, process?: Xrm.Page.data.ProcessManager) {
        this.entity = entity;
        this.process = process;
    }

    public refresh(save: boolean):
        Xrm.Async.XrmPromise<Xrm.Async.SuccessCallbackDelegate, Xrm.Async.ErrorCallbackDelegate> {
        throw new Error(("refresh not implemented"));
    }

    public save(): Xrm.Async.XrmPromise<Xrm.Async.SuccessCallbackDelegate, Xrm.Async.ErrorCallbackDelegate>;
    public save(saveOptions: Xrm.SaveOptions): Xrm.Async.XrmPromise<Xrm.Async.SuccessCallbackDelegate,
        Xrm.Async.ErrorCallbackDelegate>;

    public save(saveOptions?: Xrm.SaveOptions):
        Xrm.Async.XrmPromise<Xrm.Async.SuccessCallbackDelegate, Xrm.Async.ErrorCallbackDelegate> {
        throw new Error(("save not implemented"));
    }
}
