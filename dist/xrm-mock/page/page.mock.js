"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageMock = void 0;
var PageMock = /** @class */ (function () {
    function PageMock(context, formContext) {
        this.context = context;
        this.data = formContext.data;
        this.ui = formContext.ui;
    }
    PageMock.prototype.getAttribute = function (param) {
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
    PageMock.prototype.getControl = function (param) {
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
    return PageMock;
}());
exports.PageMock = PageMock;
//# sourceMappingURL=page.mock.js.map