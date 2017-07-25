/// <reference types="xrm" />
export declare class FormOpenParametersMock implements Xrm.Utility.OpenParameters {
    [index: string]: string | undefined;
    formid?: string;
    navbar?: Xrm.Url.NavBarDisplay;
    cmdbar?: Xrm.Url.CmdBarDisplay;
    constructor(formid?: string, navbar?: Xrm.Url.NavBarDisplay, cmdbar?: Xrm.Url.CmdBarDisplay);
}
