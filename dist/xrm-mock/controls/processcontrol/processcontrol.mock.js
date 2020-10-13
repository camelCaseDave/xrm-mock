"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessControlMock = void 0;
var ProcessControlMock = /** @class */ (function () {
    function ProcessControlMock(displayState, getVisibleElement, setVisibleElement) {
        this.displayState = displayState;
        this.getVisibleElement = getVisibleElement;
        this.setVisibleElement = setVisibleElement;
    }
    ProcessControlMock.prototype.getVisible = function () {
        return this.getVisibleElement.getVisible();
    };
    ProcessControlMock.prototype.setVisible = function (visible) {
        return this.setVisibleElement.setVisible(visible);
    };
    ProcessControlMock.prototype.setDisplayState = function (displayState) {
        this.displayState = displayState;
    };
    ProcessControlMock.prototype.getDisplayState = function () {
        return this.displayState;
    };
    ProcessControlMock.prototype.reflow = function (updateUI, parentStage, nextStage) {
        throw new Error("Not implemented.");
    };
    return ProcessControlMock;
}());
exports.ProcessControlMock = ProcessControlMock;
//# sourceMappingURL=processcontrol.mock.js.map