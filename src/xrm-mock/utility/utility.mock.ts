export class UtilityMock implements Xrm.Utility {
    public alertDialog(message: string, onCloseCallback: () => void): void {
        alert(message);
        onCloseCallback();
    }

    public confirmDialog(message: string, yesCloseCallback: () => void, noCloseCallback: () => void): void {
        if (confirm(message)) {
            yesCloseCallback();
        } else {
            noCloseCallback();
        }
    }

    public isActivityType(entityType: string): boolean {
        throw new Error(("is activity type not implemented"));
    }

    public openQuickCreate(entityLogicalName: string, createFromEntity?: Xrm.Page.LookupValue,
                           parameters?: Xrm.Utility.OpenParameters):
        Xrm.Async.XrmPromise<Xrm.Async.QuickCreateSuccessCallbackDelegate, Xrm.Async.ErrorCallbackDelegate> {
        throw new Error(("open quick create not implemented"));
    }

    public openEntityForm(name: string, id?: string, parameters?: Xrm.Utility.FormOpenParameters,
                          windowOptions?: Xrm.Utility.WindowOptions): void {
        throw new Error(("open entity form not implemented"));
    }

    public openWebResource(webResourceName: string, webResourceData?: string, width?: number, height?: number): Window {
        throw new Error(("open web resource not implemented"));
    }
}
