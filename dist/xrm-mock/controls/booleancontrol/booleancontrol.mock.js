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
exports.BooleanControlMock = void 0;
var standardcontrol_mock_1 = require("../standardcontrol/standardcontrol.mock");
var BooleanControlMock = /** @class */ (function (_super) {
    __extends(BooleanControlMock, _super);
    function BooleanControlMock(components) {
        return _super.call(this, BooleanControlMock.defaultComponents(components)) || this;
    }
    BooleanControlMock.defaultComponents = function (components) {
        components.controlType = "optionset";
        return components;
    };
    return BooleanControlMock;
}(standardcontrol_mock_1.StandardControlMock));
exports.BooleanControlMock = BooleanControlMock;
//# sourceMappingURL=booleancontrol.mock.js.map