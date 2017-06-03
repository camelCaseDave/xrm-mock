/// <reference path="../../../node_modules/@types/xrm/index.d.ts" />

class EntityMock implements Xrm.Page.Entity {
    attributes: Xrm.Collection.ItemCollection<Xrm.Page.Attribute>;

    constructor(attributes: Xrm.Collection.ItemCollection<Xrm.Page.Attribute>) {
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
        throw ('getId not implemented');
    }

    getIsDirty(): boolean {
        throw ('getIsDirty not implemented');
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