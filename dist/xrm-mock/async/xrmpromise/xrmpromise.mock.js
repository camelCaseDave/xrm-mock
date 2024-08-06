"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XrmPromiseMock = void 0;
var XrmPromiseMock = /** @class */ (function () {
    function XrmPromiseMock(promise) {
        this.promise = promise;
    }
    XrmPromiseMock.prototype.then = function (onFulfilled, onRejected) {
        return new XrmPromiseMock(this.promise.then(onFulfilled, onRejected));
    };
    XrmPromiseMock.prototype.fail = function (onRejected) {
        return new XrmPromiseMock(this.promise.catch(onRejected));
    };
    XrmPromiseMock.prototype.always = function (alwaysCallback) {
        return new XrmPromiseMock(this.promise.finally(alwaysCallback));
    };
    XrmPromiseMock.prototype.catch = function (onRejected) {
        return new XrmPromiseMock(this.promise.catch(onRejected));
    };
    XrmPromiseMock.prototype.finally = function (finallyCallback) {
        return new XrmPromiseMock(this.promise.finally(finallyCallback));
    };
    /**
     * Creates a PromiseLike<T> that is resolved with the given value or the result of calling the given function, after a timeout.
     * @param value value or function that returns a value to resolve the PromiseLike<T> with.
     * @param timeout The time to wait before resolving the PromiseLike<T> with the value (in milliseconds). Defaults to 1.
     * @returns PromiseLike<T> for the given value
     */
    XrmPromiseMock.delay = function (value, timeout) {
        return new XrmPromiseMock(new Promise(function (resolve) {
            setTimeout(function () {
                if (typeof value === "function") {
                    value = value();
                }
                resolve(value);
            }, timeout !== null && timeout !== void 0 ? timeout : 1);
        }));
    };
    /**
     * Creates a PromiseLike<void> that is resolved after a timeout.
     * @param action The action to perform after the timeout.
     * @param timeout The time to wait before calling the action, and resolving the PromiseLike<void>. Defaults to 1.
     * @returns PromiseLike<void>
     */
    XrmPromiseMock.delayVoid = function (action, timeout) {
        return new XrmPromiseMock(new Promise(function (resolve) {
            setTimeout(function () {
                if (action) {
                    action();
                }
                resolve();
            }, timeout !== null && timeout !== void 0 ? timeout : 1);
        }));
    };
    return XrmPromiseMock;
}());
exports.XrmPromiseMock = XrmPromiseMock;
//# sourceMappingURL=xrmpromise.mock.js.map