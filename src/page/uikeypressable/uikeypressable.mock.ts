export class UiKeyPressableMock implements Xrm.Page.UiKeyPressable {
    keyPressHandlers: Xrm.Page.ContextSensitiveHandler[];

    constructor(keyPressHandlers?: Xrm.Page.ContextSensitiveHandler[]) {
        this.keyPressHandlers = keyPressHandlers;
    }

    addOnKeyPress(handler: Xrm.Page.ContextSensitiveHandler): void {
        this.keyPressHandlers.push(handler);
    }

    fireOnKeyPress(eventContext?: Xrm.Page.EventContext): void {
        this.keyPressHandlers.forEach((k) => {
            k(eventContext);
        });
    }

    removeOnKeyPress(handler: Xrm.Page.ContextSensitiveHandler): void {
        let index = this.keyPressHandlers.indexOf(handler);
        if (index > -1) {
            this.keyPressHandlers.splice(index);
        }
    }
}