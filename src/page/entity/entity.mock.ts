export class EntityMock implements Xrm.Page.Entity {
    id: string;
    attributes: Xrm.Collection.ItemCollection<Xrm.Page.Attribute>;

    constructor(id: string, attributes: Xrm.Collection.ItemCollection<Xrm.Page.Attribute>) {
        this.id = id;
        this.attributes = attributes;
    }

    addOnSave(handler: Xrm.Page.ContextSensitiveHandler): void {
        throw ('addOnSave not implemented');
    }

    getEntityName(): string {
        throw ('getEntityName not implemented');
    }

    getDataXml(): string {
        throw ('getDataXml not implemented');
    }

    getId(): string {
        return this.id;
    }

    getIsDirty(): boolean {
        let isDirty = false;

        if (this.attributes) {
            for (var i = 0; i < this.attributes.getLength(); i++) {
                  let attr = this.attributes.get(i);
                  if (attr.getIsDirty()) {
                      isDirty = true;
                      break;
                  }             
            }                  
        }
        return isDirty;
    }

    getPrimaryAttributeValue(): string {
        throw ('getPrimaryAttributeValue not implemented');
    }

    removeOnSave(handler: Xrm.Page.ContextSensitiveHandler): void {
        throw ('removeOnSave not implemented');
    }

    save(): void;
    save(saveMode: Xrm.Page.SaveMode): void;

    save(param?: string): void {
        throw ('save not implemented');
    }
}