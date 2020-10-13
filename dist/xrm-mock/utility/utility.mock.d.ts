/// <reference types="xrm" />
export declare class UtilityMock implements Xrm.Utility {
    alertDialog(message: string, onCloseCallback: () => void): void;
    confirmDialog(message: string, yesCloseCallback: () => void, noCloseCallback: () => void): void;
    isActivityType(entityType: string): boolean;
    openQuickCreate(entityLogicalName: string, createFromEntity?: Xrm.LookupValue, parameters?: Xrm.Utility.OpenParameters): Xrm.Async.PromiseLike<Xrm.Async.OpenQuickCreateSuccessCallbackObject>;
    openEntityForm(name: string, id?: string, parameters?: Xrm.Utility.FormOpenParameters, windowOptions?: Xrm.Utility.WindowOptions): void;
    openWebResource(webResourceName: string, webResourceData?: string, width?: number, height?: number): Window;
    closeProgressIndicator(): void;
    getAllowedStatusTransitions(entityName: string, stateCode: number): Xrm.Async.PromiseLike<any>;
    getEntityMetadata(entityName: string, attributes?: string[]): Xrm.Async.PromiseLike<Xrm.Metadata.EntityMetadata>;
    getGlobalContext(): Xrm.GlobalContext;
    getResourceString(webResourceName: string, key: string): string;
    invokeProcessAction(name: string, parameters: Xrm.Collection.Dictionary<any>): Xrm.Async.PromiseLike<any>;
    lookupObjects(lookupOptions: Xrm.LookupOptions): Xrm.Async.PromiseLike<Xrm.LookupValue[]>;
    refreshParentGrid(lookupOptions: Xrm.LookupValue): void;
    showProgressIndicator(message: string): void;
    getLearningPathAttributeName(): string;
    getPageContext(): any;
}
