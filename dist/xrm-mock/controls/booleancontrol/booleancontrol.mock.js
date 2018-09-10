"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var standardcontrol_mock_1 = require("../standardcontrol/standardcontrol.mock");
var BooleanControlMock = /** @class */ (function (_super) {
    __extends(BooleanControlMock, _super);
    function BooleanControlMock(components) {
        return _super.call(this, components) || this;
    }
    return BooleanControlMock;
}(standardcontrol_mock_1.StandardControlMock));
exports.BooleanControlMock = BooleanControlMock;
//# sourceMappingURL=booleancontrol.mock.js.map