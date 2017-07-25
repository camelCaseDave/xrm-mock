/// <reference types="xrm" />
export declare class EntityMock implements Xrm.Page.Entity {
    attributes: Xrm.Collection.ItemCollection<Xrm.Page.Attribute>;
    constructor(attributes: Xrm.Collection.ItemCollection<Xrm.Page.Attribute>);
    addOnSave(handler: Xrm.Page.ContextSensitiveHandler): void;
    getEntityName(): string;
    getDataXml(): string;
    getId(): string;
    getIsDirty(): boolean;
    getPrimaryAttributeValue(): string;
    removeOnSave(handler: Xrm.Page.ContextSensitiveHandler): void;
    save(): void;
    save(saveMode: Xrm.Page.SaveMode): void;
}
