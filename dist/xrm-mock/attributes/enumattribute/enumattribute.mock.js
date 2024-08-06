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
exports.EnumAttributeMock = void 0;
var attribute_mock_1 = require("../attribute/attribute.mock");
var EnumAttributeMock = /** @class */ (function (_super) {
    __extends(EnumAttributeMock, _super);
    function EnumAttributeMock(components) {
        var _this = _super.call(this, components) || this;
        _this.initialValue = "initialValue" in components
            ? components.initialValue
            : components.value;
        return _this;
    }
    EnumAttributeMock.prototype.getInitialValue = function () {
        return this.initialValue;
    };
    return EnumAttributeMock;
}(attribute_mock_1.AttributeMock));
exports.EnumAttributeMock = EnumAttributeMock;
//# sourceMappingURL=enumattribute.mock.js.map