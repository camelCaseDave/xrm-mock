import { ItemCollectionMock } from "../collection/itemcollection/itemcollection.mock";

export class DataMock implements Xrm.Data {
    public attributes: ItemCollectionMock<Xrm.Attributes.Attribute>;
    public entity: Xrm.Entity;
    public process: Xrm.ProcessFlow.ProcessManager;
    public loadEventHandlers: Xrm.Events.DataLoadEventHandler[];

    constructor(entity: Xrm.Entity, process?: Xrm.ProcessFlow.ProcessManager) {
        this.attributes = new ItemCollectionMock();
        this.entity = entity;
        this.process = process;
        this.loadEventHandlers = [];
    }

    public refresh(save: boolean): Xrm.Async.PromiseLike<undefined> {
        throw new Error(("refresh not implemented"));
    }

    public save(saveOptions?: Xrm.SaveOptions): Xrm.Async.PromiseLike<undefined> {
        throw new Error(("save not implemented"));
    }
    public isValid(): boolean {
        throw new Error(("isValid not implemented"));
    }

    public getIsDirty(): boolean {
        throw new Error(("getIsDirty not implemented"));
    }

    public addOnLoad(handler: Xrm.Events.DataLoadEventHandler): void {
        this.loadEventHandlers.push(handler);
    }

    public removeOnLoad(handler: Xrm.Events.ContextSensitiveHandler): void {
        const index: number = this.loadEventHandlers.indexOf(handler);
        this.loadEventHandlers.splice(index);
    }
}
