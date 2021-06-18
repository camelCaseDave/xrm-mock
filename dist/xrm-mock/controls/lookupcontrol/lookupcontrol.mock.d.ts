/// <reference types="xrm" />
import { LookupAttributeMock } from "../../attributes/lookupattribute/lookupattribute.mock";
import { IAttStandardControlComponents, IStandardControlComponents, StandardControlMock } from "../standardcontrol/standardcontrol.mock";
export declare class LookupControlMock extends StandardControlMock<LookupControlMock, LookupAttributeMock, Xrm.LookupValue[]> implements Xrm.Controls.LookupControl {
    private static defaultComponents;
    entityTypes: string[];
    filters: ILookupFilter[];
    onLookupTagHandlers: Xrm.Events.ContextSensitiveHandler[];
    preSearchHandlers: Xrm.Events.ContextSensitiveHandler[];
    views: ILookupView[];
    constructor(components: ILookupControlComponents);
    addOnLookupTagClick(handler: Xrm.Events.ContextSensitiveHandler): void;
    addPreSearch(handler: Xrm.Events.ContextSensitiveHandler): void;
    addCustomFilter(filter: string, entityLogicalName?: string): void;
    addCustomView(viewId: string, entityName: string, viewDisplayName: string, fetchXml: string, layoutXml: string, isDefault: boolean): void;
    fireOnLookupTagClick(context: Xrm.Events.EventContext): void;
    firePreSearch(context: Xrm.Events.EventContext): void;
    getDefaultView(): string;
    getEntityTypes(): string[];
    setEntityTypes(entityLogicalNames: string[]): void;
    removeOnLookupTagClick(handler: Xrm.Events.ContextSensitiveHandler): void;
    removePreSearch(handler: Xrm.Events.ContextSensitiveHandler): void;
    setDefaultView(viewGuid: string): void;
}
export interface ILookupControlComponents extends IStandardControlComponents<LookupControlMock, LookupAttributeMock, Xrm.LookupValue[]>, IAttLookupControlComponents {
    name: string;
}
export interface IAttLookupControlComponents extends IAttStandardControlComponents<LookupControlMock, LookupAttributeMock, Xrm.LookupValue[]> {
    entityTypes?: string[];
    filters?: ILookupFilter[];
    views?: ILookupView[];
    onLookupTagHandlers?: Xrm.Events.ContextSensitiveHandler[];
    preSearchHandlers?: Xrm.Events.ContextSensitiveHandler[];
}
export interface ILookupFilter {
    filter: string;
    entityLogicalName?: string;
}
export interface ILookupView {
    viewId: string;
    entityName: string;
    viewDisplayName: string;
    fetchXml: string;
    layoutXml: string;
    isDefault: boolean;
}
