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
exports.OptionSetAttributeMock = void 0;
var optionsetvalue_mock_1 = require("../../optionsetvalue/optionsetvalue.mock");
var enumattribute_mock_1 = require("../enumattribute/enumattribute.mock");
var OptionSetAttributeMock = /** @class */ (function (_super) {
    __extends(OptionSetAttributeMock, _super);
    function OptionSetAttributeMock(components) {
        var _this = _super.call(this, OptionSetAttributeMock.defaultComponents(components)) || this;
        _this.options = components.options
            ? components.options.map(function (o) {
                return new optionsetvalue_mock_1.OptionSetValueMock(o.text, o.value);
            })
            : components.value || components.value === 0
                ? [{
                        text: components.value.toString(),
                        value: components.value,
                    }]
                : [];
        _this.format = components.format || "language";
        _this.selectedOption = _this.getOption(_this.getValue());
        return _this;
    }
    OptionSetAttributeMock.create = function (name, value) {
        return new OptionSetAttributeMock({ name: name, value: value });
    };
    OptionSetAttributeMock.defaultComponents = function (components) {
        components.attributeType = "optionset";
        return components;
    };
    OptionSetAttributeMock.prototype.getFormat = function () {
        return _super.prototype.getFormat.call(this);
    };
    OptionSetAttributeMock.prototype.getOption = function (param) {
        return typeof param === "number"
            ? this.options.filter(function (o) { return o.value === param; })[0]
            : this.options.filter(function (o) { return o.text === param; })[0];
    };
    OptionSetAttributeMock.prototype.getOptions = function () {
        return this.options;
    };
    OptionSetAttributeMock.prototype.getSelectedOption = function () {
        return this.selectedOption;
    };
    OptionSetAttributeMock.prototype.getText = function () {
        return this.selectedOption.text;
    };
    OptionSetAttributeMock.prototype.setValue = function (value) {
        _super.prototype.setValue.call(this, value);
        this.selectedOption = this.getOption(value);
    };
    return OptionSetAttributeMock;
}(enumattribute_mock_1.EnumAttributeMock));
exports.OptionSetAttributeMock = OptionSetAttributeMock;
//# sourceMappingURL=optionsetattribute.mock.js.map