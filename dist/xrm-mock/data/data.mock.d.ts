/// <reference types="xrm" />
import { AttributeMock, AttributeReturnType } from "../attributes/attribute/attribute.mock";
import { ItemCollectionMock } from "../collection/itemcollection/itemcollection.mock";
import { ControlMock } from "../page/control/control.mock";
export declare class DataMock implements Xrm.Data {
    attributes: ItemCollectionMock<AttributeMock<ControlMock, AttributeReturnType>>;
    entity: Xrm.Page.Entity;
    process: Xrm.Page.data.ProcessManager;
    constructor(entity: Xrm.Page.Entity, process?: Xrm.Page.data.ProcessManager);
    refresh(save: boolean): Xrm.Async.PromiseLike<undefined>;
    save(saveOptions?: Xrm.SaveOptions): Xrm.Async.PromiseLike<undefined>;
}
