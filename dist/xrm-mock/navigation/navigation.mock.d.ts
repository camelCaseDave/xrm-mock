/// <reference types="xrm" />
export declare class NavigationStaticMock implements Xrm.Navigation {
    private returnValueNotImplemented;
    alertDialogCalls: {
        alertStrings: Xrm.Navigation.AlertStrings;
        alertOptions?: Xrm.Navigation.DialogSizeOptions;
    }[];
    confirmDialogCalls: {
        confirmStrings: Xrm.Navigation.ConfirmStrings;
        confirmOptions?: Xrm.Navigation.DialogSizeOptions;
    }[];
    errorDialogCalls: {
        errorOptions: Xrm.Navigation.ErrorDialogOptions;
    }[];
    fileDialogCalls: {
        file: Xrm.Navigation.FileDetails;
        openFileOptions?: Xrm.Navigation.OpenFileOptions;
    }[];
    formCalls: {
        entityFormOptions: Xrm.Navigation.EntityFormOptions;
        formParameters?: Xrm.Utility.OpenParameters;
    }[];
    navigateToCalls: {
        pageInput: Xrm.Navigation.PageInputEntityRecord | Xrm.Navigation.PageInputEntityList | Xrm.Navigation.CustomPage | Xrm.Navigation.PageInputHtmlWebResource | Xrm.Navigation.Dashboard;
        navigationOptions?: Xrm.Navigation.NavigationOptions;
    }[];
    urlCalls: {
        url: string;
        openUrlOptions?: Xrm.Navigation.DialogSizeOptions;
    }[];
    webResourceCalls: {
        webResourceName: string;
        windowOptions?: Xrm.Navigation.OpenWebresourceOptions;
        data?: string;
    }[];
    navigateTo(pageInput: Xrm.Navigation.PageInputEntityRecord | Xrm.Navigation.PageInputEntityList | Xrm.Navigation.CustomPage | Xrm.Navigation.PageInputHtmlWebResource | Xrm.Navigation.Dashboard, navigationOptions?: Xrm.Navigation.NavigationOptions): Xrm.Async.PromiseLike<any>;
    openAlertDialog(alertStrings: Xrm.Navigation.AlertStrings, alertOptions?: Xrm.Navigation.DialogSizeOptions): Xrm.Async.PromiseLike<any>;
    openConfirmDialog(confirmStrings: Xrm.Navigation.ConfirmStrings, confirmOptions?: Xrm.Navigation.DialogSizeOptions): Xrm.Async.PromiseLike<Xrm.Navigation.ConfirmResult>;
    openErrorDialog(errorOptions: Xrm.Navigation.ErrorDialogOptions): Xrm.Async.PromiseLike<any>;
    openFile(file: Xrm.Navigation.FileDetails, openFileOptions?: Xrm.Navigation.OpenFileOptions): void;
    openForm(entityFormOptions: Xrm.Navigation.EntityFormOptions, formParameters?: Xrm.Utility.OpenParameters): Xrm.Async.PromiseLike<any>;
    openUrl(url: string, openUrlOptions?: Xrm.Navigation.DialogSizeOptions): void;
    openWebResource(webResourceName: string, windowOptions?: Xrm.Navigation.OpenWebresourceOptions, data?: string): void;
}
