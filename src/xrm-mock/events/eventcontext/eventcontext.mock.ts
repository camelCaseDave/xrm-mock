export class EventContextMock implements Xrm.Events.EventContext {
  public getContext(): Xrm.GlobalContext {
      throw new Error("not implemented");
  }

  public getDepth(): number {
      throw new Error("not implemented");
  }

  public getEventArgs(): Xrm.Events.SaveEventContext {
      throw new Error("not implemented");
  }

  public getEventSource(): Xrm.Attributes.Attribute | Xrm.Controls.Control | Xrm.Entity {
      throw new Error("not implemented");
  }

  public getFormContext(): Xrm.FormContext {
      throw new Error("Method not implemented.");
  }

  public getSharedVariable<T>(key: string): T {
      throw new Error("not implemented");
  }

  public setSharedVariable<T>(key: string, value: T): void {
      throw new Error("not implemented");
  }
}
