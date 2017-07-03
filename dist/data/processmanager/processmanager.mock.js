"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProcessManagerMock = (function () {
    function ProcessManagerMock(enabledProcesses) {
        this.enabledProcesses = enabledProcesses;
    }
    ProcessManagerMock.prototype.getActiveProcess = function () {
        return this.enabledProcesses.filter(function (p) {
            return p.isRendered();
        })[0] || undefined;
    };
    ProcessManagerMock.prototype.setActiveProcess = function (processId, callbackFunction) {
        var activeProcess = this.getActiveProcess();
        if (activeProcess) {
            var newProcess = this.enabledProcesses.filter(function (p) {
                return p.getId() === processId;
            })[0] || undefined;
            if (newProcess) {
                activeProcess.isRendered = function () { return false; };
                newProcess.isRendered = function () { return true; };
            }
        }
    };
    ProcessManagerMock.prototype.getActiveStage = function () {
        var activeProcess = this.getActiveProcess();
        var stages = activeProcess.getStages();
        return stages.forEach(function (s) {
            return s.getStatus() === 'active';
        })[0] || undefined;
    };
    ProcessManagerMock.prototype.setActiveStage = function (stageId, callbackFunction) {
        var activeProcess = this.getActiveProcess();
        var stages = activeProcess.getStages();
        return stages.forEach(function (s) {
            return s.getId() === stageId;
        })[0] || undefined;
    };
    ProcessManagerMock.prototype.getActivePath = function () {
        throw ('get active path not implemented');
    };
    ProcessManagerMock.prototype.getEnabledProcesses = function (callbackFunction) {
        callbackFunction(this.enabledProcesses);
    };
    ProcessManagerMock.prototype.getSelectedStage = function () {
        throw ('get selected not implemented');
    };
    ProcessManagerMock.prototype.addOnStageChange = function (handler) {
        throw ('add on stage change not implemented');
    };
    ProcessManagerMock.prototype.addOnStageSelected = function (handler) {
        throw ('add on stage selected not implemented');
    };
    ProcessManagerMock.prototype.removeOnStageChange = function (handler) {
        throw ('remove on stage change not implemented');
    };
    ProcessManagerMock.prototype.removeOnStageSelected = function (handler) {
        throw ('remove on stage selected not implemented');
    };
    ProcessManagerMock.prototype.moveNext = function (callbackFunction) {
        throw ('move next not implemented');
    };
    ProcessManagerMock.prototype.movePrevious = function (callbackFunction) {
        throw ('move previous not implemented');
    };
    return ProcessManagerMock;
}());
exports.ProcessManagerMock = ProcessManagerMock;
