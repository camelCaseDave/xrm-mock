"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var XrmPromiseMock = (function () {
    function XrmPromiseMock() {
    }
    XrmPromiseMock.prototype.then = function (successCallback, errorCallback) {
        throw 'not implemented';
        //if (typeof successCallback === "function") {
        //    successCallback();
        //}
    };
    return XrmPromiseMock;
}());
exports.XrmPromiseMock = XrmPromiseMock;
