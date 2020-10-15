"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceMock = void 0;
var DeviceMock = /** @class */ (function () {
    function DeviceMock() {
    }
    DeviceMock.prototype.captureAudio = function () {
        throw new Error("Not implemented.");
    };
    DeviceMock.prototype.captureImage = function (imageOptions) {
        throw new Error("Not implemented.");
    };
    DeviceMock.prototype.captureVideo = function () {
        throw new Error("Not implemented.");
    };
    DeviceMock.prototype.getBarcodeValue = function () {
        throw new Error("Not implemented.");
    };
    DeviceMock.prototype.getCurrentPosition = function () {
        throw new Error("Not implemented.");
    };
    DeviceMock.prototype.pickFile = function (pickFileOptions) {
        throw new Error("Not implemented.");
    };
    return DeviceMock;
}());
exports.DeviceMock = DeviceMock;
//# sourceMappingURL=device.mock.js.map