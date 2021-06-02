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
exports.TimerControlMock = void 0;
var control_mock_1 = require("../control/control.mock");
var TimerControlMock = /** @class */ (function (_super) {
    __extends(TimerControlMock, _super);
    function TimerControlMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimerControlMock.prototype.getState = function () {
        throw new Error("Method not implemented.");
    };
    TimerControlMock.prototype.refresh = function () {
        throw new Error("Not implemented.");
    };
    TimerControlMock.prototype.getDisabled = function () {
        throw new Error("Method not implemented.");
    };
    TimerControlMock.prototype.setDisabled = function (value) {
        throw new Error("Method not implemented.");
    };
    TimerControlMock.prototype.setFocus = function () {
        throw new Error("Method not implemented.");
    };
    TimerControlMock.prototype.setVisible = function (visible) {
        throw new Error("Method not implemented.");
    };
    return TimerControlMock;
}(control_mock_1.ControlMock));
exports.TimerControlMock = TimerControlMock;
//# sourceMappingURL=timercontrol.mock.js.map