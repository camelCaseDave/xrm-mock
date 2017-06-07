/// <reference path="../../node_modules/@types/xrm/index.d.ts" />

class UtilityMock implements Xrm.Utility {  
    alertDialog(message: string, onCloseCallback: () => void): void {
        alert(message);
        onCloseCallback();
    }

    confirmDialog(message: string, yesCloseCallback: () => void, noCloseCallback: () => void): void {
        if (confirm(message))
            yesCloseCallback();
        else
            noCloseCallback();
    }

    isActivityType(entityType: string): boolean {
        throw ('is activity type not implemented');
    }
   
    openQuickCreate(entityLogicalName: string, createFromEntity?: Xrm.Page.LookupValue, parameters?: Xrm.Utility.OpenParameters):
        Xrm.Async.XrmPromise<Xrm.Async.QuickCreateSuccessCallbackDelegate, Xrm.Async.ErrorCallbackDelegate> {
            throw ('open quick create not implemented');
        }
   
    openEntityForm(name: string, id?: string, parameters?: Xrm.Utility.FormOpenParameters, windowOptions?: Xrm.Utility.WindowOptions): void {
        throw ('open entity form not implemented');
    }

    openWebResource(webResourceName: string, webResourceData?: string, width?: number, height?: number): Window {
       throw ('open web resource not implemented'); 
    }
}