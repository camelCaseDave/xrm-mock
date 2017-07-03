"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UiFocusableMock = (function () {
    function UiFocusableMock() {
    }
    UiFocusableMock.prototype.setFocus = function () {
        this.isFocussed = true;
    };
    return UiFocusableMock;
}());
exports.UiFocusableMock = UiFocusableMock;
