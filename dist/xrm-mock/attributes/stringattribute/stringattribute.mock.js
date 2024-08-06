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
exports.StringAttributeMock = void 0;
var attribute_mock_1 = require("../attribute/attribute.mock");
var StringAttributeMock = /** @class */ (function (_super) {
    __extends(StringAttributeMock, _super);
    function StringAttributeMock(components) {
        var _this = _super.call(this, StringAttributeMock.defaultComponents(components)) || this;
        _this.format = components.format || "text";
        _this.maxLength = components.maxLength || 100;
        return _this;
    }
    StringAttributeMock.create = function (name, value) {
        return new StringAttributeMock({ name: name, value: value });
    };
    StringAttributeMock.defaultComponents = function (components) {
        components.attributeType = "string";
        return components;
    };
    StringAttributeMock.prototype.getFormat = function () {
        return _super.prototype.getFormat.call(this);
    };
    StringAttributeMock.prototype.getMaxLength = function () {
        return this.maxLength;
    };
    StringAttributeMock.prototype.setValue = function (value) {
        if (value && this.maxLength && value.length > this.maxLength) {
            throw new Error(("value cannot be greater than " + this.maxLength));
        }
        else {
            _super.prototype.setValue.call(this, value);
        }
    };
    return StringAttributeMock;
}(attribute_mock_1.AttributeMock));
exports.StringAttributeMock = StringAttributeMock;
//# sourceMappingURL=stringattribute.mock.js.map