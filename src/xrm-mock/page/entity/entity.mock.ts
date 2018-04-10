import { ItemCollectionMock } from "../../collection/itemcollection/itemcollection.mock";

export class EntityMock implements Xrm.Page.Entity {
    public id: string;
    public attributes: ItemCollectionMock<Xrm.Page.Attribute>;

    constructor(id: string, attributes: ItemCollectionMock<Xrm.Page.Attribute>) {
        this.id = id;
        this.attributes = attributes;
    }

    public addOnSave(handler: Xrm.Page.ContextSensitiveHandler): void {
        throw new Error(("addOnSave not implemented"));
    }

    public getEntityName(): string {
        throw new Error(("getEntityName not implemented"));
    }

    public getDataXml(): string {
        throw new Error(("getDataXml not implemented"));
    }

    public getEntityReference(): Xrm.LookupValue {
        throw new Error("Method not implemented.");
    }

    public getId(): string {
        return this.id;
    }

    public getIsDirty(): boolean {
        let isDirty = false;

        if (this.attributes) {
            for (let i = 0; i < this.attributes.getLength(); i++) {
                  const attr = this.attributes.get(i);
                  if (attr.getIsDirty()) {
                      isDirty = true;
                      break;
                  }
            }
        }
        return isDirty;
    }

    public getPrimaryAttributeValue(): string {
        throw new Error(("getPrimaryAttributeValue not implemented"));
    }

    public isValid(): boolean {
        throw new Error("Method not implemented.");
    }

    public removeOnSave(handler: Xrm.Page.ContextSensitiveHandler): void {
        throw new Error(("removeOnSave not implemented"));
    }

    public save(saveMode?: Xrm.Page.SaveMode): void;

    public save(param?: string): void {
        throw new Error(("save not implemented"));
    }
}
