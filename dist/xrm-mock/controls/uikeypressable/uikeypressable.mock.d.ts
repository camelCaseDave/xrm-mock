/// <reference types="xrm" />
export declare class UiKeyPressableMock implements Xrm.Controls.UiKeyPressable {
    keyPressHandlers?: Xrm.Events.ContextSensitiveHandler[];
    constructor(keyPressHandlers?: Xrm.Events.ContextSensitiveHandler[]);
    addOnKeyPress(handler: Xrm.Events.ContextSensitiveHandler): void;
    fireOnKeyPress(eventContext?: Xrm.Events.EventContext): void;
    removeOnKeyPress(handler: Xrm.Events.ContextSensitiveHandler): void;
}
