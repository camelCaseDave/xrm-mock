import { EventContextMock, IEventContextComponents } from "./eventcontext/eventcontext.mock";

export class EventContextWithEventArgsMock<TArgs> extends EventContextMock {
  public eventArgs: TArgs;

  constructor(components: IGenericEventContextComponents<TArgs>) {
    super(components);

    this.eventArgs = components.eventArgs;
  }

  public getEventArgs(): TArgs {
    if (this.eventArgs) {
        return this.eventArgs;
    }
    throw new Error("no event args given!");
}
}

export interface IGenericEventContextComponents<TArgs> extends IEventContextComponents {
    eventArgs?: TArgs
}
