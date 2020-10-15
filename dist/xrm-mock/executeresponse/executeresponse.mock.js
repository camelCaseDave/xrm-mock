"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExecuteResponseMock = void 0;
var ExecuteResponseMock = /** @class */ (function () {
    function ExecuteResponseMock(components) {
        this.notImplementedError = "ExecuteResponseMock methods not implemented. Consider stubbing calls using a tool such as Sinon.JS";
        this.body = components.body;
        this.headers = components.headers;
        this.ok = components.ok;
        this.redirected = components.redirected;
        this.status = components.status;
        this.statusText = components.statusText;
        this.type = components.type;
        this.url = components.url;
        this.trailer = components.trailer;
        this.bodyUsed = components.bodyUsed;
    }
    ExecuteResponseMock.prototype.arrayBuffer = function () {
        throw new Error(this.notImplementedError);
    };
    ExecuteResponseMock.prototype.blob = function () {
        throw new Error(this.notImplementedError);
    };
    ExecuteResponseMock.prototype.formData = function () {
        throw new Error(this.notImplementedError);
    };
    ExecuteResponseMock.prototype.json = function () {
        throw new Error(this.notImplementedError);
    };
    ExecuteResponseMock.prototype.text = function () {
        throw new Error(this.notImplementedError);
    };
    ExecuteResponseMock.prototype.clone = function () {
        throw new Error(this.notImplementedError);
    };
    return ExecuteResponseMock;
}());
exports.ExecuteResponseMock = ExecuteResponseMock;
//# sourceMappingURL=executeresponse.mock.js.map