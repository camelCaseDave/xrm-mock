/// <reference types="xrm" />
import { ItemCollectionMock } from "../collection/itemcollection/itemcollection.mock";
export declare class EntityMock implements Xrm.Entity {
    id: string;
    attributes: ItemCollectionMock<Xrm.Attributes.Attribute>;
    constructor(id: string, attributes: ItemCollectionMock<Xrm.Attributes.Attribute>);
    addOnSave(handler: Xrm.Events.ContextSensitiveHandler): void;
    getEntityName(): string;
    getDataXml(): string;
    getEntityReference(): Xrm.LookupValue;
    getId(): string;
    getIsDirty(): boolean;
    getPrimaryAttributeValue(): string;
    isValid(): boolean;
    removeOnSave(handler: Xrm.Events.ContextSensitiveHandler): void;
    save(saveMode?: Xrm.EntitySaveMode): void;
}
