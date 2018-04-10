/// <reference types="xrm" />
export declare class EventContextMock implements Xrm.Page.EventContext {
    getContext(): Xrm.GlobalContext;
    getDepth(): number;
    getEventArgs(): Xrm.Page.SaveEventArguments;
    getEventSource(): Xrm.Page.Attribute | Xrm.Page.Control | Xrm.Page.Entity;
    getFormContext(): Xrm.FormContext;
    getSharedVariable<T>(key: string): T;
    setSharedVariable<T>(key: string, value: T): void;
}
