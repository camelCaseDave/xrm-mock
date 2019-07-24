export function findIndex(handlers: Xrm.Events.ContextSensitiveHandler[], handler: Xrm.Events.ContextSensitiveHandler): number {
    return handlers.findIndex((item) => item.name === handler.name);
}
