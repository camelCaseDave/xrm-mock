/// <reference types="xrm" />
import { LookupAttributeMock } from "../lookupattribute/lookupattribute.mock";
import { IAttStandardControlComponents, IStandardControlComponents, StandardControlMock } from "../standardcontrol/standardcontrol.mock";
export declare class LookupControlMock extends StandardControlMock<LookupControlMock, LookupAttributeMock, Xrm.Page.LookupValue[]> implements Xrm.Page.LookupControl {
    private static defaultComponents(components);
    preSearchHandlers: Xrm.Page.ContextSensitiveHandler[];
    views: ILookupView[];
    filters: ILookupFilter[];
    constructor(components: ILookupControlComponents);
    addPreSearch(handler: Xrm.Page.ContextSensitiveHandler): void;
    addCustomFilter(filter: string, entityLogicalName?: string): void;
    addCustomView(viewId: string, entityName: string, viewDisplayName: string, fetchXml: string, layoutXml: string, isDefault: boolean): void;
    getDefaultView(): string;
    removePreSearch(handler: () => void): void;
    setDefaultView(viewGuid: string): void;
}
export interface ILookupControlComponents extends IStandardControlComponents<LookupControlMock, LookupAttributeMock, Xrm.Page.LookupValue[]>, IAttLookupControlComponents {
}
export interface IAttLookupControlComponents extends IAttStandardControlComponents<LookupControlMock, LookupAttributeMock, Xrm.Page.LookupValue[]> {
    filters?: ILookupFilter[];
    views?: ILookupView[];
    preSearchHandlers?: Xrm.Page.ContextSensitiveHandler[];
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
