"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.IframeControlMock = void 0;
var control_mock_1 = require("../control/control.mock");
var IframeControlMock = /** @class */ (function (_super) {
    __extends(IframeControlMock, _super);
    function IframeControlMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IframeControlMock.prototype.setVisible = function (visible) {
        throw new Error("setVisible not implemented.");
    };
    IframeControlMock.prototype.getObject = function () {
        throw new Error("getObject not implemented.");
    };
    IframeControlMock.prototype.getContentWindow = function () {
        throw new Error("getContentWindow not implemented.");
    };
    IframeControlMock.prototype.getSrc = function () {
        throw new Error("getSrc not implemented.");
    };
    IframeControlMock.prototype.setSrc = function (src) {
        throw new Error("setSrc not implemented.");
    };
    IframeControlMock.prototype.getInitialUrl = function () {
        throw new Error("getInitialUrl not implemented.");
    };
    IframeControlMock.prototype.getDisabled = function () {
        throw new Error("getDisabled not implemented.");
    };
    IframeControlMock.prototype.setDisabled = function (value) {
        throw new Error("setDisabled not implemented.");
    };
    IframeControlMock.prototype.setFocus = function () {
        throw new Error("setFocus not implemented.");
    };
    return IframeControlMock;
}(control_mock_1.ControlMock));
exports.IframeControlMock = IframeControlMock;
//# sourceMappingURL=iframecontrol.mock.js.map