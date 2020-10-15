"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormContextMock = void 0;
var FormContextMock = /** @class */ (function () {
    function FormContextMock(data, ui) {
        this.data = data;
        this.ui = ui;
    }
    FormContextMock.prototype.getAttribute = function (param) {
        if (!arguments.length) {
            return this.data.entity.attributes.get();
        }
        else if (param && typeof param === "string") {
            return this.data.entity.attributes.get(param);
        }
        else if (typeof param === "number") {
            return this.data.entity.attributes.get(param);
        }
        else if (typeof param === "function") {
            return this.data.entity.attributes.get(param);
        }
        throw new Error("Collection.Get called with unknown parameter type: " + typeof param);
    };
    FormContextMock.prototype.getControl = function (param) {
        if (!arguments.length || param === undefined || param === null) {
            return this.ui.controls.get();
        }
        else if (typeof param === "string") {
            return this.ui.controls.get(param);
        }
        else if (typeof param === "number") {
            return this.ui.controls.get(param);
        }
        else if (typeof param === "function") {
            return this.ui.controls.get(param);
        }
        throw new Error("Collection.Get called with unknown parameter type: " + typeof param);
    };
    return FormContextMock;
}());
exports.FormContextMock = FormContextMock;
//# sourceMappingURL=formcontext.mock.js.map