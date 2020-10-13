/// <reference types="xrm" />
export declare class NavigationStaticMock implements Xrm.Navigation {
    private notImplementedError;
    navigateTo(pageInput: Xrm.Navigation.PageInputEntityList | Xrm.Navigation.PageInputHtmlWebResource, navigationOptions?: Xrm.Navigation.NavigationOptions): Xrm.Async.PromiseLike<any>;
    openAlertDialog(alertStrings: Xrm.Navigation.AlertStrings, alertOptions: Xrm.Navigation.DialogSizeOptions): Xrm.Async.PromiseLike<any>;
    openConfirmDialog(confirmStrings: Xrm.Navigation.ConfirmStrings, confirmOptions: Xrm.Navigation.DialogSizeOptions): Xrm.Async.PromiseLike<Xrm.Navigation.ConfirmResult>;
    openConfirmDialog(errorOptions: Xrm.Navigation.ErrorDialogOptions): Xrm.Async.PromiseLike<any>;
    openErrorDialog(errorOptions: Xrm.Navigation.ErrorDialogOptions): Xrm.Async.PromiseLike<any>;
    openFile(file: Xrm.Navigation.FileDetails, openFileOptions: XrmEnum.OpenFileOptions): void;
    openForm(entityFormOptions: Xrm.Navigation.EntityFormOptions, formParameters: Xrm.Utility.OpenParameters): Xrm.Async.PromiseLike<any>;
    openUrl(url: string, openUrlOptions?: Xrm.Navigation.DialogSizeOptions): void;
    openWebResource(webResourceName: string, windowOptions?: Xrm.Navigation.OpenWebresourceOptions, data?: string): void;
}
