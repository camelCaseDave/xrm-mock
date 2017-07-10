"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SaveEventArgumentsMock = (function () {
    function SaveEventArgumentsMock(saveMode) {
        this.defaultPrevented = false;
        this.saveMode = saveMode;
    }
    SaveEventArgumentsMock.prototype.getSaveMode = function () {
        return this.saveMode;
    };
    SaveEventArgumentsMock.prototype.isDefaultPrevented = function () {
        return this.defaultPrevented;
    };
    SaveEventArgumentsMock.prototype.preventDefault = function () {
        this.defaultPrevented = true;
    };
    return SaveEventArgumentsMock;
}());
exports.SaveEventArgumentsMock = SaveEventArgumentsMock;
