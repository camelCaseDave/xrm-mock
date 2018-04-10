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

    public openQuickCreate(entityLogicalName: string, createFromEntity?: Xrm.Page.LookupValue, parameters?: Xrm.Utility.OpenParameters):
        Xrm.Async.PromiseLike<Xrm.Async.OpenQuickCreateSuccessCallbackObject> {
        throw new Error(("open quick create not implemented"));
    }

    public openEntityForm(name: string, id?: string, parameters?: Xrm.Utility.FormOpenParameters,
                          windowOptions?: Xrm.Utility.WindowOptions): void {
        throw new Error(("open entity form not implemented"));
    }

    public openWebResource(webResourceName: string, webResourceData?: string, width?: number, height?: number): Window {
        throw new Error(("open web resource not implemented"));
    }

    public closeProgressIndicator(): void {
        throw new Error("Method not implemented.");
    }

    public getAllowedStatusTransitions(entityName: string, stateCode: number): Xrm.Async.PromiseLike<any> {
        throw new Error("Method not implemented.");
    }

    public getEntityMetadata(entityName: string, attributes?: string[]): Xrm.Async.PromiseLike<Xrm.Metadata.EntityMetadata> {
        throw new Error("Method not implemented.");
    }

    public getGlobalContext(): Xrm.GlobalContext {
        throw new Error("Method not implemented.");
    }

    public getResourceString(webResourceName: string, key: string): string {
        throw new Error("Method not implemented.");
    }

    public invokeProcessAction(name: string, parameters: Xrm.Collection.Dictionary<any>): Xrm.Async.PromiseLike<any> {
        throw new Error("Method not implemented.");
    }

    public lookupObjects(lookupOptions: Xrm.LookupOptions): Xrm.Async.PromiseLike<Xrm.LookupValue> {
        throw new Error("Method not implemented.");
    }

    public refreshParentGrid(lookupOptions: Xrm.LookupValue): void {
        throw new Error("Method not implemented.");
    }

    public showProgressIndicator(message: string): void {
        throw new Error("Method not implemented.");
    }
}
