/// <reference types="xrm" />
import { ItemCollectionMock } from "../collection/itemcollection/itemcollection.mock";
export declare class EntityMock implements Xrm.Entity {
    id: string;
    entityName: string;
    primaryValue: string;
    attributes: ItemCollectionMock<Xrm.Attributes.Attribute>;
    postSaveEventHandlers: Xrm.Events.PostSaveEventHandler[];
    saveEventHandlers: (Xrm.Events.SaveEventHandler | Xrm.Events.SaveEventHandlerAsync)[];
    constructor(components?: IEntityComponents);
    addOnPostSave(handler: Xrm.Events.PostSaveEventHandler): void;
    addOnSave(handler: Xrm.Events.SaveEventHandler | Xrm.Events.SaveEventHandlerAsync): void;
    getEntityName(): string;
    getDataXml(): string;
    getEntityReference(): Xrm.LookupValue;
    getId(): string;
    getIsDirty(): boolean;
    getPrimaryAttributeValue(): string;
    isValid(): boolean;
    removeOnPostSave(handler: Xrm.Events.PostSaveEventHandler): void;
    removeOnSave(handler: Xrm.Events.SaveEventHandler | Xrm.Events.SaveEventHandlerAsync): void;
    save(saveMode?: Xrm.EntitySaveMode): void;
    private getSaveContext;
    private getPostSaveContext;
}
export interface IEntityComponents {
    id?: string;
    entityName?: string;
    primaryValue?: string;
    attributes?: ItemCollectionMock<Xrm.Attributes.Attribute>;
}
