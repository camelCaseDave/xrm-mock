import { StageMock } from "../stage/stage.mock";

export class ProcessManagerMock implements Xrm.ProcessFlow.ProcessManager {
    public enabledProcesses: Xrm.Page.Process[] | Xrm.ProcessFlow.ProcessDictionary;

    constructor(enabledProcesses: Xrm.ProcessFlow.Process[]) {
        this.enabledProcesses = enabledProcesses;
    }

    public getActiveProcess(): Xrm.ProcessFlow.Process {
        return (this.enabledProcesses as Xrm.ProcessFlow.Process[]).filter((p) => {
            return p.isRendered();
        })[0] || undefined;
    }

    public setActiveProcess(processId: string, callbackFunction?: Xrm.ProcessFlow.ProcessCallbackDelegate): void {
        const activeProcess = this.getActiveProcess();
        if (activeProcess) {
            const newProcess = (this.enabledProcesses as Xrm.ProcessFlow.Process[]).filter((p) => {
                return p.getId() === processId;
            })[0] || undefined;

            if (newProcess) {
                activeProcess.isRendered = () => false;
                newProcess.isRendered = () => true;
            }
        }
    }

    public setActiveProcessInstance(processInstanceId: string,
                                    callbackFunction: Xrm.ProcessFlow.SetProcessInstanceDelegate): void {
        throw new Error("set active process instance not implemented.");
    }

    public getProcessInstances(callbackFunction: Xrm.ProcessFlow.GetProcessInstancesDelegate): void {
        throw new Error("get process instances not implemented.");
    }

    public addOnProcessStatusChange(handler: Xrm.Events.ProcessStatusChangeHandler): void {
        throw new Error("add on process status change not implemented.");
    }

    public removeOnProcessStatusChange(handler: Xrm.Events.ProcessStatusChangeHandler): void {
        throw new Error("remove on process status change not implemented.");
    }

    public getInstanceId(): string {
        const activeProcess = this.getActiveProcess();
        const instanceId = activeProcess.getId() || "";
        return instanceId;
    }

    public getInstanceName(): string {
        const activeProcess = this.getActiveProcess();
        const instanceName = activeProcess.getName();
        return instanceName;
    }

    public getStatus(): Xrm.ProcessFlow.ProcessStatus {
        throw new Error("get status not implemented.");
    }

    public setStatus(status: Xrm.ProcessFlow.ProcessStatus, callbackFunction: Xrm.ProcessFlow.ProcessSetStatusDelegate): void {
        throw new Error("set status not implemented.");
    }

    public getActiveStage(): StageMock | Xrm.ProcessFlow.Stage {
        const activeProcess = this.getActiveProcess();
        const stages = activeProcess.getStages();
        const activeStages: Xrm.ProcessFlow.Stage[] = [];

        stages.forEach((s: StageMock): void => {
            if (s.getStatus() === "active") {
                activeStages.push(s);
            }
        });

        return activeStages[0] || undefined;
    }

    public setActiveStage(stageId: string, callbackFunction?: Xrm.ProcessFlow.ProcessCallbackDelegate): void {
        const activeProcess = this.getActiveProcess();
        const stages = activeProcess.getStages();
        let setStatus = "";

        stages.forEach((s: StageMock): void => {
            if (s.getId() === stageId) {
                s._setStatus("active");
                setStatus = "active";
            } else {
                s._setStatus("inactive");
            }
        });

        if (callbackFunction) {
            callbackFunction(setStatus);
        }
    }

    public getActivePath(): Xrm.Collection.ItemCollection<Xrm.ProcessFlow.Stage> {
        throw new Error("get active path not implemented");
    }

    public getEnabledProcesses(callbackFunction: (enabledProcesses: Xrm.ProcessFlow.ProcessDictionary) => void): void {
        callbackFunction(this.enabledProcesses as Xrm.ProcessFlow.ProcessDictionary);
    }

    public getSelectedStage(): Xrm.ProcessFlow.Stage {
        throw new Error("get selected not implemented");
    }

    public addOnStageChange(handler: Xrm.Events.ContextSensitiveHandler): void {
        throw new Error("add on stage change not implemented");
    }

    public addOnStageSelected(handler: Xrm.Events.ContextSensitiveHandler): void {
        throw new Error("add on stage selected not implemented");
    }

    public removeOnStageChange(handler: Xrm.Events.ContextSensitiveHandler): void {
        throw new Error("remove on stage change not implemented");
    }

    public removeOnStageSelected(handler: Xrm.Events.ContextSensitiveHandler): void {
        throw new Error("remove on stage selected not implemented");
    }

    public moveNext(callbackFunction?: Xrm.ProcessFlow.ProcessCallbackDelegate): void {
        throw new Error("move next not implemented");
    }

    public movePrevious(callbackFunction?: Xrm.ProcessFlow.ProcessCallbackDelegate): void {
        throw new Error("move previous not implemented");
    }
}
