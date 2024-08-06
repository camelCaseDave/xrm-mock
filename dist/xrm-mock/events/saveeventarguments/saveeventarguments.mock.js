"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveEventArgumentsMock = void 0;
var SaveEventArgumentsMock = /** @class */ (function () {
    function SaveEventArgumentsMock(saveMode) {
        this.defaultPrevented = false;
        this.preventOnError = false;
        this.saveMode = saveMode;
    }
    SaveEventArgumentsMock.prototype.preventDefaultOnError = function () {
        this.preventOnError = true;
    };
    SaveEventArgumentsMock.prototype.getSaveMode = function () {
        return this.saveMode;
    };
    SaveEventArgumentsMock.prototype.isDefaultPrevented = function () {
        return this.defaultPrevented;
    };
    SaveEventArgumentsMock.prototype.preventDefault = function () {
        this.defaultPrevented = true;
    };
    return SaveEventArgumentsMock;
}());
exports.SaveEventArgumentsMock = SaveEventArgumentsMock;
//# sourceMappingURL=saveeventarguments.mock.js.map