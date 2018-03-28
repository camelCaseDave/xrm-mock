export class FormOpenParametersMock implements Xrm.Utility.OpenParameters {
    [index: string]: string | undefined;
    public formid?: string;
    public navbar?: Xrm.Url.NavBarDisplay;
    public cmdbar?: Xrm.Url.CmdBarDisplay;

    constructor(formid?: string, navbar?: Xrm.Url.NavBarDisplay, cmdbar?: Xrm.Url.CmdBarDisplay) {
        this.formid = formid;
        this.navbar = navbar;
        this.cmdbar = cmdbar;
    }
}
