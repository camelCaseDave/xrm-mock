/// <reference types="xrm" />
import { AppMock } from "./app/app.mock";
import { NavigationStaticMock } from "./navigation/navigation.mock";
import { PageMock } from "./page/page.mock";
import { UtilityMock } from "./utility/utility.mock";
export declare class XrmStaticMock implements Xrm.XrmStatic {
    Device: Xrm.Device;
    Encoding: Xrm.Encoding;
    Mobile: Xrm.Mobile;
    Navigation: NavigationStaticMock;
    Page: PageMock;
    Panel: Xrm.Panel;
    Utility: UtilityMock;
    WebApi: Xrm.WebApi;
    App: AppMock;
    constructor(components: IXrmStaticComponents);
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
