"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SaveEventArgumentsMock = /** @class */ (function () {
    function SaveEventArgumentsMock(saveMode) {
        this.defaultPrevented = false;
        this.saveMode = saveMode;
    }
    SaveEventArgumentsMock.prototype.getSaveMode = function () {
        return this.saveMode;
    };
    SaveEventArgumentsMock.prototype.isDefaultPrevented = function () {
        return this.defaultPrevented;
    };
    SaveEventArgumentsMock.prototype.preventDefault = function () {
        this.defaultPrevented = true;
    };
    SaveEventArgumentsMock.prototype.getEventArgs = function () {
        throw new Error("Method not implemented.");
    };
    SaveEventArgumentsMock.prototype.getContext = function () {
        throw new Error("Method not implemented.");
    };
    SaveEventArgumentsMock.prototype.getDepth = function () {
        throw new Error("Method not implemented.");
    };
    SaveEventArgumentsMock.prototype.getEventSource = function () {
        throw new Error("Method not implemented.");
    };
    SaveEventArgumentsMock.prototype.getFormContext = function () {
        throw new Error("Method not implemented.");
    };
    SaveEventArgumentsMock.prototype.getSharedVariable = function (key) {
        throw new Error("Method not implemented.");
    };
    SaveEventArgumentsMock.prototype.setSharedVariable = function (key, value) {
        throw new Error("Method not implemented.");
    };
    return SaveEventArgumentsMock;
}());
exports.SaveEventArgumentsMock = SaveEventArgumentsMock;
//# sourceMappingURL=saveeventarguments.mock.js.map