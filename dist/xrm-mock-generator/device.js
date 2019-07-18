"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var device_mock_1 = require("../xrm-mock/device/device.mock");
var Device = /** @class */ (function () {
    function Device() {
    }
    Device.createDevice = function () {
        var device = new device_mock_1.DeviceMock();
        return device;
    };
    return Device;
}());
exports.default = Device;
//# sourceMappingURL=device.js.map