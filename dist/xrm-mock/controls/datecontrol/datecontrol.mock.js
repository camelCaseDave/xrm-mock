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
exports.DateControlMock = void 0;
var standardcontrol_mock_1 = require("../standardcontrol/standardcontrol.mock");
var DateControlMock = /** @class */ (function (_super) {
    __extends(DateControlMock, _super);
    function DateControlMock(components) {
        var _this = _super.call(this, DateControlMock.defaultComponents(components)) || this;
        _this.showTime = components.showTime;
        return _this;
    }
    DateControlMock.defaultComponents = function (components) {
        if (!("showTime" in components)) {
            components.showTime = components.attribute
                ? components.attribute.getFormat() === "datetime"
                : false;
        }
        return components;
    };
    DateControlMock.prototype.getShowTime = function () {
        return this.showTime;
    };
    DateControlMock.prototype.setShowTime = function (showTime) {
        // TODO: Does the Attribute format need to get updated as well?
        this.showTime = showTime;
    };
    return DateControlMock;
}(standardcontrol_mock_1.StandardControlMock));
exports.DateControlMock = DateControlMock;
//# sourceMappingURL=datecontrol.mock.js.map