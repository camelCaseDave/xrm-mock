/// <reference types="xrm" />
import { ItemCollectionMock } from "../collection/itemcollection/itemcollection.mock";
export declare class EntityMock implements Xrm.Entity {
    id: string;
    entityName: string;
    primaryValue: string;
    attributes: ItemCollectionMock<Xrm.Attributes.Attribute>;
    saveEventHandlers: Xrm.Events.ContextSensitiveHandler[];
    constructor(components?: IEntityComponents);
    addOnPostSave(handler: Xrm.Events.ContextSensitiveHandler): void;
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
    private getSaveContext;
    private getSaveEventArgs;
}
export interface IEntityComponents {
    id?: string;
    entityName?: string;
    primaryValue?: string;
    attributes?: ItemCollectionMock<Xrm.Attributes.Attribute>;
}
