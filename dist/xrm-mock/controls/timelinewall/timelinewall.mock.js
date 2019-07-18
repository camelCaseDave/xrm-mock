"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var control_mock_1 = require("../control/control.mock");
var TimelineWallMock = /** @class */ (function (_super) {
    __extends(TimelineWallMock, _super);
    function TimelineWallMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimelineWallMock.prototype.refresh = function () {
        throw new Error("Not implemented.");
    };
    return TimelineWallMock;
}(control_mock_1.ControlMock));
exports.TimelineWallMock = TimelineWallMock;
//# sourceMappingURL=timelinewall.mock.js.map