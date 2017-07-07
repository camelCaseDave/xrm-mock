export class EventContextMock implements Xrm.Page.EventContext {
    constructor() { }

    getContext(): Xrm.Context {
        throw ('not implemented');
    }

    getDepth(): number {
        throw ('not implemented');
    }


    getEventArgs(): Xrm.Page.SaveEventArguments {
        throw ('not implemented');
    }

    getEventSource(): Xrm.Page.Attribute | Xrm.Page.Control | Xrm.Page.Entity {
        throw ('not implemented');
    }

    getSharedVariable<T>(key: string): T {
        throw ('not implemented');
    }

    setSharedVariable<T>(key: string, value: T): void {
        throw ('not implemented');
    }
}