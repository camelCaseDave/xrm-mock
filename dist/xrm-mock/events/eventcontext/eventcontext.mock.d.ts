/// <reference types="xrm" />
export declare class EventContextMock implements Xrm.Events.EventContext {
    context: Xrm.GlobalContext;
    depth: number;
    eventSource: Xrm.Attributes.Attribute | Xrm.Controls.Control | Xrm.Entity;
    formContext: Xrm.FormContext;
    sharedVariables: {
        [index: string]: any;
    };
    constructor(components: IEventContextComponents);
    getContext(): Xrm.GlobalContext;
    getDepth(): number;
    setDepth(depth: number): void;
    getEventSource(): Xrm.Attributes.Attribute | Xrm.Controls.Control | Xrm.Entity;
    getFormContext(): Xrm.FormContext;
    getSharedVariable<T>(key: string): T;
    setSharedVariable<T>(key: string, value: T): void;
}
export interface IEventContextComponents {
    context?: Xrm.GlobalContext;
    depth?: number;
    eventSource?: Xrm.Attributes.Attribute | Xrm.Controls.Control | Xrm.Entity;
    formContext?: Xrm.FormContext;
    sharedVariables?: {
        [index: string]: any;
    };
}
