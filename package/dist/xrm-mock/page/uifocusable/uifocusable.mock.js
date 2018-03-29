"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UiFocusableMock = /** @class */ (function () {
    function UiFocusableMock() {
    }
    UiFocusableMock.prototype.setFocus = function () {
        this.isFocussed = true;
    };
    return UiFocusableMock;
}());
exports.UiFocusableMock = UiFocusableMock;
