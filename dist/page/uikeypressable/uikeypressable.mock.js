"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UiKeyPressable = (function () {
    function UiKeyPressable() {
    }
    UiKeyPressable.prototype.addOnKeyPress = function (handler) {
        this.keyPressHandlers.push(handler);
    };
    UiKeyPressable.prototype.fireOnKeyPress = function (eventContext) {
        this.keyPressHandlers.forEach(function (k) {
            k(eventContext);
        });
    };
    UiKeyPressable.prototype.removeOnKeyPress = function (handler) {
        var index = this.keyPressHandlers.indexOf(handler);
        if (index > -1)
            this.keyPressHandlers.splice(index);
    };
    return UiKeyPressable;
}());
exports.UiKeyPressable = UiKeyPressable;
