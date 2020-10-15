"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncodingMock = void 0;
var EncodingMock = /** @class */ (function () {
    function EncodingMock() {
    }
    EncodingMock.prototype.xmlAttributeEncode = function (arg) {
        throw new Error("Not implemented");
    };
    EncodingMock.prototype.xmlEncode = function (arg) {
        throw new Error("Not implemented");
    };
    EncodingMock.prototype.htmlAttributeEncode = function (arg) {
        throw new Error("Not implemented");
    };
    EncodingMock.prototype.htmlDecode = function (arg) {
        throw new Error("Not implemented");
    };
    EncodingMock.prototype.htmlEncode = function (arg) {
        throw new Error("Not implemented");
    };
    return EncodingMock;
}());
exports.EncodingMock = EncodingMock;
//# sourceMappingURL=encoding.mock.js.map