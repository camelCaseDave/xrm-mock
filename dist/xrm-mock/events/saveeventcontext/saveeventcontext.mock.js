"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveEventContextMock = void 0;
var SaveEventContextMock = /** @class */ (function () {
    function SaveEventContextMock(eventContext) {
        this.eventContext = eventContext;
    }
    SaveEventContextMock.prototype.getContext = function () {
        return this.eventContext.getContext();
    };
    SaveEventContextMock.prototype.getDepth = function () {
        return this.eventContext.getDepth();
    };
    SaveEventContextMock.prototype.getEventSource = function () {
        return this.eventContext.getEventSource();
    };
    SaveEventContextMock.prototype.getFormContext = function () {
        return this.eventContext.getFormContext();
    };
    SaveEventContextMock.prototype.getSharedVariable = function (key) {
        return this.eventContext.getSharedVariable(key);
    };
    SaveEventContextMock.prototype.setSharedVariable = function (key, value) {
        return this.setSharedVariable(key, value);
    };
    SaveEventContextMock.prototype.getEventArgs = function () {
        throw new Error("Not implemented.");
    };
    return SaveEventContextMock;
}());
exports.SaveEventContextMock = SaveEventContextMock;
//# sourceMappingURL=saveeventcontext.mock.js.map