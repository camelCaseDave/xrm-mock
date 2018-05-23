/// <reference types="xrm" />
import { ItemCollectionMock } from "../collection/itemcollection/itemcollection.mock";
export declare class EntityMock implements Xrm.Page.Entity {
    id: string;
    attributes: ItemCollectionMock<Xrm.Page.Attribute>;
    constructor(id: string, attributes: ItemCollectionMock<Xrm.Page.Attribute>);
    addOnSave(handler: Xrm.Page.ContextSensitiveHandler): void;
    getEntityName(): string;
    getDataXml(): string;
    getEntityReference(): Xrm.LookupValue;
    getId(): string;
    getIsDirty(): boolean;
    getPrimaryAttributeValue(): string;
    isValid(): boolean;
    removeOnSave(handler: Xrm.Page.ContextSensitiveHandler): void;
    save(saveMode?: Xrm.Page.SaveMode): void;
}
