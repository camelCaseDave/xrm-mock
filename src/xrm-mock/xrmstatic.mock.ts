import { ProcessManagerMock } from "./data/processmanager/processmanager.mock";
import { PageMock } from "./page/page.mock";
import { UtilityMock } from "./utility/utility.mock";

export class XrmStaticMock {
    public Device: Xrm.Device;
    public Encoding: Xrm.Encoding;
    public Mobile: Xrm.Mobile;
    public Navigation: Xrm.Navigation;
    public Page: PageMock;
    public Panel: Xrm.Panel;
    public Utility: UtilityMock;
    public WebApi: Xrm.WebApi;

    constructor(components: IXrmStaticComponents) {
        this.Device = components.device;
        this.Encoding = components.encoding;
        this.Mobile = components.mobile;
        this.Navigation = components.navigation;
        this.Page = components.page;
        this.Panel = components.panel;
        this.Utility = components.utility;
        this.WebApi = components.webApi;
    }
}

export interface IXrmStaticComponents {
    device?: Xrm.Device;
    encoding?: Xrm.Encoding;
    mobile?: Xrm.Mobile;
    navigation?: Xrm.Navigation;
    page?: PageMock;
    panel?: Xrm.Panel;
    utility?: UtilityMock;
    webApi?: Xrm.WebApi;
}
