/// <reference types="xrm" />
import { EventContextWithEventArgsMock, IGenericEventContextComponents } from "../eventcontextwitheventargs.mock";
export declare class SaveEventContextMock extends EventContextWithEventArgsMock<Xrm.Events.SaveEventArguments> implements Xrm.Events.SaveEventContext {
    constructor(components?: ISaveEventContextComponents);
}
export interface IGenericSaveEventContextComponents<TArgs extends Xrm.Events.SaveEventArguments> extends IGenericEventContextComponents<TArgs> {
    saveMode?: XrmEnum.SaveMode;
}
export interface ISaveEventContextComponents extends IGenericSaveEventContextComponents<Xrm.Events.SaveEventArguments> {
}
