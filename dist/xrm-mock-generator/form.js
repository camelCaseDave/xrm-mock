"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var XrmMock = require("../xrm-mock/index");
var Form = /** @class */ (function () {
    function Form() {
    }
    Form.createBlankForm = function () {
        var formItem = new XrmMock.FormItemMock({
            currentItem: true,
            formType: 1,
            id: "{00000000-0000-0000-0000-000000000000}",
            label: "",
        });
        return formItem;
    };
    return Form;
}());
exports.default = Form;
//# sourceMappingURL=form.js.map