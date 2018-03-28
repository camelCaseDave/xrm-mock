export class EventContextMock implements Xrm.Page.EventContext {
    public getContext(): Xrm.Context {
        throw new Error("not implemented");
    }

    public getDepth(): number {
        throw new Error("not implemented");
    }

    public getEventArgs(): Xrm.Page.SaveEventArguments {
        throw new Error("not implemented");
    }

    public getEventSource(): Xrm.Page.Attribute | Xrm.Page.Control | Xrm.Page.Entity {
        throw new Error("not implemented");
    }

    public getSharedVariable<T>(key: string): T {
        throw new Error("not implemented");
    }

    public setSharedVariable<T>(key: string, value: T): void {
        throw new Error("not implemented");
    }
}
