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
var enumattribute_mock_1 = require("../enumattribute/enumattribute.mock");
var BooleanAttributeMock = /** @class */ (function (_super) {
    __extends(BooleanAttributeMock, _super);
    function BooleanAttributeMock(components) {
        return _super.call(this, components) || this;
    }
    BooleanAttributeMock.create = function (name, value) {
        if (value === void 0) { value = false; }
        return new BooleanAttributeMock({ name: name, value: value });
    };
    return BooleanAttributeMock;
}(enumattribute_mock_1.EnumAttributeMock));
exports.BooleanAttributeMock = BooleanAttributeMock;
