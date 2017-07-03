"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ClientContextMock = (function () {
    function ClientContextMock(client, clientState) {
        this.client = client;
        this.clientState = clientState;
    }
    ClientContextMock.prototype.getClient = function () {
        return this.client;
    };
    ClientContextMock.prototype.getClientState = function () {
        return this.clientState;
    };
    return ClientContextMock;
}());
exports.ClientContextMock = ClientContextMock;
