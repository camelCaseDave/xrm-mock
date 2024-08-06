/// <reference types="xrm" />
import { IGenericSaveEventContextComponents } from "./saveeventcontext/saveeventcontext.mock";
import { EventContextWithEventArgsMock } from "./eventcontextwitheventargs.mock";
export declare class SaveEventContextAsyncMock extends EventContextWithEventArgsMock<Xrm.Events.SaveEventArgumentsAsync> implements Xrm.Events.SaveEventContextAsync {
    asyncTimeoutDisabled: boolean;
    constructor(components?: ISaveEventContextAsyncComponents);
    disableAsyncTimeout(): void;
}
export interface ISaveEventContextAsyncComponents extends IGenericSaveEventContextComponents<Xrm.Events.SaveEventArgumentsAsync> {
}
