"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WindowMock = (function () {
    function WindowMock(xrm) {
        this.Xrm = xrm;
    }
    WindowMock.prototype.GetGlobalContext = function () {
        throw 'not implemented';
    };
    return WindowMock;
}());
exports.WindowMock = WindowMock;
