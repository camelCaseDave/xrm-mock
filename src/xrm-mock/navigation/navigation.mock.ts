export class NavigationStaticMock implements Xrm.Navigation {
    private notImplementedError = "Navigation methods not implemented. Consider stubbing calls using a tool such as Sinon.JS";

    public openAlertDialog(alertStrings: Xrm.Navigation.AlertStrings, alertOptions: Xrm.Navigation.DialogSizeOptions)
        : Xrm.Async.PromiseLike<any> {
        throw new Error(this.notImplementedError);
    }

    public openConfirmDialog(confirmStrings: Xrm.Navigation.ConfirmStrings, confirmOptions: Xrm.Navigation.DialogSizeOptions)
        : Xrm.Async.PromiseLike<Xrm.Navigation.ConfirmResult>;
    public openConfirmDialog(errorOptions: Xrm.Navigation.ErrorDialogOptions): Xrm.Async.PromiseLike<any>;

    public openConfirmDialog(param?: Xrm.Navigation.ConfirmStrings | Xrm.Navigation.DialogSizeOptions
        | Xrm.Navigation.ErrorDialogOptions): Xrm.Async.PromiseLike<Xrm.Navigation.ConfirmResult> | Xrm.Async.PromiseLike<any> {
        throw new Error(this.notImplementedError);
    }

    public openErrorDialog(errorOptions: Xrm.Navigation.ErrorDialogOptions): Xrm.Async.PromiseLike<any> {
        throw new Error(this.notImplementedError);
    }

    public openFile(file: Xrm.Navigation.FileDetails, openFileOptions: XrmEnum.OpenFileOptions): void {
        throw new Error(this.notImplementedError);
    }

    public openForm(entityFormOptions: Xrm.Navigation.EntityFormOptions, formParameters: Xrm.Utility.OpenParameters)
        : Xrm.Async.PromiseLike<any> {
        throw new Error(this.notImplementedError);
    }

    public openUrl(url: string, openUrlOptions?: Xrm.Navigation.DialogSizeOptions): void {
        throw new Error(this.notImplementedError);
    }

    public openWebResource(webResourceName: string, windowOptions?: Xrm.Navigation.OpenWebresourceOptions, data?: string): void {
        throw new Error(this.notImplementedError);
    }
}
