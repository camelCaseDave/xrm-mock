"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var XrmMock = require("../xrm-mock/index");
var context_1 = require("./context");
var control_1 = require("./control");
var form_1 = require("./form");
var ui_1 = require("./ui");
var XrmMockGenerator = /** @class */ (function () {
    function XrmMockGenerator() {
    }
    XrmMockGenerator.initialise = function () {
        var xrm = new XrmMock.XrmStaticMock({
            page: new XrmMock.PageMock({
                context: context_1.default.createContext(),
                data: new XrmMock.DataMock(new XrmMock.EntityMock("{00000000-0000-0000-0000-000000000000}", new XrmMock.ItemCollectionMock([]))),
                ui: ui_1.default.createUi(),
            }),
        });
        global.Xrm = xrm;
        return xrm;
    };
    XrmMockGenerator.Context = new context_1.default();
    XrmMockGenerator.Control = new control_1.default();
    XrmMockGenerator.Form = new form_1.default();
    XrmMockGenerator.Ui = new ui_1.default();
    return XrmMockGenerator;
}());
exports.XrmMockGenerator = XrmMockGenerator;
