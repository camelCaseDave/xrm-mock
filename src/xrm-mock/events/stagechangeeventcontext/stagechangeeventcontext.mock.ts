export class StageChangeEventContextMock implements Xrm.Events.StageChangeEventContext {
  private eventContext: Xrm.Events.EventContext;

  constructor(eventContext: Xrm.Events.EventContext) {
    this.eventContext = eventContext;
  }

  public getContext(): Xrm.GlobalContext {
    return this.eventContext.getContext();
  }

  public getDepth(): number {
    return this.eventContext.getDepth();
  }

  public getEventSource(): Xrm.Attributes.Attribute | Xrm.Controls.Control | Xrm.Entity {
    return this.eventContext.getEventSource();
  }

  public getFormContext(): Xrm.FormContext {
    return this.eventContext.getFormContext();
  }

  public getSharedVariable<T>(key: string): T {
    return this.eventContext.getSharedVariable(key);
  }

  public setSharedVariable<T>(key: string, value: T): void {
    return this.setSharedVariable(key, value);
  }

  public getEventArgs(): Xrm.Events.StageChangeEventArguments {
    throw new Error("Not implemented.");
  }
}
