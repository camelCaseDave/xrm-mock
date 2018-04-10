"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventContextMock = /** @class */ (function () {
    function EventContextMock() {
    }
    EventContextMock.prototype.getContext = function () {
        throw new Error("not implemented");
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
        throw new Error("Method not implemented.");
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