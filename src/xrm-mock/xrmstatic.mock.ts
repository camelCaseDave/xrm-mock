import { AppMock } from "./app/app.mock";
import { NavigationStaticMock } from "./navigation/navigation.mock";
import { PageMock } from "./page/page.mock";
import { ProcessManagerMock } from "./processflow/processmanager/processmanager.mock";
import { UtilityMock } from "./utility/utility.mock";

export class XrmStaticMock implements Xrm.XrmStatic {
    public Device: Xrm.Device;
    public Encoding: Xrm.Encoding;
    public Mobile: Xrm.Mobile;
    public Navigation: NavigationStaticMock;
    public Page: PageMock;
    public Panel: Xrm.Panel;
    public Utility: UtilityMock;
    public WebApi: Xrm.WebApi;
    public App: AppMock;

    constructor(components: IXrmStaticComponents) {
        this.Device = components.device;
        this.Encoding = components.encoding;
        this.Mobile = components.mobile;
        this.Navigation = components.navigation;
        this.Page = components.page;
        this.Panel = components.panel;
        this.Utility = components.utility;
        this.WebApi = components.webApi;
        this.App = components.app;
    }
}

export interface IXrmStaticComponents {
    device?: Xrm.Device;
    encoding?: Xrm.Encoding;
    mobile?: Xrm.Mobile;
    navigation?: NavigationStaticMock;
    page?: PageMock;
    panel?: Xrm.Panel;
    utility?: UtilityMock;
    webApi?: Xrm.WebApi;
    app?: AppMock;
}
