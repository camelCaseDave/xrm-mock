/// <reference types="xrm" />
export declare class UiKeyPressableMock implements Xrm.Page.UiKeyPressable {
    keyPressHandlers: Xrm.Page.ContextSensitiveHandler[];
    addOnKeyPress(handler: Xrm.Page.ContextSensitiveHandler): void;
    fireOnKeyPress(eventContext?: Xrm.Page.EventContext): void;
    removeOnKeyPress(handler: Xrm.Page.ContextSensitiveHandler): void;
}
