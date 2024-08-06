"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventContextMock = void 0;
var EventContextMock = /** @class */ (function () {
    function EventContextMock(components) {
        var _a;
        this.context = components.context;
        this.depth = components.depth === undefined || components.depth === null ? 1 : components.depth;
        this.eventSource = components.eventSource;
        this.formContext = components.formContext;
        this.sharedVariables = (_a = components.sharedVariables) !== null && _a !== void 0 ? _a : {};
    }
    EventContextMock.prototype.getContext = function () {
        return this.context;
    };
    EventContextMock.prototype.getDepth = function () {
        return this.depth;
    };
    EventContextMock.prototype.setDepth = function (depth) {
        this.depth = depth;
    };
    EventContextMock.prototype.getEventSource = function () {
        if (this.eventSource) {
            return this.eventSource;
        }
        throw new Error("no event source given");
    };
    EventContextMock.prototype.getFormContext = function () {
        return this.formContext;
    };
    EventContextMock.prototype.getSharedVariable = function (key) {
        return this.sharedVariables[key];
    };
    EventContextMock.prototype.setSharedVariable = function (key, value) {
        this.sharedVariables[key] = value;
    };
    return EventContextMock;
}());
exports.EventContextMock = EventContextMock;
//# sourceMappingURL=eventcontext.mock.js.map