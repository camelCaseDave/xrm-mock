"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventContextMock = (function () {
    function EventContextMock() {
    }
    EventContextMock.prototype.getContext = function () {
        throw ('not implemented');
    };
    EventContextMock.prototype.getDepth = function () {
        throw ('not implemented');
    };
    EventContextMock.prototype.getEventArgs = function () {
        throw ('not implemented');
    };
    EventContextMock.prototype.getEventSource = function () {
        throw ('not implemented');
    };
    EventContextMock.prototype.getSharedVariable = function (key) {
        throw ('not implemented');
    };
    EventContextMock.prototype.setSharedVariable = function (key, value) {
        throw ('not implemented');
    };
    return EventContextMock;
}());
exports.EventContextMock = EventContextMock;
