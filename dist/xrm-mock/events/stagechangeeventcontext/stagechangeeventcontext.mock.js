"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StageChangeEventContextMock = void 0;
var StageChangeEventContextMock = /** @class */ (function () {
    function StageChangeEventContextMock(eventContext) {
        this.eventContext = eventContext;
    }
    StageChangeEventContextMock.prototype.getContext = function () {
        return this.eventContext.getContext();
    };
    StageChangeEventContextMock.prototype.getDepth = function () {
        return this.eventContext.getDepth();
    };
    StageChangeEventContextMock.prototype.getEventSource = function () {
        return this.eventContext.getEventSource();
    };
    StageChangeEventContextMock.prototype.getFormContext = function () {
        return this.eventContext.getFormContext();
    };
    StageChangeEventContextMock.prototype.getSharedVariable = function (key) {
        return this.eventContext.getSharedVariable(key);
    };
    StageChangeEventContextMock.prototype.setSharedVariable = function (key, value) {
        return this.setSharedVariable(key, value);
    };
    StageChangeEventContextMock.prototype.getEventArgs = function () {
        throw new Error("Not implemented.");
    };
    return StageChangeEventContextMock;
}());
exports.StageChangeEventContextMock = StageChangeEventContextMock;
//# sourceMappingURL=stagechangeeventcontext.mock.js.map