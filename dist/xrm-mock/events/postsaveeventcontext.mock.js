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
exports.PostSaveEventContextMock = void 0;
var postsaveeventarguments_mock_1 = require("./postsaveeventarguments.mock");
var eventcontextwitheventargs_mock_1 = require("./eventcontextwitheventargs.mock");
var PostSaveEventContextMock = /** @class */ (function (_super) {
    __extends(PostSaveEventContextMock, _super);
    function PostSaveEventContextMock(components) {
        var _this = this;
        var _a;
        _this = _super.call(this, components) || this;
        (_a = _this.eventArgs) !== null && _a !== void 0 ? _a : (_this.eventArgs = new postsaveeventarguments_mock_1.PostSaveEventArgumentsMock());
        return _this;
    }
    return PostSaveEventContextMock;
}(eventcontextwitheventargs_mock_1.EventContextWithEventArgsMock));
exports.PostSaveEventContextMock = PostSaveEventContextMock;
//# sourceMappingURL=postsaveeventcontext.mock.js.map