/// <reference path="../node_modules/@types/xrm/index.d.ts" />

class XrmStaticMock {
    Page: Xrm.Page;
    Utility: Xrm.Utility;
    Mobile: Xrm.Mobile;
    Panel: Xrm.Panel;

    constructor(page: Xrm.Page, utility?: Xrm.Utility, mobile?: Xrm.Mobile, panel?: Xrm.Panel) {
        this.Page = page;
        this.Utility = utility;
        this.Mobile = mobile;
        this.Panel = panel;
    }
}
