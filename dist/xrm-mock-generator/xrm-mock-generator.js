"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var XrmMock = require("../xrm-mock/index");
var attribute_1 = require("./attribute");
var context_1 = require("./context");
var control_1 = require("./control");
var form_1 = require("./form");
var ui_1 = require("./ui");
var webapi_1 = require("./webapi");
var XrmMockGenerator = /** @class */ (function () {
    function XrmMockGenerator() {
    }
    XrmMockGenerator.initialise = function (components) {
        components = components || {};
        var context = context_1.default.createContext();
        var formContext = new XrmMock.FormContextMock(new XrmMock.DataMock(new XrmMock.EntityMock(components.entity)), ui_1.default.createUi());
        var xrm = new XrmMock.XrmStaticMock({
            page: new XrmMock.PageMock(context, formContext),
            webApi: webapi_1.default.createApi(context.client),
        });
        if (typeof global === "undefined") {
            window.Xrm = xrm;
        }
        else {
            global.Xrm = xrm;
        }
        return xrm;
    };
    XrmMockGenerator.Attribute = new attribute_1.default();
    XrmMockGenerator.Context = new context_1.default();
    XrmMockGenerator.Control = new control_1.default();
    XrmMockGenerator.Form = new form_1.default();
    XrmMockGenerator.Ui = new ui_1.default();
    XrmMockGenerator.WebApi = new webapi_1.default();
    return XrmMockGenerator;
}());
exports.XrmMockGenerator = XrmMockGenerator;
//# sourceMappingURL=xrm-mock-generator.js.map