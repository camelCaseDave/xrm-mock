"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XrmPromiseMock = void 0;
var XrmPromiseMock = /** @class */ (function () {
    function XrmPromiseMock() {
    }
    XrmPromiseMock.prototype.then = function (onFulfilled, onRejected) {
        throw new Error("Method not implemented.");
    };
    XrmPromiseMock.prototype.fail = function (onRejected) {
        throw new Error("Method not implemented.");
    };
    XrmPromiseMock.prototype.always = function (alwaysCallback) {
        throw new Error("Method not implemented.");
    };
    XrmPromiseMock.prototype.catch = function (onRejected) {
        throw new Error("Method not implemented.");
    };
    XrmPromiseMock.prototype.finally = function (finallyCallback) {
        throw new Error("Method not implemented.");
    };
    return XrmPromiseMock;
}());
exports.XrmPromiseMock = XrmPromiseMock;
//# sourceMappingURL=xrmpromise.mock.js.map