export class ProcessManagerMock implements Xrm.Page.data.ProcessManager {
    enabledProcesses: Xrm.Page.Process[] | Xrm.Page.data.ProcessDictionary;

    constructor(enabledProcesses: Xrm.Page.Process[]) {
        this.enabledProcesses = enabledProcesses;
    }

    getActiveProcess(): Xrm.Page.Process {
        return (this.enabledProcesses as Xrm.Page.Process[]).filter((p) => {
            return p.isRendered();
        })[0] || undefined;
    }

    setActiveProcess(processId: string, callbackFunction?: Xrm.Page.data.ProcessCallbackDelegate): void {
        let activeProcess = this.getActiveProcess();
        if (activeProcess) {
            let newProcess = (this.enabledProcesses as Xrm.Page.Process[]).filter((p) => {
                return p.getId() === processId;
            })[0] || undefined;

            if (newProcess) {
                activeProcess.isRendered = () => { return false; };
                newProcess.isRendered = () => { return true; };
            }
        }
    }

    getActiveStage(): Xrm.Page.Stage {
        let activeProcess = this.getActiveProcess();
        let stages = activeProcess.getStages();
        return stages.forEach((s: Xrm.Page.Stage): any => {
            return s.getStatus() === 'active'
        })[0] || undefined;
    }

    setActiveStage(stageId: string, callbackFunction?: Xrm.Page.data.ProcessCallbackDelegate): void {
        let activeProcess = this.getActiveProcess();
        let stages = activeProcess.getStages();
        return stages.forEach((s: Xrm.Page.Stage): any => {
            return s.getId() === stageId
        })[0] || undefined;
    }

    getActivePath(): Xrm.Collection.ItemCollection<Xrm.Page.Stage> {
        throw ('get active path not implemented');
    }

    getEnabledProcesses(callbackFunction: (enabledProcesses: Xrm.Page.data.ProcessDictionary) => void): void {
        callbackFunction(this.enabledProcesses as Xrm.Page.data.ProcessDictionary);
    }

    getSelectedStage(): Xrm.Page.Stage {
        throw ('get selected not implemented');
    }

    addOnStageChange(handler: Xrm.Page.ContextSensitiveHandler): void {
        throw ('add on stage change not implemented');
    }

    addOnStageSelected(handler: Xrm.Page.ContextSensitiveHandler): void {
        throw ('add on stage selected not implemented');
    }

    removeOnStageChange(handler: Xrm.Page.ContextSensitiveHandler): void {
        throw ('remove on stage change not implemented');
    }

    removeOnStageSelected(handler: Xrm.Page.ContextSensitiveHandler): void {
        throw ('remove on stage selected not implemented');
    }

    moveNext(callbackFunction?: Xrm.Page.data.ProcessCallbackDelegate): void {
        throw ('move next not implemented');
    }

    movePrevious(callbackFunction?: Xrm.Page.data.ProcessCallbackDelegate): void {
        throw ('move previous not implemented');
    }
}
