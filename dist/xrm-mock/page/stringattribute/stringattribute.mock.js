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
var attribute_mock_1 = require("../attribute/attribute.mock");
var StringAttributeMock = /** @class */ (function (_super) {
    __extends(StringAttributeMock, _super);
    function StringAttributeMock(components) {
        var _this = _super.call(this, components) || this;
        _this.format = components.format || "text";
        _this.maxLength = components.maxLength || 100;
        return _this;
    }
    StringAttributeMock.create = function (name, value) {
        return new StringAttributeMock({ name: name, value: value });
    };
    StringAttributeMock.prototype.getFormat = function () {
        return _super.prototype.getFormat.call(this);
    };
    StringAttributeMock.prototype.getMaxLength = function () {
        return this.maxLength;
    };
    StringAttributeMock.prototype.setValue = function (value) {
        if (this.maxLength && value.length > this.maxLength) {
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