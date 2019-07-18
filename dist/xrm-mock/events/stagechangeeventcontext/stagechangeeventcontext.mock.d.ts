/// <reference types="xrm" />
export declare class StageChangeEventContextMock implements Xrm.Events.StageChangeEventContext {
    private eventContext;
    constructor(eventContext: Xrm.Events.EventContext);
    getContext(): Xrm.GlobalContext;
    getDepth(): number;
    getEventSource(): Xrm.Attributes.Attribute | Xrm.Controls.Control | Xrm.Entity;
    getFormContext(): Xrm.FormContext;
    getSharedVariable<T>(key: string): T;
    setSharedVariable<T>(key: string, value: T): void;
    getEventArgs(): Xrm.Events.StageChangeEventArguments;
}
