"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WindowMock = /** @class */ (function () {
    function WindowMock(xrm) {
        this.Xrm = xrm;
    }
    WindowMock.prototype.GetGlobalContext = function () {
        throw new Error("not implemented");
    };
    return WindowMock;
}());
exports.WindowMock = WindowMock;
//# sourceMappingURL=window.mock.js.map