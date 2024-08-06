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
exports.SaveEventContextAsyncMock = void 0;
var eventcontextwitheventargs_mock_1 = require("./eventcontextwitheventargs.mock");
var saveeventargumentsasync_mock_1 = require("./saveeventargumentsasync.mock");
var SaveEventContextAsyncMock = /** @class */ (function (_super) {
    __extends(SaveEventContextAsyncMock, _super);
    function SaveEventContextAsyncMock(components) {
        var _this = this;
        var _a, _b;
        if ((components === null || components === void 0 ? void 0 : components.saveMode)
            && (components === null || components === void 0 ? void 0 : components.eventArgs)) {
            throw new Error("SaveEventContextAsyncMock.constructor: saveMode and eventArgs cannot both be defined");
        }
        _this = _super.call(this, components) || this;
        _this.asyncTimeoutDisabled = false;
        (_a = _this.eventArgs) !== null && _a !== void 0 ? _a : (_this.eventArgs = new saveeventargumentsasync_mock_1.SaveEventArgumentsAsyncMock((_b = components === null || components === void 0 ? void 0 : components.saveMode) !== null && _b !== void 0 ? _b : 1 /* XrmEnum.SaveMode.Save */));
        return _this;
    }
    SaveEventContextAsyncMock.prototype.disableAsyncTimeout = function () {
        this.asyncTimeoutDisabled = true;
    };
    return SaveEventContextAsyncMock;
}(eventcontextwitheventargs_mock_1.EventContextWithEventArgsMock));
exports.SaveEventContextAsyncMock = SaveEventContextAsyncMock;
//# sourceMappingURL=saveeventcontextasync.mock.js.map