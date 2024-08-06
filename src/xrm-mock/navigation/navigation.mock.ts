import { XrmPromiseMock } from "../async/xrmpromise/xrmpromise.mock";

export class NavigationStaticMock implements Xrm.Navigation {
    private returnValueNotImplemented = "Return value not implemented!";
    public alertDialogCalls: {
        alertStrings: Xrm.Navigation.AlertStrings,
        alertOptions?: Xrm.Navigation.DialogSizeOptions,
    }[] = [];
    public confirmDialogCalls: {
        confirmStrings: Xrm.Navigation.ConfirmStrings,
        confirmOptions?: Xrm.Navigation.DialogSizeOptions,
    }[] = [];
    public errorDialogCalls: {
        errorOptions: Xrm.Navigation.ErrorDialogOptions,
    }[] = [];
    public fileDialogCalls: {
        file: Xrm.Navigation.FileDetails,
        openFileOptions?: Xrm.Navigation.OpenFileOptions,
    }[] = [];
    public formCalls: {
        entityFormOptions: Xrm.Navigation.EntityFormOptions,
        formParameters?: Xrm.Utility.OpenParameters,
    }[] = [];
    public navigateToCalls: {
        pageInput:
            | Xrm.Navigation.PageInputEntityRecord
            | Xrm.Navigation.PageInputEntityList
            | Xrm.Navigation.CustomPage
            | Xrm.Navigation.PageInputHtmlWebResource
            | Xrm.Navigation.Dashboard,
        navigationOptions?: Xrm.Navigation.NavigationOptions,
    }[] = [];
    public urlCalls: {
        url: string,
        openUrlOptions?: Xrm.Navigation.DialogSizeOptions,
    }[] = [];
    public webResourceCalls: {
        webResourceName: string,
        windowOptions?: Xrm.Navigation.OpenWebresourceOptions,
        data?: string,
    }[] = [];

    public navigateTo(
        pageInput:
            | Xrm.Navigation.PageInputEntityRecord
            | Xrm.Navigation.PageInputEntityList
            | Xrm.Navigation.CustomPage
            | Xrm.Navigation.PageInputHtmlWebResource
            | Xrm.Navigation.Dashboard,
        navigationOptions?: Xrm.Navigation.NavigationOptions
    ): Xrm.Async.PromiseLike<any> {
        return XrmPromiseMock.delay(() => {
            this.navigateToCalls.push({ pageInput, navigationOptions });
            return this.returnValueNotImplemented
        });
    }

    public openAlertDialog(alertStrings: Xrm.Navigation.AlertStrings, alertOptions?: Xrm.Navigation.DialogSizeOptions)
            : Xrm.Async.PromiseLike<any> {
        return XrmPromiseMock.delayVoid(() => {
            this.alertDialogCalls.push({ alertStrings, alertOptions });
        });
    }

    public openConfirmDialog(confirmStrings: Xrm.Navigation.ConfirmStrings, confirmOptions?: Xrm.Navigation.DialogSizeOptions)
            : Xrm.Async.PromiseLike<Xrm.Navigation.ConfirmResult> {
        return XrmPromiseMock.delay(() => {
            this.confirmDialogCalls.push({ confirmStrings, confirmOptions });
            return { confirmed: true }
        });
    }

    public openErrorDialog(errorOptions: Xrm.Navigation.ErrorDialogOptions): Xrm.Async.PromiseLike<any> {
        return XrmPromiseMock.delay(() => {
            this.errorDialogCalls.push({ errorOptions });
            return this.returnValueNotImplemented;
        });
    }

    public openFile(file: Xrm.Navigation.FileDetails, openFileOptions?: Xrm.Navigation.OpenFileOptions): void {
        this.fileDialogCalls.push({ file, openFileOptions });
    }

    public openForm(entityFormOptions: Xrm.Navigation.EntityFormOptions, formParameters?: Xrm.Utility.OpenParameters) : Xrm.Async.PromiseLike<any> {
        return XrmPromiseMock.delay(() => {
            this.formCalls.push({ entityFormOptions, formParameters });
            return this.returnValueNotImplemented
        });
    }

    public openUrl(url: string, openUrlOptions?: Xrm.Navigation.DialogSizeOptions): void {
        this.urlCalls.push({ url, openUrlOptions });
    }

    public openWebResource(webResourceName: string, windowOptions?: Xrm.Navigation.OpenWebresourceOptions, data?: string): void {
        this.webResourceCalls.push({ webResourceName, windowOptions, data });
    }
}
