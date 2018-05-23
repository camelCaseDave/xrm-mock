export class UiKeyPressableMock implements Xrm.Controls.UiKeyPressable {
    constructor(public keyPressHandlers?: Xrm.Events.ContextSensitiveHandler[]) {
        this.keyPressHandlers = keyPressHandlers || [];
    }

    public addOnKeyPress(handler: Xrm.Page.ContextSensitiveHandler): void {
        this.keyPressHandlers.push(handler);
    }

    public fireOnKeyPress(eventContext?: Xrm.Events.EventContext): void {
        this.keyPressHandlers.forEach((k) => {
            k(eventContext);
        });
    }

    public removeOnKeyPress(handler: Xrm.Events.ContextSensitiveHandler): void {
        const index = this.keyPressHandlers.indexOf(handler);
        if (index > -1) {
            this.keyPressHandlers.splice(index);
        }
    }
}
