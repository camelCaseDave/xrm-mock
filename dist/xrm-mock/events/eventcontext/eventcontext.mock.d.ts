/// <reference types="xrm" />
export declare class EventContextMock implements Xrm.Events.EventContext {
    getContext(): Xrm.GlobalContext;
    getDepth(): number;
    getEventArgs(): Xrm.Events.SaveEventContext;
    getEventSource(): Xrm.Attributes.Attribute | Xrm.Controls.Control | Xrm.Entity;
    getFormContext(): Xrm.FormContext;
    getSharedVariable<T>(key: string): T;
    setSharedVariable<T>(key: string, value: T): void;
}
