import { AttributeMock, AttributeReturnType } from "../attributes/attribute/attribute.mock";
import { ItemCollectionMock } from "../collection/itemcollection/itemcollection.mock";
import { ControlMock } from "../controls/control/control.mock";

export class DataMock implements Xrm.Data {
    public attributes: ItemCollectionMock<AttributeMock<ControlMock, AttributeReturnType>>;
    public entity: Xrm.Entity;
    public process: Xrm.ProcessFlow.ProcessManager;

    constructor(entity: Xrm.Entity, process?: Xrm.ProcessFlow.ProcessManager) {
        this.attributes = new ItemCollectionMock();
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
