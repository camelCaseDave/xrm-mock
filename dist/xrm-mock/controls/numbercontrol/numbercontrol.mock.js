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
exports.NumberControlMock = void 0;
var autolookupcontrol_mock_1 = require("../autolookupcontrol/autolookupcontrol.mock");
var NumberControlMock = /** @class */ (function (_super) {
    __extends(NumberControlMock, _super);
    function NumberControlMock(components) {
        return _super.call(this, NumberControlMock.defaultComponents(components)) || this;
    }
    NumberControlMock.defaultComponents = function (components) {
        return components;
    };
    return NumberControlMock;
}(autolookupcontrol_mock_1.AutoLookupControlMock));
exports.NumberControlMock = NumberControlMock;
//# sourceMappingURL=numbercontrol.mock.js.map