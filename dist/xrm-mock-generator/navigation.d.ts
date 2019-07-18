/// <reference types="xrm" />
import * as XrmMock from "../xrm-mock/index";
export default class Navigation {
    static createNavigation(client?: Xrm.Client): XrmMock.NavigationStaticMock;
}
