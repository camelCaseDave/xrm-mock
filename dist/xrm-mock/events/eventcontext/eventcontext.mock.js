"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventContextMock = /** @class */ (function () {
    function EventContextMock(components) {
        this.formContext = components.formContext;
        this.context = components.context;
    }
    EventContextMock.prototype.getContext = function () {
        return this.context;
    };
    EventContextMock.prototype.getDepth = function () {
        throw new Error("not implemented");
    };
    EventContextMock.prototype.getEventArgs = function () {
        throw new Error("not implemented");
    };
    EventContextMock.prototype.getEventSource = function () {
        throw new Error("not implemented");
    };
    EventContextMock.prototype.getFormContext = function () {
        return this.formContext;
    };
    EventContextMock.prototype.getSharedVariable = function (key) {
        throw new Error("not implemented");
    };
    EventContextMock.prototype.setSharedVariable = function (key, value) {
        throw new Error("not implemented");
    };
    return EventContextMock;
}());
exports.EventContextMock = EventContextMock;
//# sourceMappingURL=eventcontext.mock.js.map