import { ItemCollectionMock } from "../collection/itemcollection/itemcollection.mock";
import { AttributeMock, AttributeReturnType } from "../page/attribute/attribute.mock";
import { ControlMock } from "../page/control/control.mock";

export class DataMock implements Xrm.Data {
    public attributes: ItemCollectionMock<AttributeMock<ControlMock, AttributeReturnType>>;
    public entity: Xrm.Page.Entity;
    public process: Xrm.Page.data.ProcessManager;

    constructor(entity: Xrm.Page.Entity, process?: Xrm.Page.data.ProcessManager) {
        this.entity = entity;
        this.process = process;
    }

    public refresh(save: boolean): Xrm.Async.PromiseLike<undefined> {
        throw new Error(("refresh not implemented"));
    }

    public save(saveOptions?: Xrm.SaveOptions): Xrm.Async.PromiseLike<undefined> {
        throw new Error(("save not implemented"));
    }
}
