import { ProcessManagerMock } from "./data/processmanager/processmanager.mock";
import { PageMock } from "./page/page.mock";
import { UtilityMock } from "./utility/utility.mock";

export class XrmStaticMock {
    public Page: PageMock;
    public Utility: UtilityMock;
    public Mobile: Xrm.Mobile;
    public Panel: Xrm.Panel;

    constructor(components: IXrmStaticComponents) {
        this.Page = components.page;
        this.Utility = components.utility;
        this.Mobile = components.mobile;
        this.Panel = components.panel;
    }
}

export interface IXrmStaticComponents {
    page?: PageMock;
    utility?: UtilityMock;
    mobile?: Xrm.Mobile;
    panel?: Xrm.Panel;
}
