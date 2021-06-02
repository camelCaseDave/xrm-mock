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
exports.NumberAttributeMock = void 0;
var attribute_mock_1 = require("../attribute/attribute.mock");
var NumberAttributeMock = /** @class */ (function (_super) {
    __extends(NumberAttributeMock, _super);
    function NumberAttributeMock(components) {
        var _this = _super.call(this, NumberAttributeMock.defaultComponents(components)) || this;
        _this.min = components.min;
        _this.max = components.max;
        _this.precision = components.precision;
        _this.validatePrecision();
        return _this;
    }
    NumberAttributeMock.defaultComponents = function (components) {
        components.format = components.format || "none";
        components.precision = components.precision || 0;
        if (!components.attributeType) {
            components.attributeType = "decimal";
        }
        return components;
    };
    NumberAttributeMock.prototype.getFormat = function () {
        return _super.prototype.getFormat.call(this);
    };
    NumberAttributeMock.prototype.getMax = function () {
        return this.max;
    };
    NumberAttributeMock.prototype.getMin = function () {
        return this.min;
    };
    NumberAttributeMock.prototype.getPrecision = function () {
        return this.precision;
    };
    NumberAttributeMock.prototype.setPrecision = function (value) {
        this.precision = value;
    };
    NumberAttributeMock.prototype.setValue = function (value) {
        if ((this.min || this.min === 0) && this.min > value) {
            throw new Error(("value cannot be below the min of " + this.min));
        }
        else if ((this.max || this.max === 0) && this.max < value) {
            throw new Error(("value cannot be above the max of " + this.max));
        }
        else {
            _super.prototype.setValue.call(this, value);
        }
    };
    NumberAttributeMock.prototype.validatePrecision = function () {
        if (this.precision > 10) {
            throw new Error(("precision cannot be greater than 10, but was " + this.precision));
        }
        else if (this.precision < 0) {
            throw new Error(("precision cannot be less than 0, but was " + this.precision));
        }
    };
    return NumberAttributeMock;
}(attribute_mock_1.AttributeMock));
exports.NumberAttributeMock = NumberAttributeMock;
//# sourceMappingURL=numberattribute.mock.js.map