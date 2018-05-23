/// <reference types="xrm" />
import { PageMock } from "./page/page.mock";
import { UtilityMock } from "./utility/utility.mock";
export declare class XrmStaticMock implements Xrm.XrmStatic {
    Device: Xrm.Device;
    Encoding: Xrm.Encoding;
    Mobile: Xrm.Mobile;
    Navigation: Xrm.Navigation;
    Page: PageMock;
    Panel: Xrm.Panel;
    Utility: UtilityMock;
    WebApi: Xrm.WebApi;
    constructor(components: IXrmStaticComponents);
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
