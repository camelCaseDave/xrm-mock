import * as XrmMock from "../xrm-mock/index";

export default class Navigation {
  public static createNavigation(client?: Xrm.Client): XrmMock.NavigationStaticMock {
    const navigation = new XrmMock.NavigationStaticMock();
    return navigation;
  }
}
