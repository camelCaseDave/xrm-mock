"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OfflineErrorCallbackObjectMock = (function () {
    function OfflineErrorCallbackObjectMock(errorCallbackObject, debugMessage) {
        this.errorCallbackObject = errorCallbackObject;
        this.debugMessage = debugMessage;
        this.errorCode = errorCallbackObject.errorCode;
        this.message = errorCallbackObject.message;
    }
    return OfflineErrorCallbackObjectMock;
}());
exports.OfflineErrorCallbackObjectMock = OfflineErrorCallbackObjectMock;
