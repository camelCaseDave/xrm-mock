import { StageMock } from "../../page/stage/stage.mock";

export class ProcessManagerMock implements Xrm.Page.data.ProcessManager {
    public enabledProcesses: Xrm.Page.Process[] | Xrm.Page.data.ProcessDictionary;

    constructor(enabledProcesses: Xrm.Page.Process[]) {
        this.enabledProcesses = enabledProcesses;
    }

    public getActiveProcess(): Xrm.Page.Process {
        return (this.enabledProcesses as Xrm.Page.Process[]).filter((p) => {
            return p.isRendered();
        })[0] || undefined;
    }

    public setActiveProcess(processId: string, callbackFunction?: Xrm.Page.data.ProcessCallbackDelegate): void {
        const activeProcess = this.getActiveProcess();
        if (activeProcess) {
            const newProcess = (this.enabledProcesses as Xrm.Page.Process[]).filter((p) => {
                return p.getId() === processId;
            })[0] || undefined;

            if (newProcess) {
                activeProcess.isRendered = () => false;
                newProcess.isRendered = () => true;
            }
        }
    }

    public setActiveProcessInstance(processInstanceId: string,
        callbackFunction: Xrm.Page.data.SetProcessInstanceDelegate): void {
        throw new Error("set active process instance not implemented.");
    }

    public getProcessInstances(callbackFunction: Xrm.Page.data.GetProcessInstancesDelegate): void {
        throw new Error("get process instances not implemented.");
    }

    public addOnProcessStatusChange(handler: Xrm.Page.ProcessStatusChangeHandler): void {
        throw new Error("add on process status change not implemented.");
    }

    public removeOnProcessStatusChange(handler: Xrm.Page.ProcessStatusChangeHandler): void {
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

    public getStatus(): Xrm.Page.ProcessStatus {
        throw new Error("get status not implemented.");
    }

    public setStatus(status: Xrm.Page.ProcessStatus, callbackFunction: Xrm.Page.data.ProcessSetStatusDelegate): void {
        throw new Error("set status not implemented.");
    }

    public getActiveStage(): StageMock | Xrm.Page.Stage {
        const activeProcess = this.getActiveProcess();
        const stages = activeProcess.getStages();
        const activeStages: Xrm.Page.Stage[] = [];

        stages.forEach((s: StageMock): void => {
            if (s.getStatus() === "active") {
                activeStages.push(s);
            }
        });

        return activeStages[0] || undefined;
    }

    public setActiveStage(stageId: string, callbackFunction?: Xrm.Page.data.ProcessCallbackDelegate): void {
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

    public getActivePath(): Xrm.Collection.ItemCollection<Xrm.Page.Stage> {
        throw new Error("get active path not implemented");
    }

    public getEnabledProcesses(callbackFunction: (enabledProcesses: Xrm.Page.data.ProcessDictionary) => void): void {
        callbackFunction(this.enabledProcesses as Xrm.Page.data.ProcessDictionary);
    }

    public getSelectedStage(): Xrm.Page.Stage {
        throw new Error("get selected not implemented");
    }

    public addOnStageChange(handler: Xrm.Page.ContextSensitiveHandler): void {
        throw new Error("add on stage change not implemented");
    }

    public addOnStageSelected(handler: Xrm.Page.ContextSensitiveHandler): void {
        throw new Error("add on stage selected not implemented");
    }

    public removeOnStageChange(handler: Xrm.Page.ContextSensitiveHandler): void {
        throw new Error("remove on stage change not implemented");
    }

    public removeOnStageSelected(handler: Xrm.Page.ContextSensitiveHandler): void {
        throw new Error("remove on stage selected not implemented");
    }

    public moveNext(callbackFunction?: Xrm.Page.data.ProcessCallbackDelegate): void {
        throw new Error("move next not implemented");
    }

    public movePrevious(callbackFunction?: Xrm.Page.data.ProcessCallbackDelegate): void {
        throw new Error("move previous not implemented");
    }
}
