"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FormItemMock = /** @class */ (function () {
    function FormItemMock(components) {
        this.id = components.id;
        this.label = components.label;
        this.formType = components.formType;
        this.currentItem = components.currentItem;
    }
    FormItemMock.prototype.getId = function () {
        return this.id;
    };
    FormItemMock.prototype.getLabel = function () {
        return this.label;
    };
    FormItemMock.prototype.navigate = function () {
        throw new Error("Form navigation not implemented.");
    };
    return FormItemMock;
}());
exports.FormItemMock = FormItemMock;
//# sourceMappingURL=formitem.mock.js.map