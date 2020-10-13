"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UiFocusableMock = void 0;
var UiFocusableMock = /** @class */ (function () {
    function UiFocusableMock(hasFocus) {
        if (hasFocus === void 0) { hasFocus = false; }
        this.hasFocus = hasFocus;
    }
    UiFocusableMock.prototype.setFocus = function () {
        this.hasFocus = true;
    };
    return UiFocusableMock;
}());
exports.UiFocusableMock = UiFocusableMock;
//# sourceMappingURL=uifocusable.mock.js.map