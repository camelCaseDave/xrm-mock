"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfflineErrorCallbackObjectMock = void 0;
var OfflineErrorCallbackObjectMock = /** @class */ (function () {
    function OfflineErrorCallbackObjectMock(errorCallbackObject, debugMessage) {
        this.errorCallbackObject = errorCallbackObject;
        this.debugMessage = debugMessage;
        this.errorCode = errorCallbackObject.errorCode;
        this.message = errorCallbackObject.message;
    }
    return OfflineErrorCallbackObjectMock;
}());
exports.OfflineErrorCallbackObjectMock = OfflineErrorCallbackObjectMock;
//# sourceMappingURL=offlineerrorcallbackobject.mock.js.map