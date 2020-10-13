"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XrmMockGenerator = void 0;
var XrmMock = require("../xrm-mock/index");
var app_1 = require("./app");
var attribute_1 = require("./attribute");
var context_1 = require("./context");
var control_1 = require("./control");
var device_1 = require("./device");
var eventcontext_1 = require("./eventcontext");
var form_1 = require("./form");
var formcontext_1 = require("./formcontext");
var mobile_1 = require("./mobile");
var navigation_1 = require("./navigation");
var section_1 = require("./section");
var tab_1 = require("./tab");
var utility_1 = require("./utility");
var webapi_1 = require("./webapi");
var XrmMockGenerator = /** @class */ (function () {
    function XrmMockGenerator() {
    }
    XrmMockGenerator.initialise = function (components) {
        components = components || {};
        this.context = components.context || context_1.default.createContext();
        this.formContext = formcontext_1.default.createFormContext(components.entity, components.ui, components.process);
        this.eventContext = eventcontext_1.default.createEventContext(components.entity, components.context, this.formContext, components.ui, components.process);
        var xrm = new XrmMock.XrmStaticMock({
            app: app_1.default.createApp(),
            device: device_1.default.createDevice(),
            mobile: mobile_1.default.createMobile(),
            navigation: navigation_1.default.createNavigation(),
            page: new XrmMock.PageMock(this.context, this.formContext),
            utility: utility_1.default.createUtility(),
            webApi: webapi_1.default.createApi(this.context.client),
        });
        if (typeof global === "undefined") {
            window.Xrm = xrm;
        }
        else {
            global.Xrm = xrm;
        }
        return xrm;
    };
    XrmMockGenerator.getEventContext = function () {
        return this.eventContext;
    };
    XrmMockGenerator.getFormContext = function () {
        return this.formContext;
    };
    XrmMockGenerator.EventContext = new eventcontext_1.default();
    XrmMockGenerator.FormContext = new formcontext_1.default();
    XrmMockGenerator.Attribute = new attribute_1.default();
    XrmMockGenerator.Context = new context_1.default();
    XrmMockGenerator.Control = new control_1.default();
    XrmMockGenerator.Device = new device_1.default();
    XrmMockGenerator.Mobile = new mobile_1.default();
    XrmMockGenerator.Tab = new tab_1.default();
    XrmMockGenerator.Section = new section_1.default();
    XrmMockGenerator.Form = new form_1.default();
    XrmMockGenerator.Navigation = new navigation_1.default();
    XrmMockGenerator.WebApi = new webapi_1.default();
    XrmMockGenerator.Utility = new utility_1.default();
    XrmMockGenerator.App = new app_1.default();
    return XrmMockGenerator;
}());
exports.XrmMockGenerator = XrmMockGenerator;
//# sourceMappingURL=xrm-mock-generator.js.map