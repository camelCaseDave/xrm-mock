/// <reference types="xrm" />
export declare class UtilityMock implements Xrm.Utility {
    alertDialog(message: string, onCloseCallback: () => void): void;
    confirmDialog(message: string, yesCloseCallback: () => void, noCloseCallback: () => void): void;
    isActivityType(entityType: string): boolean;
    openQuickCreate(entityLogicalName: string, createFromEntity?: Xrm.Page.LookupValue, parameters?: Xrm.Utility.OpenParameters): Xrm.Async.XrmPromise<Xrm.Async.QuickCreateSuccessCallbackDelegate, Xrm.Async.ErrorCallbackDelegate>;
    openEntityForm(name: string, id?: string, parameters?: Xrm.Utility.FormOpenParameters, windowOptions?: Xrm.Utility.WindowOptions): void;
    openWebResource(webResourceName: string, webResourceData?: string, width?: number, height?: number): Window;
}
