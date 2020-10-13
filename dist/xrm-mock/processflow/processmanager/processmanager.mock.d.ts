/// <reference types="xrm" />
import { StageMock } from "../stage/stage.mock";
export declare class ProcessManagerMock implements Xrm.ProcessFlow.ProcessManager {
    enabledProcesses: Xrm.Page.Process[] | Xrm.ProcessFlow.ProcessDictionary;
    constructor(enabledProcesses: Xrm.ProcessFlow.Process[]);
    addOnPreProcessStatusChange(handler: Xrm.Events.ContextSensitiveHandler): void;
    addOnPreStageChange(handler: Xrm.Events.ContextSensitiveHandler): void;
    removeOnPreProcessStatusChange(handler: Xrm.Events.ProcessStatusChangeHandler): void;
    removeOnPreStageChange(handler: Xrm.Events.ContextSensitiveHandler): void;
    getActiveProcess(): Xrm.ProcessFlow.Process;
    setActiveProcess(processId: string, callbackFunction?: Xrm.ProcessFlow.ProcessCallbackDelegate): void;
    setActiveProcessInstance(processInstanceId: string, callbackFunction: Xrm.ProcessFlow.SetProcessInstanceDelegate): void;
    getProcessInstances(callbackFunction: Xrm.ProcessFlow.GetProcessInstancesDelegate): void;
    addOnProcessStatusChange(handler: Xrm.Events.ContextSensitiveHandler): void;
    removeOnProcessStatusChange(handler: Xrm.Events.ProcessStatusChangeHandler): void;
    getInstanceId(): string;
    getInstanceName(): string;
    getStatus(): Xrm.ProcessFlow.ProcessStatus;
    setStatus(status: Xrm.ProcessFlow.ProcessStatus, callbackFunction: Xrm.ProcessFlow.ProcessSetStatusDelegate): void;
    getActiveStage(): StageMock | Xrm.ProcessFlow.Stage;
    setActiveStage(stageId: string, callbackFunction?: Xrm.ProcessFlow.ProcessCallbackDelegate): void;
    getActivePath(): Xrm.Collection.ItemCollection<Xrm.ProcessFlow.Stage>;
    getEnabledProcesses(callbackFunction: (enabledProcesses: Xrm.ProcessFlow.ProcessDictionary) => void): void;
    getSelectedStage(): Xrm.ProcessFlow.Stage;
    addOnStageChange(handler: Xrm.Events.ContextSensitiveHandler): void;
    addOnStageSelected(handler: Xrm.Events.ContextSensitiveHandler): void;
    removeOnStageChange(handler: Xrm.Events.ContextSensitiveHandler): void;
    removeOnStageSelected(handler: Xrm.Events.ContextSensitiveHandler): void;
    moveNext(callbackFunction?: Xrm.ProcessFlow.ProcessCallbackDelegate): void;
    movePrevious(callbackFunction?: Xrm.ProcessFlow.ProcessCallbackDelegate): void;
}
