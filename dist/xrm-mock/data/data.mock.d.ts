/// <reference types="xrm" />
import { AttributeMock, AttributeReturnType } from "../attributes/attribute/attribute.mock";
import { ItemCollectionMock } from "../collection/itemcollection/itemcollection.mock";
import { ControlMock } from "../controls/control/control.mock";
export declare class DataMock implements Xrm.Data {
    attributes: ItemCollectionMock<AttributeMock<ControlMock, AttributeReturnType>>;
    entity: Xrm.Entity;
    process: Xrm.ProcessFlow.ProcessManager;
    loadEventHandlers: Xrm.Events.ContextSensitiveHandler[];
    constructor(entity: Xrm.Entity, process?: Xrm.ProcessFlow.ProcessManager);
    refresh(save: boolean): Xrm.Async.PromiseLike<undefined>;
    save(saveOptions?: Xrm.SaveOptions): Xrm.Async.PromiseLike<undefined>;
    isValid(): boolean;
    getIsDirty(): boolean;
    addOnLoad(handler: Xrm.Events.ContextSensitiveHandler): void;
    removeOnLoad(handler: Xrm.Events.ContextSensitiveHandler): void;
}
