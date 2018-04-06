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
var OptionSetControlMock = /** @class */ (function (_super) {
    __extends(OptionSetControlMock, _super);
    function OptionSetControlMock(components) {
        var _this = _super.call(this, components) || this;
        _this.options = components.options || [];
        return _this;
    }
    OptionSetControlMock.prototype.addOption = function (option, index) {
        if (index && index !== 0) {
            this.options.push(option);
        }
        else {
            this.options.splice(index, 0, option);
        }
    };
    OptionSetControlMock.prototype.clearOptions = function () {
        var length = this.options.length;
        if (length) {
            this.options.splice(0, length);
        }
    };
    OptionSetControlMock.prototype.removeOption = function (value) {
        this.options.splice(value, 1);
    };
    return OptionSetControlMock;
}(standardcontrol_mock_1.StandardControlMock));
exports.OptionSetControlMock = OptionSetControlMock;
