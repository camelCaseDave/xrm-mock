/// <reference types="xrm" />
import { ItemCollectionMock } from "../collection/itemcollection/itemcollection.mock";
export declare class DataMock implements Xrm.Data {
    attributes: ItemCollectionMock<Xrm.Attributes.Attribute>;
    entity: Xrm.Entity;
    process: Xrm.ProcessFlow.ProcessManager;
    loadEventHandlers: Xrm.Events.DataLoadEventHandler[];
    constructor(entity: Xrm.Entity, process?: Xrm.ProcessFlow.ProcessManager);
    refresh(save: boolean): Xrm.Async.PromiseLike<undefined>;
    save(saveOptions?: Xrm.SaveOptions): Xrm.Async.PromiseLike<undefined>;
    isValid(): boolean;
    getIsDirty(): boolean;
    addOnLoad(handler: Xrm.Events.DataLoadEventHandler): void;
    removeOnLoad(handler: Xrm.Events.ContextSensitiveHandler): void;
}
