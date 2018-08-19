"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var XrmMock = require("../xrm-mock/index");
var form_1 = require("./form");
var Ui = /** @class */ (function () {
    function Ui() {
    }
    Ui.createUi = function () {
        var ui = new XrmMock.UiMock({
            controls: new XrmMock.ItemCollectionMock([]),
            formSelector: new XrmMock.FormSelectorMock(new XrmMock.ItemCollectionMock([form_1.default.createBlankForm()])),
            tabs: new XrmMock.ItemCollectionMock([]),
        });
        return ui;
    };
    Ui.createLabelElement = function (label) {
        return new XrmMock.UiLabelElementMock(label);
    };
    Ui.createCanGetVisibleElement = function (isVisible) {
        return new XrmMock.UiCanGetVisibleElementMock(isVisible);
    };
    Ui.createStandardElement = function (labelElement, visibleElement) {
        return new XrmMock.UiStandardElementMock(labelElement, visibleElement);
    };
    return Ui;
}());
exports.default = Ui;
//# sourceMappingURL=ui.js.map