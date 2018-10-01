/// <reference types="xrm" />
export declare class ConfirmStringsMock implements Xrm.Navigation.ConfirmStrings {
    cancelButtonLabel?: string;
    confirmButtonLabel?: string;
    subtitle?: string;
    title?: string;
    text: string;
    constructor(components: IConfirmStringsComponents);
}
export interface IConfirmStringsComponents {
    cancelButtonLabel?: string;
    confirmButtonLabel?: string;
    subtitle?: string;
    title?: string;
    text: string;
}
