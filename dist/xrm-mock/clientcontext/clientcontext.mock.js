"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientContextMock = void 0;
var ClientContextMock = /** @class */ (function () {
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
    ClientContextMock.prototype.getFormFactor = function () {
        throw new Error("Method not implemented.");
    };
    ClientContextMock.prototype.isOffline = function () {
        throw new Error("Method not implemented.");
    };
    return ClientContextMock;
}());
exports.ClientContextMock = ClientContextMock;
//# sourceMappingURL=clientcontext.mock.js.map