"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var XrmMock = require("../xrm-mock/index");
var ui_1 = require("./ui");
var FormContext = /** @class */ (function () {
    function FormContext() {
    }
    // [Yagasoft | 2018-08-15 | Added] Process Mock
    // [Yagasoft | 2018-08-09 | Added] UI Mock as param to be able to inject the full model
    FormContext.createFormContext = function (entity, ui, process) {
        return new XrmMock.FormContextMock(new XrmMock.DataMock(new XrmMock.EntityMock(entity), process), ui || ui_1.default.createUi());
    };
    return FormContext;
}());
exports.default = FormContext;
//# sourceMappingURL=formcontext.js.map