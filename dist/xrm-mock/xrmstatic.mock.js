"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XrmStaticMock = void 0;
var XrmStaticMock = /** @class */ (function () {
    function XrmStaticMock(components) {
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
    return XrmStaticMock;
}());
exports.XrmStaticMock = XrmStaticMock;
//# sourceMappingURL=xrmstatic.mock.js.map