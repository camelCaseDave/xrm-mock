/// <reference types="xrm" />
import { DialogSizeOptionsMock } from "../dialogsizeoptions/dialogsizeoptions.mock";
export declare class OpenWebresourceOptionsMock extends DialogSizeOptionsMock implements Xrm.Navigation.OpenWebresourceOptions {
    openInNewWindow: boolean;
    constructor(openInNewWindow: boolean, height: number, width: number);
}
