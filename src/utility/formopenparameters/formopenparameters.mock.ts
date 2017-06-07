/// <reference path="../../../node_modules/@types/xrm/index.d.ts" />

class FormOpenParametersMock implements Xrm.Utility.OpenParameters {
    [index: string]: string | undefined;
    formid?: string;
    navbar?: Xrm.Url.NavBarDisplay;    
    cmdbar?: Xrm.Url.CmdBarDisplay;    

    constructor(formid?: string, navbar?: Xrm.Url.NavBarDisplay, cmdbar?: Xrm.Url.CmdBarDisplay) {
        this.formid = formid;
        this.navbar = navbar;
        this.cmdbar = cmdbar;
    }
}