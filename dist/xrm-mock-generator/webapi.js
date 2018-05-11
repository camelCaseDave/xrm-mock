"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var XrmMock = require("../xrm-mock/index");
var WebApi = /** @class */ (function () {
    function WebApi() {
    }
    WebApi.createApi = function (clientContext) {
        var offlineApi = this.createOfflineApi();
        var onlineApi = this.createOnlineApi(offlineApi);
        var api = new XrmMock.WebApiMock(clientContext, onlineApi, offlineApi);
        return api;
    };
    WebApi.createOfflineApi = function () {
        var offlineApi = new XrmMock.WebApiOfflineMock();
        return offlineApi;
    };
    WebApi.createOnlineApi = function (offlineApi) {
        var onlineApi = new XrmMock.WebApiOnlineMock(offlineApi);
        return onlineApi;
    };
    return WebApi;
}());
exports.default = WebApi;
//# sourceMappingURL=webapi.js.map