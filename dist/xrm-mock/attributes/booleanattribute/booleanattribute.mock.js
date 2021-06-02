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
exports.BooleanAttributeMock = void 0;
var enumattribute_mock_1 = require("../enumattribute/enumattribute.mock");
var BooleanAttributeMock = /** @class */ (function (_super) {
    __extends(BooleanAttributeMock, _super);
    function BooleanAttributeMock(components) {
        return _super.call(this, BooleanAttributeMock.defaultComponents(components)) || this;
    }
    BooleanAttributeMock.create = function (name, value) {
        if (value === void 0) { value = false; }
        return new BooleanAttributeMock({ name: name, value: value });
    };
    BooleanAttributeMock.defaultComponents = function (components) {
        components.attributeType = "boolean";
        return components;
    };
    return BooleanAttributeMock;
}(enumattribute_mock_1.EnumAttributeMock));
exports.BooleanAttributeMock = BooleanAttributeMock;
//# sourceMappingURL=booleanattribute.mock.js.map