export class UiKeyPressableMock implements Xrm.Page.UiKeyPressable {
    public keyPressHandlers: Xrm.Page.ContextSensitiveHandler[];

    constructor(keyPressHandlers?: Xrm.Page.ContextSensitiveHandler[]) {
        this.keyPressHandlers = keyPressHandlers;
    }

    public addOnKeyPress(handler: Xrm.Page.ContextSensitiveHandler): void {
        this.keyPressHandlers.push(handler);
    }

    public fireOnKeyPress(eventContext?: Xrm.Page.EventContext): void {
        this.keyPressHandlers.forEach((k) => {
            k(eventContext);
        });
    }

    public removeOnKeyPress(handler: Xrm.Page.ContextSensitiveHandler): void {
        const index = this.keyPressHandlers.indexOf(handler);
        if (index > -1) {
            this.keyPressHandlers.splice(index);
        }
    }
}
