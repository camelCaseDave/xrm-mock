/// <reference types="xrm" />
export declare class ErrorDialogOptionsMock implements Xrm.Navigation.ErrorDialogOptions {
    details?: string;
    errorCode?: number;
    message?: string;
    constructor(details?: string, errorCode?: number, message?: string);
}
