"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessManagerMock = void 0;
var ProcessManagerMock = /** @class */ (function () {
    function ProcessManagerMock(enabledProcesses) {
        this.enabledProcesses = enabledProcesses;
    }
    ProcessManagerMock.prototype.addOnPreProcessStatusChange = function (handler) {
        throw new Error("Method not implemented.");
    };
    ProcessManagerMock.prototype.addOnPreStageChange = function (handler) {
        throw new Error("Method not implemented.");
    };
    ProcessManagerMock.prototype.removeOnPreProcessStatusChange = function (handler) {
        throw new Error("Method not implemented.");
    };
    ProcessManagerMock.prototype.removeOnPreStageChange = function (handler) {
        throw new Error("Method not implemented.");
    };
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
    ProcessManagerMock.prototype.setActiveProcessInstance = function (processInstanceId, callbackFunction) {
        throw new Error("set active process instance not implemented.");
    };
    ProcessManagerMock.prototype.getProcessInstances = function (callbackFunction) {
        throw new Error("get process instances not implemented.");
    };
    ProcessManagerMock.prototype.addOnProcessStatusChange = function (handler) {
        throw new Error("add on process status change not implemented.");
    };
    ProcessManagerMock.prototype.removeOnProcessStatusChange = function (handler) {
        throw new Error("remove on process status change not implemented.");
    };
    ProcessManagerMock.prototype.getInstanceId = function () {
        var activeProcess = this.getActiveProcess();
        var instanceId = activeProcess.getId() || "";
        return instanceId;
    };
    ProcessManagerMock.prototype.getInstanceName = function () {
        var activeProcess = this.getActiveProcess();
        var instanceName = activeProcess.getName();
        return instanceName;
    };
    ProcessManagerMock.prototype.getStatus = function () {
        throw new Error("get status not implemented.");
    };
    ProcessManagerMock.prototype.setStatus = function (status, callbackFunction) {
        throw new Error("set status not implemented.");
    };
    ProcessManagerMock.prototype.getActiveStage = function () {
        var activeProcess = this.getActiveProcess();
        var stages = activeProcess.getStages();
        var activeStages = [];
        stages.forEach(function (s) {
            if (s.getStatus() === "active") {
                activeStages.push(s);
            }
        });
        return activeStages[0] || undefined;
    };
    ProcessManagerMock.prototype.setActiveStage = function (stageId, callbackFunction) {
        var activeProcess = this.getActiveProcess();
        var stages = activeProcess.getStages();
        var setStatus = "";
        stages.forEach(function (s) {
            if (s.getId() === stageId) {
                s._setStatus("active");
                setStatus = "active";
            }
            else {
                s._setStatus("inactive");
            }
        });
        if (callbackFunction) {
            callbackFunction(setStatus);
        }
    };
    ProcessManagerMock.prototype.getActivePath = function () {
        throw new Error("get active path not implemented");
    };
    ProcessManagerMock.prototype.getEnabledProcesses = function (callbackFunction) {
        callbackFunction(this.enabledProcesses);
    };
    ProcessManagerMock.prototype.getSelectedStage = function () {
        throw new Error("get selected not implemented");
    };
    ProcessManagerMock.prototype.addOnStageChange = function (handler) {
        throw new Error("add on stage change not implemented");
    };
    ProcessManagerMock.prototype.addOnStageSelected = function (handler) {
        throw new Error("add on stage selected not implemented");
    };
    ProcessManagerMock.prototype.removeOnStageChange = function (handler) {
        throw new Error("remove on stage change not implemented");
    };
    ProcessManagerMock.prototype.removeOnStageSelected = function (handler) {
        throw new Error("remove on stage selected not implemented");
    };
    ProcessManagerMock.prototype.moveNext = function (callbackFunction) {
        throw new Error("move next not implemented");
    };
    ProcessManagerMock.prototype.movePrevious = function (callbackFunction) {
        throw new Error("move previous not implemented");
    };
    return ProcessManagerMock;
}());
exports.ProcessManagerMock = ProcessManagerMock;
//# sourceMappingURL=processmanager.mock.js.map