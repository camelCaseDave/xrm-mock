"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StageSelectedEventContextMock = void 0;
var StageSelectedEventContextMock = /** @class */ (function () {
    function StageSelectedEventContextMock(eventContext) {
        this.eventContext = eventContext;
    }
    StageSelectedEventContextMock.prototype.getContext = function () {
        return this.eventContext.getContext();
    };
    StageSelectedEventContextMock.prototype.getDepth = function () {
        return this.eventContext.getDepth();
    };
    StageSelectedEventContextMock.prototype.getEventSource = function () {
        return this.eventContext.getEventSource();
    };
    StageSelectedEventContextMock.prototype.getFormContext = function () {
        return this.eventContext.getFormContext();
    };
    StageSelectedEventContextMock.prototype.getSharedVariable = function (key) {
        return this.eventContext.getSharedVariable(key);
    };
    StageSelectedEventContextMock.prototype.setSharedVariable = function (key, value) {
        return this.setSharedVariable(key, value);
    };
    StageSelectedEventContextMock.prototype.getEventArgs = function () {
        throw new Error("Not implemented.");
    };
    return StageSelectedEventContextMock;
}());
exports.StageSelectedEventContextMock = StageSelectedEventContextMock;
//# sourceMappingURL=stageselectedeventcontext.mock.js.map