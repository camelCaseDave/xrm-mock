"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var XrmPromiseMock = /** @class */ (function () {
    function XrmPromiseMock() {
    }
    XrmPromiseMock.prototype.then = function (successCallback, errorCallback) {
        throw new Error("not implemented");
    };
    return XrmPromiseMock;
}());
exports.XrmPromiseMock = XrmPromiseMock;
