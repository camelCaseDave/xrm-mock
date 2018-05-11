import * as XrmMock from "../xrm-mock/index";

export default class WebApi {
  public static createApi(clientContext: Xrm.ClientContext): XrmMock.WebApiMock {
    const offlineApi = this.createOfflineApi();
    const onlineApi = this.createOnlineApi(offlineApi);
    const api = new XrmMock.WebApiMock(clientContext, onlineApi, offlineApi);
    return api;
  }

  private static createOfflineApi(): XrmMock.WebApiOfflineMock {
    const offlineApi = new XrmMock.WebApiOfflineMock();
    return offlineApi;
  }

  private static createOnlineApi(offlineApi: Xrm.WebApiOffline): XrmMock.WebApiOnlineMock {
    const onlineApi = new XrmMock.WebApiOnlineMock(offlineApi);
    return onlineApi;
  }
}
