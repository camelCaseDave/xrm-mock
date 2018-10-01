/// <reference types="xrm" />
import * as XrmMock from "../xrm-mock/index";
export default class WebApi {
    static createApi(clientContext: Xrm.ClientContext): XrmMock.WebApiMock;
    private static createOfflineApi;
    private static createOnlineApi;
}
