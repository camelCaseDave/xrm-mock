export class EventContextMock implements Xrm.Events.EventContext {
  public context: Xrm.GlobalContext;
  public depth: number;
  public eventSource: Xrm.Attributes.Attribute | Xrm.Controls.Control | Xrm.Entity;
  public formContext: Xrm.FormContext;
  public sharedVariables: {[index: string] : any};

  constructor(components: IEventContextComponents) {
    this.context = components.context;
    this.depth = components.depth === undefined || components.depth === null ? 1 : components.depth;
    this.eventSource = components.eventSource;
    this.formContext = components.formContext;
    this.sharedVariables = components.sharedVariables ?? {};
  }

  public getContext(): Xrm.GlobalContext {
      return this.context;
  }

  public getDepth(): number {
      return this.depth;
  }

  public setDepth(depth: number): void {
      this.depth = depth;
  }

  public getEventSource(): Xrm.Attributes.Attribute | Xrm.Controls.Control | Xrm.Entity {
    if (this.eventSource) {
        return this.eventSource;
    }
    throw new Error("no event source given");
  }

  public getFormContext(): Xrm.FormContext {
      return this.formContext;
  }

  public getSharedVariable<T>(key: string): T {
      return this.sharedVariables[key];
  }

  public setSharedVariable<T>(key: string, value: T): void {
      this.sharedVariables[key] = value;
  }
}

export interface IEventContextComponents {
    context?: Xrm.GlobalContext;
    depth?: number;
    eventSource?: Xrm.Attributes.Attribute | Xrm.Controls.Control | Xrm.Entity;
    formContext?: Xrm.FormContext;
    sharedVariables?: {[index: string] : any};
}
