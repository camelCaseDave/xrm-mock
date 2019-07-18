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
var standardcontrol_mock_1 = require("../standardcontrol/standardcontrol.mock");
var OptionSetControlMock = /** @class */ (function (_super) {
    __extends(OptionSetControlMock, _super);
    function OptionSetControlMock(components) {
        var _this = _super.call(this, OptionSetControlMock.defaultComponents(components)) || this;
        _this.options = components.options || [];
        return _this;
    }
    OptionSetControlMock.defaultComponents = function (components) {
        components.controlType = "optionset";
        return components;
    };
    OptionSetControlMock.prototype.addOption = function (option, index) {
        index = index || index === 0
            ? index
            : this.options.length;
        this.options.splice(index, 0, option);
    };
    OptionSetControlMock.prototype.clearOptions = function () {
        var length = this.options.length;
        if (length) {
            this.options.splice(0, length);
        }
    };
    OptionSetControlMock.prototype.removeOption = function (value) {
        var option;
        for (var _i = 0, _a = this.options; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.value === value) {
                option = item;
                break;
            }
        }
        var index = this.options.indexOf(option);
        this.options.splice(index, 1);
    };
    return OptionSetControlMock;
}(standardcontrol_mock_1.StandardControlMock));
exports.OptionSetControlMock = OptionSetControlMock;
//# sourceMappingURL=optionsetcontrol.mock.js.map