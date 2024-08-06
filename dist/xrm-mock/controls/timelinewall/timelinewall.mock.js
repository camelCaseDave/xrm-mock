"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineWallMock = void 0;
var control_mock_1 = require("../control/control.mock");
var TimelineWallMock = /** @class */ (function (_super) {
    __extends(TimelineWallMock, _super);
    function TimelineWallMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimelineWallMock.prototype.refresh = function () {
        throw new Error("Not implemented.");
    };
    TimelineWallMock.prototype.getDisabled = function () {
        throw new Error("Method not implemented.");
    };
    TimelineWallMock.prototype.setDisabled = function (value) {
        throw new Error("Method not implemented.");
    };
    TimelineWallMock.prototype.setFocus = function () {
        throw new Error("Method not implemented.");
    };
    TimelineWallMock.prototype.setVisible = function (visible) {
        throw new Error("Method not implemented.");
    };
    return TimelineWallMock;
}(control_mock_1.ControlMock));
exports.TimelineWallMock = TimelineWallMock;
//# sourceMappingURL=timelinewall.mock.js.map