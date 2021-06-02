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
exports.StringControlMock = void 0;
var autolookupcontrol_mock_1 = require("../autolookupcontrol/autolookupcontrol.mock");
var StringControlMock = /** @class */ (function (_super) {
    __extends(StringControlMock, _super);
    function StringControlMock(components) {
        return _super.call(this, components) || this;
    }
    return StringControlMock;
}(autolookupcontrol_mock_1.AutoLookupControlMock));
exports.StringControlMock = StringControlMock;
//# sourceMappingURL=stringcontrol.mock.js.map