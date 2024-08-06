/// <reference types="xrm" />
import { EventContextWithEventArgsMock, IGenericEventContextComponents } from "./eventcontextwitheventargs.mock";
export declare class PostSaveEventContextMock extends EventContextWithEventArgsMock<Xrm.Events.PostSaveEventArguments> implements Xrm.Events.PostSaveEventContext {
    constructor(components?: IPostSaveEventContextComponents);
}
export interface IPostSaveEventContextComponents extends IGenericEventContextComponents<Xrm.Events.PostSaveEventArguments> {
    eventArgs?: Xrm.Events.PostSaveEventArguments;
}
