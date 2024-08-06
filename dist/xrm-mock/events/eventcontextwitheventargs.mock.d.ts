import { EventContextMock, IEventContextComponents } from "./eventcontext/eventcontext.mock";
export declare class EventContextWithEventArgsMock<TArgs> extends EventContextMock {
    eventArgs: TArgs;
    constructor(components: IGenericEventContextComponents<TArgs>);
    getEventArgs(): TArgs;
}
export interface IGenericEventContextComponents<TArgs> extends IEventContextComponents {
    eventArgs?: TArgs;
}
