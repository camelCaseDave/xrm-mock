export class EventContextMock implements Xrm.Events.EventContext {
  public formContext: Xrm.FormContext;
  public context: Xrm.GlobalContext;
  constructor(components: IEventContextComponents) {
    this.formContext = components.formContext;
    this.context = components.context;
  }

  public getContext(): Xrm.GlobalContext {
      return this.context;
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
      return this.formContext;
  }

  public getSharedVariable<T>(key: string): T {
      throw new Error("not implemented");
  }

  public setSharedVariable<T>(key: string, value: T): void {
      throw new Error("not implemented");
  }
}
export interface IEventContextComponents {
    formContext?: Xrm.FormContext;
    context?: Xrm.GlobalContext;
}
