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
exports.SaveEventArgumentsAsyncMock = void 0;
var saveeventarguments_mock_1 = require("./saveeventarguments/saveeventarguments.mock");
var SaveEventArgumentsAsyncMock = /** @class */ (function (_super) {
    __extends(SaveEventArgumentsAsyncMock, _super);
    function SaveEventArgumentsAsyncMock(saveMode) {
        var _this = _super.call(this, saveMode) || this;
        _this.asyncTimeoutDisabled = false;
        return _this;
    }
    SaveEventArgumentsAsyncMock.prototype.disableAsyncTimeout = function () {
        this.asyncTimeoutDisabled = true;
    };
    return SaveEventArgumentsAsyncMock;
}(saveeventarguments_mock_1.SaveEventArgumentsMock));
exports.SaveEventArgumentsAsyncMock = SaveEventArgumentsAsyncMock;
//# sourceMappingURL=saveeventargumentsasync.mock.js.map