"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormSelectorMock = void 0;
var FormSelectorMock = /** @class */ (function () {
    function FormSelectorMock(items) {
        this.items = items;
    }
    FormSelectorMock.prototype.getCurrentItem = function () {
        var currentItem;
        if (this.items.itemCollection && this.items.itemCollection.length) {
            currentItem = this.items.itemCollection.filter(function (i) { return i.currentItem; })[0] || null;
        }
        return currentItem;
    };
    return FormSelectorMock;
}());
exports.FormSelectorMock = FormSelectorMock;
//# sourceMappingURL=formselector.mock.js.map