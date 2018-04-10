/// <reference types="xrm" />
export declare class SaveEventArgumentsMock implements Xrm.Page.SaveEventArguments {
    saveMode: XrmEnum.SaveMode;
    defaultPrevented: boolean;
    constructor(saveMode: XrmEnum.SaveMode);
    getSaveMode(): XrmEnum.SaveMode;
    isDefaultPrevented(): boolean;
    preventDefault(): void;
    getEventArgs(): Xrm.Events.SaveEventArguments;
    getContext(): Xrm.GlobalContext;
    getDepth(): number;
    getEventSource(): Xrm.Attributes.Attribute | Xrm.Controls.Control | Xrm.Entity;
    getFormContext(): Xrm.FormContext;
    getSharedVariable<T>(key: string): T;
    setSharedVariable<T>(key: string, value: T): void;
}
