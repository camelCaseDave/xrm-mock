"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WindowMock = void 0;
var xrm_mock_generator_1 = require("../xrm-mock-generator/xrm-mock-generator");
var WindowMock = /** @class */ (function () {
    function WindowMock(xrm) {
        this.Xrm = xrm;
    }
    WindowMock.prototype.GetGlobalContext = function () {
        return xrm_mock_generator_1.XrmMockGenerator.context;
    };
    return WindowMock;
}());
exports.WindowMock = WindowMock;
//# sourceMappingURL=window.mock.js.map