"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExecuteResponseMock = /** @class */ (function () {
    function ExecuteResponseMock(components) {
        this.body = components.body;
        this.headers = components.headers;
        this.ok = components.ok;
        this.status = components.status;
        this.statusText = components.statusText;
        this.type = components.type;
        this.url = components.url;
    }
    return ExecuteResponseMock;
}());
exports.ExecuteResponseMock = ExecuteResponseMock;
//# sourceMappingURL=executeresponse.mock.js.map