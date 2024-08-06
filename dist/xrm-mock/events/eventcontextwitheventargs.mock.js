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
exports.EventContextWithEventArgsMock = void 0;
var eventcontext_mock_1 = require("./eventcontext/eventcontext.mock");
var EventContextWithEventArgsMock = /** @class */ (function (_super) {
    __extends(EventContextWithEventArgsMock, _super);
    function EventContextWithEventArgsMock(components) {
        var _this = _super.call(this, components) || this;
        _this.eventArgs = components.eventArgs;
        return _this;
    }
    EventContextWithEventArgsMock.prototype.getEventArgs = function () {
        if (this.eventArgs) {
            return this.eventArgs;
        }
        throw new Error("no event args given!");
    };
    return EventContextWithEventArgsMock;
}(eventcontext_mock_1.EventContextMock));
exports.EventContextWithEventArgsMock = EventContextWithEventArgsMock;
//# sourceMappingURL=eventcontextwitheventargs.mock.js.map